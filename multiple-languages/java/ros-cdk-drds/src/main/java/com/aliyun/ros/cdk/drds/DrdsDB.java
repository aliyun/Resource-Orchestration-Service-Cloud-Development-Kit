package com.aliyun.ros.cdk.drds;

/**
 * A ROS resource type:  `ALIYUN::DRDS::DrdsDB`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.806Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.DrdsDB")
public class DrdsDB extends com.aliyun.ros.cdk.core.Resource {

    protected DrdsDB(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DrdsDB(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
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
    public DrdsDB(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsDBProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DrdsDB(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsDBProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.drds.DrdsDB}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.drds.DrdsDB> {
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
        private final com.aliyun.ros.cdk.drds.DrdsDBProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.drds.DrdsDBProps.Builder();
        }

        /**
         * Property drdsInstanceId: DRDS instance ID.
         * <p>
         * @return {@code this}
         * @param drdsInstanceId Property drdsInstanceId: DRDS instance ID. This parameter is required.
         */
        public Builder drdsInstanceId(final java.lang.String drdsInstanceId) {
            this.props.drdsInstanceId(drdsInstanceId);
            return this;
        }
        /**
         * Property drdsInstanceId: DRDS instance ID.
         * <p>
         * @return {@code this}
         * @param drdsInstanceId Property drdsInstanceId: DRDS instance ID. This parameter is required.
         */
        public Builder drdsInstanceId(final com.aliyun.ros.cdk.core.IResolvable drdsInstanceId) {
            this.props.drdsInstanceId(drdsInstanceId);
            return this;
        }

        /**
         * Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property dbInstanceIsCreating: Check whether the RDS instance is being created.
         * <p>
         * @return {@code this}
         * @param dbInstanceIsCreating Property dbInstanceIsCreating: Check whether the RDS instance is being created. This parameter is required.
         */
        public Builder dbInstanceIsCreating(final java.lang.Boolean dbInstanceIsCreating) {
            this.props.dbInstanceIsCreating(dbInstanceIsCreating);
            return this;
        }
        /**
         * Property dbInstanceIsCreating: Check whether the RDS instance is being created.
         * <p>
         * @return {@code this}
         * @param dbInstanceIsCreating Property dbInstanceIsCreating: Check whether the RDS instance is being created. This parameter is required.
         */
        public Builder dbInstanceIsCreating(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIsCreating) {
            this.props.dbInstanceIsCreating(dbInstanceIsCreating);
            return this;
        }

        /**
         * Property dbInstType: The type of the attached storage.
         * <p>
         * Valid values:
         * RDS or POLARDB
         * <p>
         * @return {@code this}
         * @param dbInstType Property dbInstType: The type of the attached storage. This parameter is required.
         */
        public Builder dbInstType(final java.lang.String dbInstType) {
            this.props.dbInstType(dbInstType);
            return this;
        }
        /**
         * Property dbInstType: The type of the attached storage.
         * <p>
         * Valid values:
         * RDS or POLARDB
         * <p>
         * @return {@code this}
         * @param dbInstType Property dbInstType: The type of the attached storage. This parameter is required.
         */
        public Builder dbInstType(final com.aliyun.ros.cdk.core.IResolvable dbInstType) {
            this.props.dbInstType(dbInstType);
            return this;
        }

        /**
         * Property dbName: Database Name.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: Database Name. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * Property dbName: Database Name.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: Database Name. This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * Property encode: Encoding used by the database.
         * <p>
         * @return {@code this}
         * @param encode Property encode: Encoding used by the database. This parameter is required.
         */
        public Builder encode(final java.lang.String encode) {
            this.props.encode(encode);
            return this;
        }
        /**
         * Property encode: Encoding used by the database.
         * <p>
         * @return {@code this}
         * @param encode Property encode: Encoding used by the database. This parameter is required.
         */
        public Builder encode(final com.aliyun.ros.cdk.core.IResolvable encode) {
            this.props.encode(encode);
            return this;
        }

        /**
         * Property instDbName:.
         * <p>
         * @return {@code this}
         * @param instDbName Property instDbName:. This parameter is required.
         */
        public Builder instDbName(final com.aliyun.ros.cdk.core.IResolvable instDbName) {
            this.props.instDbName(instDbName);
            return this;
        }
        /**
         * Property instDbName:.
         * <p>
         * @return {@code this}
         * @param instDbName Property instDbName:. This parameter is required.
         */
        public Builder instDbName(final java.util.List<? extends java.lang.Object> instDbName) {
            this.props.instDbName(instDbName);
            return this;
        }

        /**
         * Property password: The logon password of the database instance.
         * <p>
         * @return {@code this}
         * @param password Property password: The logon password of the database instance. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The logon password of the database instance.
         * <p>
         * @return {@code this}
         * @param password Property password: The logon password of the database instance. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property rdsInstance: This property is required only for vertical partitioning.
         * <p>
         * @return {@code this}
         * @param rdsInstance Property rdsInstance: This property is required only for vertical partitioning. This parameter is required.
         */
        public Builder rdsInstance(final com.aliyun.ros.cdk.core.IResolvable rdsInstance) {
            this.props.rdsInstance(rdsInstance);
            return this;
        }
        /**
         * Property rdsInstance: This property is required only for vertical partitioning.
         * <p>
         * @return {@code this}
         * @param rdsInstance Property rdsInstance: This property is required only for vertical partitioning. This parameter is required.
         */
        public Builder rdsInstance(final java.util.List<? extends java.lang.Object> rdsInstance) {
            this.props.rdsInstance(rdsInstance);
            return this;
        }

        /**
         * Property type: Database Sharding method.
         * <p>
         * For more information, see scalability principle. Valid values:
         * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
         * and table sharding.
         * VERTICAL: indicates VERTICAL partitioning.
         * <p>
         * @return {@code this}
         * @param type Property type: Database Sharding method. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Database Sharding method.
         * <p>
         * For more information, see scalability principle. Valid values:
         * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
         * and table sharding.
         * VERTICAL: indicates VERTICAL partitioning.
         * <p>
         * @return {@code this}
         * @param type Property type: Database Sharding method. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.drds.DrdsDB}.
         */
        @Override
        public com.aliyun.ros.cdk.drds.DrdsDB build() {
            return new com.aliyun.ros.cdk.drds.DrdsDB(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
