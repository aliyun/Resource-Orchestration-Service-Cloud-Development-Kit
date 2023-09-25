package com.aliyun.ros.cdk.polardb.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::POLARDB::DBClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:47.018Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.DBClusters")
public class DBClusters extends com.aliyun.ros.cdk.core.Resource {

    protected DBClusters(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBClusters(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::POLARDB::DBClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public DBClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.polardb.datasource.DBClustersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::POLARDB::DBClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public DBClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.polardb.datasource.DBClustersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::POLARDB::DBClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public DBClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DbClusterIds: The ID of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusters: The list of db clusters.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusters() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.datasource.DBClusters}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.datasource.DBClusters> {
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
        private com.aliyun.ros.cdk.polardb.datasource.DBClustersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dbClusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props().dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props().dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property dbType: The database engine that the cluster runs.
         * <p>
         * @return {@code this}
         * @param dbType Property dbType: The database engine that the cluster runs. This parameter is required.
         */
        public Builder dbType(final java.lang.String dbType) {
            this.props().dbType(dbType);
            return this;
        }
        /**
         * Property dbType: The database engine that the cluster runs.
         * <p>
         * @return {@code this}
         * @param dbType Property dbType: The database engine that the cluster runs. This parameter is required.
         */
        public Builder dbType(final com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.props().dbType(dbType);
            return this;
        }

        /**
         * Property dbVersion: The version of the database engine that the cluster runs.
         * <p>
         * The range of the MySQL version number is as follows:
         * *** 5.6 * * *
         * *** 5.7 * * *
         * *** 8.0 * * *
         * The value range of PostgreSQL version number is as follows:
         * *** 11 * * *
         * *** 14 * * *
         * The Oracle version number is 11.
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The version of the database engine that the cluster runs. This parameter is required.
         */
        public Builder dbVersion(final java.lang.String dbVersion) {
            this.props().dbVersion(dbVersion);
            return this;
        }
        /**
         * Property dbVersion: The version of the database engine that the cluster runs.
         * <p>
         * The range of the MySQL version number is as follows:
         * *** 5.6 * * *
         * *** 5.7 * * *
         * *** 8.0 * * *
         * The value range of PostgreSQL version number is as follows:
         * *** 11 * * *
         * *** 14 * * *
         * The Oracle version number is 11.
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The version of the database engine that the cluster runs. This parameter is required.
         */
        public Builder dbVersion(final com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.props().dbVersion(dbVersion);
            return this;
        }

        /**
         * Property description: The description of the cluster.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the cluster. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the cluster.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the cluster. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property expired: Indicates whether the cluster has expired.
         * <p>
         * Valid values:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param expired Property expired: Indicates whether the cluster has expired. This parameter is required.
         */
        public Builder expired(final java.lang.String expired) {
            this.props().expired(expired);
            return this;
        }
        /**
         * Property expired: Indicates whether the cluster has expired.
         * <p>
         * Valid values:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param expired Property expired: Indicates whether the cluster has expired. This parameter is required.
         */
        public Builder expired(final com.aliyun.ros.cdk.core.IResolvable expired) {
            this.props().expired(expired);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.datasource.DBClusters}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.datasource.DBClusters build() {
            return new com.aliyun.ros.cdk.polardb.datasource.DBClusters(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.polardb.datasource.DBClustersProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.polardb.datasource.DBClustersProps.Builder();
            }
            return this.props;
        }
    }
}
