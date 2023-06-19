package com.aliyun.ros.cdk.cs;

/**
 * A ROS resource type:  <code>ALIYUN::CS::ClusterNodePool</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:08.828Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterNodePool")
public class ClusterNodePool extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterNodePool(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterNodePool(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CS::ClusterNodePool</code>.
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
    public ClusterNodePool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterNodePoolProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::CS::ClusterNodePool</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ClusterNodePool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterNodePoolProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NodePoolId: Cluster node pool ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodePoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrNodePoolId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.ClusterNodePool}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.ClusterNodePool> {
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
        private final com.aliyun.ros.cdk.cs.ClusterNodePoolProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.ClusterNodePoolProps.Builder();
        }

        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property scalingGroup: The configurations of the scaling group used by the node pool.
         * <p>
         * @return {@code this}
         * @param scalingGroup Property scalingGroup: The configurations of the scaling group used by the node pool. This parameter is required.
         */
        public Builder scalingGroup(final com.aliyun.ros.cdk.core.IResolvable scalingGroup) {
            this.props.scalingGroup(scalingGroup);
            return this;
        }
        /**
         * Property scalingGroup: The configurations of the scaling group used by the node pool.
         * <p>
         * @return {@code this}
         * @param scalingGroup Property scalingGroup: The configurations of the scaling group used by the node pool. This parameter is required.
         */
        public Builder scalingGroup(final com.aliyun.ros.cdk.cs.RosClusterNodePool.ScalingGroupProperty scalingGroup) {
            this.props.scalingGroup(scalingGroup);
            return this;
        }

        /**
         * Property autoScaling: The configurations of auto scaling.
         * <p>
         * @return {@code this}
         * @param autoScaling Property autoScaling: The configurations of auto scaling. This parameter is required.
         */
        public Builder autoScaling(final com.aliyun.ros.cdk.core.IResolvable autoScaling) {
            this.props.autoScaling(autoScaling);
            return this;
        }
        /**
         * Property autoScaling: The configurations of auto scaling.
         * <p>
         * @return {@code this}
         * @param autoScaling Property autoScaling: The configurations of auto scaling. This parameter is required.
         */
        public Builder autoScaling(final com.aliyun.ros.cdk.cs.RosClusterNodePool.AutoScalingProperty autoScaling) {
            this.props.autoScaling(autoScaling);
            return this;
        }

        /**
         * Property count: The number of nodes in the node pool.
         * <p>
         * @return {@code this}
         * @param count Property count: The number of nodes in the node pool. This parameter is required.
         */
        public Builder count(final java.lang.Number count) {
            this.props.count(count);
            return this;
        }
        /**
         * Property count: The number of nodes in the node pool.
         * <p>
         * @return {@code this}
         * @param count Property count: The number of nodes in the node pool. This parameter is required.
         */
        public Builder count(final com.aliyun.ros.cdk.core.IResolvable count) {
            this.props.count(count);
            return this;
        }

        /**
         * Property kubernetesConfig: The configurations of the ACK cluster.
         * <p>
         * @return {@code this}
         * @param kubernetesConfig Property kubernetesConfig: The configurations of the ACK cluster. This parameter is required.
         */
        public Builder kubernetesConfig(final com.aliyun.ros.cdk.core.IResolvable kubernetesConfig) {
            this.props.kubernetesConfig(kubernetesConfig);
            return this;
        }
        /**
         * Property kubernetesConfig: The configurations of the ACK cluster.
         * <p>
         * @return {@code this}
         * @param kubernetesConfig Property kubernetesConfig: The configurations of the ACK cluster. This parameter is required.
         */
        public Builder kubernetesConfig(final com.aliyun.ros.cdk.cs.RosClusterNodePool.KubernetesConfigProperty kubernetesConfig) {
            this.props.kubernetesConfig(kubernetesConfig);
            return this;
        }

        /**
         * Property management: The configurations of the managed node pool.
         * <p>
         * @return {@code this}
         * @param management Property management: The configurations of the managed node pool. This parameter is required.
         */
        public Builder management(final com.aliyun.ros.cdk.core.IResolvable management) {
            this.props.management(management);
            return this;
        }
        /**
         * Property management: The configurations of the managed node pool.
         * <p>
         * @return {@code this}
         * @param management Property management: The configurations of the managed node pool. This parameter is required.
         */
        public Builder management(final com.aliyun.ros.cdk.cs.RosClusterNodePool.ManagementProperty management) {
            this.props.management(management);
            return this;
        }

        /**
         * Property nodePoolInfo: The configurations of the node pool.
         * <p>
         * @return {@code this}
         * @param nodePoolInfo Property nodePoolInfo: The configurations of the node pool. This parameter is required.
         */
        public Builder nodePoolInfo(final com.aliyun.ros.cdk.core.IResolvable nodePoolInfo) {
            this.props.nodePoolInfo(nodePoolInfo);
            return this;
        }
        /**
         * Property nodePoolInfo: The configurations of the node pool.
         * <p>
         * @return {@code this}
         * @param nodePoolInfo Property nodePoolInfo: The configurations of the node pool. This parameter is required.
         */
        public Builder nodePoolInfo(final com.aliyun.ros.cdk.cs.RosClusterNodePool.NodePoolInfoProperty nodePoolInfo) {
            this.props.nodePoolInfo(nodePoolInfo);
            return this;
        }

        /**
         * Property teeConfig: The configurations of confidential computing.
         * <p>
         * @return {@code this}
         * @param teeConfig Property teeConfig: The configurations of confidential computing. This parameter is required.
         */
        public Builder teeConfig(final com.aliyun.ros.cdk.core.IResolvable teeConfig) {
            this.props.teeConfig(teeConfig);
            return this;
        }
        /**
         * Property teeConfig: The configurations of confidential computing.
         * <p>
         * @return {@code this}
         * @param teeConfig Property teeConfig: The configurations of confidential computing. This parameter is required.
         */
        public Builder teeConfig(final com.aliyun.ros.cdk.cs.RosClusterNodePool.TeeConfigProperty teeConfig) {
            this.props.teeConfig(teeConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.ClusterNodePool}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.ClusterNodePool build() {
            return new com.aliyun.ros.cdk.cs.ClusterNodePool(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
