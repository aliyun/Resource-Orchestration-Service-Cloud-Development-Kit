package com.aliyun.ros.cdk.ecs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ECS::HpcClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:48.153Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.HpcClusters")
public class HpcClusters extends com.aliyun.ros.cdk.core.Resource {

    protected HpcClusters(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HpcClusters(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ECS::HpcClusters</code>.
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
    public HpcClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::HpcClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public HpcClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::HpcClusters</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public HpcClusters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute HpcClusterIds: the list of hpc cluster ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHpcClusterIds() {
        return software.amazon.jsii.Kernel.get(this, "attrHpcClusterIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HpcClusters: The list of hpc clusters.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHpcClusters() {
        return software.amazon.jsii.Kernel.get(this, "attrHpcClusters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.HpcClusters}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.HpcClusters> {
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
        private com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property hpcClusterIds: The IDs of the HPC clusters.
         * <p>
         * You can specify up to 100 HPC cluster IDs.
         * <p>
         * @return {@code this}
         * @param hpcClusterIds Property hpcClusterIds: The IDs of the HPC clusters. This parameter is required.
         */
        public Builder hpcClusterIds(final com.aliyun.ros.cdk.core.IResolvable hpcClusterIds) {
            this.props().hpcClusterIds(hpcClusterIds);
            return this;
        }
        /**
         * Property hpcClusterIds: The IDs of the HPC clusters.
         * <p>
         * You can specify up to 100 HPC cluster IDs.
         * <p>
         * @return {@code this}
         * @param hpcClusterIds Property hpcClusterIds: The IDs of the HPC clusters. This parameter is required.
         */
        public Builder hpcClusterIds(final java.util.List<? extends java.lang.Object> hpcClusterIds) {
            this.props().hpcClusterIds(hpcClusterIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.HpcClusters}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.HpcClusters build() {
            return new com.aliyun.ros.cdk.ecs.datasource.HpcClusters(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps.Builder();
            }
            return this.props;
        }
    }
}
