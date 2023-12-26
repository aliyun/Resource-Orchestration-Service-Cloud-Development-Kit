package com.aliyun.ros.cdk.emr.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::EMR::Cluster2</code>ALIYUN::ENS::Instance is used to create an Edge Node Service (ENS) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:15.940Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.datasource.Cluster2")
public class Cluster2 extends com.aliyun.ros.cdk.core.Resource {

    protected Cluster2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Cluster2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.datasource.Cluster2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Cluster2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.datasource.Cluster2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Cluster2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ClusterIds: The list of the cluster id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterIds() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Clusters: The detail of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusters() {
        return software.amazon.jsii.Kernel.get(this, "attrClusters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.datasource.Cluster2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.datasource.Cluster2> {
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
        private com.aliyun.ros.cdk.emr.datasource.Cluster2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property clusterIds: The list of emr cluster id.
         * <p>
         * @return {@code this}
         * @param clusterIds Property clusterIds: The list of emr cluster id. This parameter is required.
         */
        public Builder clusterIds(final com.aliyun.ros.cdk.core.IResolvable clusterIds) {
            this.props().clusterIds(clusterIds);
            return this;
        }
        /**
         * Property clusterIds: The list of emr cluster id.
         * <p>
         * @return {@code this}
         * @param clusterIds Property clusterIds: The list of emr cluster id. This parameter is required.
         */
        public Builder clusterIds(final java.util.List<? extends java.lang.Object> clusterIds) {
            this.props().clusterIds(clusterIds);
            return this;
        }

        /**
         * Property clusterName: The name of cluster.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of cluster. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props().clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: The name of cluster.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of cluster. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props().clusterName(clusterName);
            return this;
        }

        /**
         * Property clusterStates: The list of emr cluster state.
         * <p>
         * @return {@code this}
         * @param clusterStates Property clusterStates: The list of emr cluster state. This parameter is required.
         */
        public Builder clusterStates(final com.aliyun.ros.cdk.core.IResolvable clusterStates) {
            this.props().clusterStates(clusterStates);
            return this;
        }
        /**
         * Property clusterStates: The list of emr cluster state.
         * <p>
         * @return {@code this}
         * @param clusterStates Property clusterStates: The list of emr cluster state. This parameter is required.
         */
        public Builder clusterStates(final java.util.List<? extends java.lang.Object> clusterStates) {
            this.props().clusterStates(clusterStates);
            return this;
        }

        /**
         * Property clusterType: The list of emr cluster type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The list of emr cluster type. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props().clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: The list of emr cluster type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The list of emr cluster type. This parameter is required.
         */
        public Builder clusterType(final java.util.List<? extends java.lang.Object> clusterType) {
            this.props().clusterType(clusterType);
            return this;
        }

        /**
         * Property paymentTypes: The payment type of emr cluster.
         * <p>
         * @return {@code this}
         * @param paymentTypes Property paymentTypes: The payment type of emr cluster. This parameter is required.
         */
        public Builder paymentTypes(final com.aliyun.ros.cdk.core.IResolvable paymentTypes) {
            this.props().paymentTypes(paymentTypes);
            return this;
        }
        /**
         * Property paymentTypes: The payment type of emr cluster.
         * <p>
         * @return {@code this}
         * @param paymentTypes Property paymentTypes: The payment type of emr cluster. This parameter is required.
         */
        public Builder paymentTypes(final java.util.List<? extends java.lang.Object> paymentTypes) {
            this.props().paymentTypes(paymentTypes);
            return this;
        }

        /**
         * Property resourceGroupId: The resource group id of emr cluster.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group id of emr cluster. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group id of emr cluster.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group id of emr cluster. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of emr cluster.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of emr cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.datasource.RosCluster2.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.datasource.Cluster2}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.datasource.Cluster2 build() {
            return new com.aliyun.ros.cdk.emr.datasource.Cluster2(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.emr.datasource.Cluster2Props.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.emr.datasource.Cluster2Props.Builder();
            }
            return this.props;
        }
    }
}
