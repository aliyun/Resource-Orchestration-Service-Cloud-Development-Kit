package com.aliyun.ros.cdk.dashvector;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DashVector::Cluster</code>, which is used to create a DashVector cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.604Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dashvector.$Module.class, fqn = "@alicloud/ros-cdk-dashvector.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dashvector.ICluster {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dashvector.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dashvector.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterName: The name of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Endpoint: The endpoint of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dashvector.ClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dashvector.ClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dashvector.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dashvector.Cluster> {
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
        private final com.aliyun.ros.cdk.dashvector.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dashvector.ClusterProps.Builder();
        }

        /**
         * Property clusterName: The name of cluster.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of cluster. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: The name of cluster.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of cluster. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property clusterType: The type of cluster.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of cluster. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: The type of cluster.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of cluster. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property replicaCount: The number of replicas.
         * <p>
         * @return {@code this}
         * @param replicaCount Property replicaCount: The number of replicas. This parameter is required.
         */
        public Builder replicaCount(final java.lang.Number replicaCount) {
            this.props.replicaCount(replicaCount);
            return this;
        }
        /**
         * Property replicaCount: The number of replicas.
         * <p>
         * @return {@code this}
         * @param replicaCount Property replicaCount: The number of replicas. This parameter is required.
         */
        public Builder replicaCount(final com.aliyun.ros.cdk.core.IResolvable replicaCount) {
            this.props.replicaCount(replicaCount);
            return this;
        }

        /**
         * Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dashvector.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.dashvector.Cluster build() {
            return new com.aliyun.ros.cdk.dashvector.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
