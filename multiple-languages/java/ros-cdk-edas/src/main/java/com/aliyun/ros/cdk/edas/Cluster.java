package com.aliyun.ros.cdk.edas;

/**
 * A ROS resource type:  `ALIYUN::EDAS::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.481Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterName: Cluster name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterType: Cluster type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IaasProvider: Provider.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIaasProvider() {
        return software.amazon.jsii.Kernel.get(this, "attrIaasProvider", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.Cluster> {
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
        private final com.aliyun.ros.cdk.edas.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.ClusterProps.Builder();
        }

        /**
         * Property clusterName: Cluster name.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: Cluster name.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property clusterType: Cluster type.
         * <p>
         * 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type. This parameter is required.
         */
        public Builder clusterType(final java.lang.Number clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: Cluster type.
         * <p>
         * 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property networkMode: Network Type.
         * <p>
         * 1- classic network, 2-VPC
         * <p>
         * @return {@code this}
         * @param networkMode Property networkMode: Network Type. This parameter is required.
         */
        public Builder networkMode(final java.lang.Number networkMode) {
            this.props.networkMode(networkMode);
            return this;
        }
        /**
         * Property networkMode: Network Type.
         * <p>
         * 1- classic network, 2-VPC
         * <p>
         * @return {@code this}
         * @param networkMode Property networkMode: Network Type. This parameter is required.
         */
        public Builder networkMode(final com.aliyun.ros.cdk.core.IResolvable networkMode) {
            this.props.networkMode(networkMode);
            return this;
        }

        /**
         * Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier). This parameter is required.
         */
        public Builder logicalRegionId(final java.lang.String logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }
        /**
         * Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier). This parameter is required.
         */
        public Builder logicalRegionId(final com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }

        /**
         * Property oversoldFactor: Docker CPU cluster oversold.
         * <p>
         * Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
         * <p>
         * @return {@code this}
         * @param oversoldFactor Property oversoldFactor: Docker CPU cluster oversold. This parameter is required.
         */
        public Builder oversoldFactor(final java.lang.Number oversoldFactor) {
            this.props.oversoldFactor(oversoldFactor);
            return this;
        }
        /**
         * Property oversoldFactor: Docker CPU cluster oversold.
         * <p>
         * Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
         * <p>
         * @return {@code this}
         * @param oversoldFactor Property oversoldFactor: Docker CPU cluster oversold. This parameter is required.
         */
        public Builder oversoldFactor(final com.aliyun.ros.cdk.core.IResolvable oversoldFactor) {
            this.props.oversoldFactor(oversoldFactor);
            return this;
        }

        /**
         * Property vpcId: VPC network ID.
         * <p>
         * If network selection VPC, this parameter Required
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC network ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC network ID.
         * <p>
         * If network selection VPC, this parameter Required
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC network ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.edas.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.Cluster build() {
            return new com.aliyun.ros.cdk.edas.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
