package com.aliyun.ros.cdk.clickhouse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ClickHouse::SynDb</code>, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.396Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.SynDb")
public class SynDb extends com.aliyun.ros.cdk.core.Resource {

    protected SynDb(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SynDb(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SynDb(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.SynDbProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SynDb(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.SynDbProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DbClusterId: The id of clickhouse.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RdsId: The id of RDS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRdsId() {
        return software.amazon.jsii.Kernel.get(this, "attrRdsId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SynDbs: Sync Dbs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSynDbs() {
        return software.amazon.jsii.Kernel.get(this, "attrSynDbs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.SynDbProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.SynDbProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.SynDbProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.SynDb}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.SynDb> {
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
        private final com.aliyun.ros.cdk.clickhouse.SynDbProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.SynDbProps.Builder();
        }

        /**
         * Property ckPassword: The password of the database account.
         * <p>
         * @return {@code this}
         * @param ckPassword Property ckPassword: The password of the database account. This parameter is required.
         */
        public Builder ckPassword(final java.lang.String ckPassword) {
            this.props.ckPassword(ckPassword);
            return this;
        }
        /**
         * Property ckPassword: The password of the database account.
         * <p>
         * @return {@code this}
         * @param ckPassword Property ckPassword: The password of the database account. This parameter is required.
         */
        public Builder ckPassword(final com.aliyun.ros.cdk.core.IResolvable ckPassword) {
            this.props.ckPassword(ckPassword);
            return this;
        }

        /**
         * Property ckUserName: The account of the clickhouse database.
         * <p>
         * @return {@code this}
         * @param ckUserName Property ckUserName: The account of the clickhouse database. This parameter is required.
         */
        public Builder ckUserName(final java.lang.String ckUserName) {
            this.props.ckUserName(ckUserName);
            return this;
        }
        /**
         * Property ckUserName: The account of the clickhouse database.
         * <p>
         * @return {@code this}
         * @param ckUserName Property ckUserName: The account of the clickhouse database. This parameter is required.
         */
        public Builder ckUserName(final com.aliyun.ros.cdk.core.IResolvable ckUserName) {
            this.props.ckUserName(ckUserName);
            return this;
        }

        /**
         * Property dbClusterId: Clickhouse cluster id.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: Clickhouse cluster id. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: Clickhouse cluster id.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: Clickhouse cluster id. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property rdsId: The instance id of RDS.
         * <p>
         * @return {@code this}
         * @param rdsId Property rdsId: The instance id of RDS. This parameter is required.
         */
        public Builder rdsId(final java.lang.String rdsId) {
            this.props.rdsId(rdsId);
            return this;
        }
        /**
         * Property rdsId: The instance id of RDS.
         * <p>
         * @return {@code this}
         * @param rdsId Property rdsId: The instance id of RDS. This parameter is required.
         */
        public Builder rdsId(final com.aliyun.ros.cdk.core.IResolvable rdsId) {
            this.props.rdsId(rdsId);
            return this;
        }

        /**
         * Property rdsPassword: The password of the RDS database account.
         * <p>
         * @return {@code this}
         * @param rdsPassword Property rdsPassword: The password of the RDS database account. This parameter is required.
         */
        public Builder rdsPassword(final java.lang.String rdsPassword) {
            this.props.rdsPassword(rdsPassword);
            return this;
        }
        /**
         * Property rdsPassword: The password of the RDS database account.
         * <p>
         * @return {@code this}
         * @param rdsPassword Property rdsPassword: The password of the RDS database account. This parameter is required.
         */
        public Builder rdsPassword(final com.aliyun.ros.cdk.core.IResolvable rdsPassword) {
            this.props.rdsPassword(rdsPassword);
            return this;
        }

        /**
         * Property rdsUserName: The account of the RDS database.
         * <p>
         * @return {@code this}
         * @param rdsUserName Property rdsUserName: The account of the RDS database. This parameter is required.
         */
        public Builder rdsUserName(final java.lang.String rdsUserName) {
            this.props.rdsUserName(rdsUserName);
            return this;
        }
        /**
         * Property rdsUserName: The account of the RDS database.
         * <p>
         * @return {@code this}
         * @param rdsUserName Property rdsUserName: The account of the RDS database. This parameter is required.
         */
        public Builder rdsUserName(final com.aliyun.ros.cdk.core.IResolvable rdsUserName) {
            this.props.rdsUserName(rdsUserName);
            return this;
        }

        /**
         * Property skipUnsupported: Skip unsupported table or not.
         * <p>
         * @return {@code this}
         * @param skipUnsupported Property skipUnsupported: Skip unsupported table or not. This parameter is required.
         */
        public Builder skipUnsupported(final java.lang.Boolean skipUnsupported) {
            this.props.skipUnsupported(skipUnsupported);
            return this;
        }
        /**
         * Property skipUnsupported: Skip unsupported table or not.
         * <p>
         * @return {@code this}
         * @param skipUnsupported Property skipUnsupported: Skip unsupported table or not. This parameter is required.
         */
        public Builder skipUnsupported(final com.aliyun.ros.cdk.core.IResolvable skipUnsupported) {
            this.props.skipUnsupported(skipUnsupported);
            return this;
        }

        /**
         * Property synDbTables: The tables to syn.
         * <p>
         * @return {@code this}
         * @param synDbTables Property synDbTables: The tables to syn. This parameter is required.
         */
        public Builder synDbTables(final com.aliyun.ros.cdk.core.IResolvable synDbTables) {
            this.props.synDbTables(synDbTables);
            return this;
        }
        /**
         * Property synDbTables: The tables to syn.
         * <p>
         * @return {@code this}
         * @param synDbTables Property synDbTables: The tables to syn. This parameter is required.
         */
        public Builder synDbTables(final java.util.List<? extends java.lang.Object> synDbTables) {
            this.props.synDbTables(synDbTables);
            return this;
        }

        /**
         * Property clickhousePort: The port of clickhouse id.
         * <p>
         * @return {@code this}
         * @param clickhousePort Property clickhousePort: The port of clickhouse id. This parameter is required.
         */
        public Builder clickhousePort(final java.lang.Number clickhousePort) {
            this.props.clickhousePort(clickhousePort);
            return this;
        }
        /**
         * Property clickhousePort: The port of clickhouse id.
         * <p>
         * @return {@code this}
         * @param clickhousePort Property clickhousePort: The port of clickhouse id. This parameter is required.
         */
        public Builder clickhousePort(final com.aliyun.ros.cdk.core.IResolvable clickhousePort) {
            this.props.clickhousePort(clickhousePort);
            return this;
        }

        /**
         * Property limitUpper: The maximum number of rows to sync per second.
         * <p>
         * @return {@code this}
         * @param limitUpper Property limitUpper: The maximum number of rows to sync per second. This parameter is required.
         */
        public Builder limitUpper(final java.lang.Number limitUpper) {
            this.props.limitUpper(limitUpper);
            return this;
        }
        /**
         * Property limitUpper: The maximum number of rows to sync per second.
         * <p>
         * @return {@code this}
         * @param limitUpper Property limitUpper: The maximum number of rows to sync per second. This parameter is required.
         */
        public Builder limitUpper(final com.aliyun.ros.cdk.core.IResolvable limitUpper) {
            this.props.limitUpper(limitUpper);
            return this;
        }

        /**
         * Property rdsPort: The port of rds.
         * <p>
         * @return {@code this}
         * @param rdsPort Property rdsPort: The port of rds. This parameter is required.
         */
        public Builder rdsPort(final java.lang.Number rdsPort) {
            this.props.rdsPort(rdsPort);
            return this;
        }
        /**
         * Property rdsPort: The port of rds.
         * <p>
         * @return {@code this}
         * @param rdsPort Property rdsPort: The port of rds. This parameter is required.
         */
        public Builder rdsPort(final com.aliyun.ros.cdk.core.IResolvable rdsPort) {
            this.props.rdsPort(rdsPort);
            return this;
        }

        /**
         * Property rdsVpcId: The vpc of rds.
         * <p>
         * @return {@code this}
         * @param rdsVpcId Property rdsVpcId: The vpc of rds. This parameter is required.
         */
        public Builder rdsVpcId(final java.lang.String rdsVpcId) {
            this.props.rdsVpcId(rdsVpcId);
            return this;
        }
        /**
         * Property rdsVpcId: The vpc of rds.
         * <p>
         * @return {@code this}
         * @param rdsVpcId Property rdsVpcId: The vpc of rds. This parameter is required.
         */
        public Builder rdsVpcId(final com.aliyun.ros.cdk.core.IResolvable rdsVpcId) {
            this.props.rdsVpcId(rdsVpcId);
            return this;
        }

        /**
         * Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
         * <p>
         * @return {@code this}
         * @param rdsVpcUrl Property rdsVpcUrl: Intranet address of ApsaraDB for RDS. This parameter is required.
         */
        public Builder rdsVpcUrl(final java.lang.String rdsVpcUrl) {
            this.props.rdsVpcUrl(rdsVpcUrl);
            return this;
        }
        /**
         * Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
         * <p>
         * @return {@code this}
         * @param rdsVpcUrl Property rdsVpcUrl: Intranet address of ApsaraDB for RDS. This parameter is required.
         */
        public Builder rdsVpcUrl(final com.aliyun.ros.cdk.core.IResolvable rdsVpcUrl) {
            this.props.rdsVpcUrl(rdsVpcUrl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.SynDb}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.SynDb build() {
            return new com.aliyun.ros.cdk.clickhouse.SynDb(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
