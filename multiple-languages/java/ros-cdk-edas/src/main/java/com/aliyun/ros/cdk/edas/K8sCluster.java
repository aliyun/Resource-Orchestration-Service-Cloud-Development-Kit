package com.aliyun.ros.cdk.edas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EDAS::K8sCluster</code>, which is used to create a cluster of Container Service for Kubernetes (ACK).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:38.907Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.K8sCluster")
public class K8sCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.edas.IK8sCluster {

    protected K8sCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected K8sCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public K8sCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public K8sCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterName: The name of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterType: The type of the cluster: 2: ECS cluster 5: Container Service K8s cluster or Serverless K8s cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CsClusterId: The ID of the K8s cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCsClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrCsClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkMode: Network node: 1: Classic network 2: VPC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkMode() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeNum: Number of nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeNum() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SubNetCidr: Sub net CIDR.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubNetCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrSubNetCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The ID of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VswitchId: The ID of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.K8sClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.K8sCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.K8sCluster> {
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
        private final com.aliyun.ros.cdk.edas.K8sClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.K8sClusterProps.Builder();
        }

        /**
         * Property csClusterId: The ID of the CS cluster.
         * <p>
         * @return {@code this}
         * @param csClusterId Property csClusterId: The ID of the CS cluster. This parameter is required.
         */
        public Builder csClusterId(final java.lang.String csClusterId) {
            this.props.csClusterId(csClusterId);
            return this;
        }
        /**
         * Property csClusterId: The ID of the CS cluster.
         * <p>
         * @return {@code this}
         * @param csClusterId Property csClusterId: The ID of the CS cluster. This parameter is required.
         */
        public Builder csClusterId(final com.aliyun.ros.cdk.core.IResolvable csClusterId) {
            this.props.csClusterId(csClusterId);
            return this;
        }

        /**
         * Property enableAsm: Whether enable ASM.
         * <p>
         * @return {@code this}
         * @param enableAsm Property enableAsm: Whether enable ASM. This parameter is required.
         */
        public Builder enableAsm(final java.lang.String enableAsm) {
            this.props.enableAsm(enableAsm);
            return this;
        }
        /**
         * Property enableAsm: Whether enable ASM.
         * <p>
         * @return {@code this}
         * @param enableAsm Property enableAsm: Whether enable ASM. This parameter is required.
         */
        public Builder enableAsm(final com.aliyun.ros.cdk.core.IResolvable enableAsm) {
            this.props.enableAsm(enableAsm);
            return this;
        }

        /**
         * Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.K8sCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.K8sCluster build() {
            return new com.aliyun.ros.cdk.edas.K8sCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
