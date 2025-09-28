package com.aliyun.ros.cdk.sls;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLS::RdsExternalStore</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.018Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RdsExternalStore")
public class RdsExternalStore extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sls.IRdsExternalStore {

    protected RdsExternalStore(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RdsExternalStore(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RdsExternalStore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RdsExternalStoreProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RdsExternalStore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RdsExternalStoreProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ExternalStoreName: The name of the external store.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalStoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrExternalStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Project: The name of the project to which the external store belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProject() {
        return software.amazon.jsii.Kernel.get(this, "attrProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RdsExternalStoreProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sls.RdsExternalStoreProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RdsExternalStore}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RdsExternalStore> {
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
        private final com.aliyun.ros.cdk.sls.RdsExternalStoreProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RdsExternalStoreProps.Builder();
        }

        /**
         * Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param db Property db: The name of the database in the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder db(final java.lang.String db) {
            this.props.db(db);
            return this;
        }
        /**
         * Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param db Property db: The name of the database in the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder db(final com.aliyun.ros.cdk.core.IResolvable db) {
            this.props.db(db);
            return this;
        }

        /**
         * Property externalStoreName: The name of the external store.
         * <p>
         * The name must be unique in a project and different from Logstore.
         * <p>
         * @return {@code this}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         */
        public Builder externalStoreName(final java.lang.String externalStoreName) {
            this.props.externalStoreName(externalStoreName);
            return this;
        }
        /**
         * Property externalStoreName: The name of the external store.
         * <p>
         * The name must be unique in a project and different from Logstore.
         * <p>
         * @return {@code this}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         */
        public Builder externalStoreName(final com.aliyun.ros.cdk.core.IResolvable externalStoreName) {
            this.props.externalStoreName(externalStoreName);
            return this;
        }

        /**
         * Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param host Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }
        /**
         * Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param host Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder host(final com.aliyun.ros.cdk.core.IResolvable host) {
            this.props.host(host);
            return this;
        }

        /**
         * Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param password Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param password Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param port Property port: The internal or public port of the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }
        /**
         * Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param port Property port: The internal or public port of the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder port(final com.aliyun.ros.cdk.core.IResolvable port) {
            this.props.port(port);
            return this;
        }

        /**
         * Property project: The name of the project.
         * <p>
         * @return {@code this}
         * @param project Property project: The name of the project. This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * Property project: The name of the project.
         * <p>
         * @return {@code this}
         * @param project Property project: The name of the project. This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * Property region: The region where the ApsaraDB RDS for MySQL instance resides.
         * <p>
         * Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param region Property region: The region where the ApsaraDB RDS for MySQL instance resides. This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * Property region: The region where the ApsaraDB RDS for MySQL instance resides.
         * <p>
         * Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param region Property region: The region where the ApsaraDB RDS for MySQL instance resides. This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * Property storeType: The storage type.
         * <p>
         * Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
         * <p>
         * @return {@code this}
         * @param storeType Property storeType: The storage type. This parameter is required.
         */
        public Builder storeType(final java.lang.String storeType) {
            this.props.storeType(storeType);
            return this;
        }
        /**
         * Property storeType: The storage type.
         * <p>
         * Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
         * <p>
         * @return {@code this}
         * @param storeType Property storeType: The storage type. This parameter is required.
         */
        public Builder storeType(final com.aliyun.ros.cdk.core.IResolvable storeType) {
            this.props.storeType(storeType);
            return this;
        }

        /**
         * Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param table Property table: The name of the database table in the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder table(final java.lang.String table) {
            this.props.table(table);
            return this;
        }
        /**
         * Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param table Property table: The name of the database table in the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder table(final com.aliyun.ros.cdk.core.IResolvable table) {
            this.props.table(table);
            return this;
        }

        /**
         * Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param username Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props.username(username);
            return this;
        }
        /**
         * Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
         * <p>
         * @return {@code this}
         * @param username Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props.username(username);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property instanceId: The id of the RDS instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The id of the RDS instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The id of the RDS instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The id of the RDS instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.RdsExternalStore}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RdsExternalStore build() {
            return new com.aliyun.ros.cdk.sls.RdsExternalStore(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
