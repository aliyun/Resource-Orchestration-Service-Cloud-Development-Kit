package com.aliyun.ros.cdk.clickhouse.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ClickHouse::DBClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.818Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.datasource.DBClusters")
public class DBClusters extends com.aliyun.ros.cdk.core.Resource {

    protected DBClusters(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBClusters(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ClickHouse::DBClusters</code>.
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
    public DBClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.clickhouse.datasource.DBClustersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ClickHouse::DBClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public DBClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.clickhouse.datasource.DBClustersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ClickHouse::DBClusters</code>.
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
     * Attribute DBClusterIds: The list of db cluster IDs.
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
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.datasource.DBClusters}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.datasource.DBClusters> {
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
        private com.aliyun.ros.cdk.clickhouse.datasource.DBClustersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dbClusterId: Instance ID.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: Instance ID. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props().dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: Instance ID.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: Instance ID. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props().dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property dbClusterName: The cluster description information.
         * <p>
         * @return {@code this}
         * @param dbClusterName Property dbClusterName: The cluster description information. This parameter is required.
         */
        public Builder dbClusterName(final java.lang.String dbClusterName) {
            this.props().dbClusterName(dbClusterName);
            return this;
        }
        /**
         * Property dbClusterName: The cluster description information.
         * <p>
         * @return {@code this}
         * @param dbClusterName Property dbClusterName: The cluster description information. This parameter is required.
         */
        public Builder dbClusterName(final com.aliyun.ros.cdk.core.IResolvable dbClusterName) {
            this.props().dbClusterName(dbClusterName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.datasource.DBClusters}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.datasource.DBClusters build() {
            return new com.aliyun.ros.cdk.clickhouse.datasource.DBClusters(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.clickhouse.datasource.DBClustersProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.clickhouse.datasource.DBClustersProps.Builder();
            }
            return this.props;
        }
    }
}
