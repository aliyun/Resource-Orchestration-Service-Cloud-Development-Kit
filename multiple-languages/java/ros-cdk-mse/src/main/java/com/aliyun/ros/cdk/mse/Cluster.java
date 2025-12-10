package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.163Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mse.ICluster {

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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclEntryList: The list of ACL entries.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntryList() {
        return software.amazon.jsii.Kernel.get(this, "attrAclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AclId: The ID of the ACL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AppVersion: The version of the application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAppVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterAliasName: The alias name of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterAliasName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
     * Attribute ClusterSpecification: The specification of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpecification() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterType: The type of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterVersion: The version of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigAuthEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigAuthEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigSecretEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigSecretEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionType: The connection type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionType() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Cpu: The number of CPU cores.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskCapacity: The disk capacity.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskType: The disk type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthStatus: The health status of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceCount: The number of instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the cluster instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetAddress: The public network address of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetDomain: The public network domain of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetPort: The public network port of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IntranetAddress: The intranet address of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IntranetDomain: The intranet domain of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IntranetPort: The intranet port of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MCPEnabled: Whether to enable the MCP.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMcpEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrMcpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemoryCapacity: The memory capacity.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrMemoryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MseVersion: The MSE version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMseVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrMseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetType: The network type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PayInfo: The payment information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrPayInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PubNetworkFlow: The public network flow.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubNetworkFlow() {
        return software.amazon.jsii.Kernel.get(this, "attrPubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.ClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.Cluster> {
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
        private final com.aliyun.ros.cdk.mse.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.ClusterProps.Builder();
        }

        /**
         * Property clusterSpecification: Engine specification.
         * <p>
         * [Professional Edition]
         * <p>
         * <ul>
         * <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         * <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         * <li><code>MSE_SC_4_8_60_c</code>: 4 cores 8GB</li>
         * <li><code>MSE_SC_8_16_60_c</code>: 8 cores 16GB</li>
         * <li><code>MSE_SC_16_32_60_c</code>: 16 cores 32GB</li>
         * </ul>
         * <p>
         * [Development Edition]
         * <p>
         * <ul>
         * <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         * <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         * </ul>
         * <p>
         * [Serverless Edition]
         * <p>
         * <ul>
         * <li>Ignore this parameter or fill with <code>MSE_SC_SERVERLESS</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clusterSpecification Property clusterSpecification: Engine specification. This parameter is required.
         */
        public Builder clusterSpecification(final java.lang.String clusterSpecification) {
            this.props.clusterSpecification(clusterSpecification);
            return this;
        }
        /**
         * Property clusterSpecification: Engine specification.
         * <p>
         * [Professional Edition]
         * <p>
         * <ul>
         * <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         * <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         * <li><code>MSE_SC_4_8_60_c</code>: 4 cores 8GB</li>
         * <li><code>MSE_SC_8_16_60_c</code>: 8 cores 16GB</li>
         * <li><code>MSE_SC_16_32_60_c</code>: 16 cores 32GB</li>
         * </ul>
         * <p>
         * [Development Edition]
         * <p>
         * <ul>
         * <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         * <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         * </ul>
         * <p>
         * [Serverless Edition]
         * <p>
         * <ul>
         * <li>Ignore this parameter or fill with <code>MSE_SC_SERVERLESS</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clusterSpecification Property clusterSpecification: Engine specification. This parameter is required.
         */
        public Builder clusterSpecification(final com.aliyun.ros.cdk.core.IResolvable clusterSpecification) {
            this.props.clusterSpecification(clusterSpecification);
            return this;
        }

        /**
         * Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property clusterVersion: Cluster version.
         * <p>
         * [Professional Edition]
         * <p>
         * <ul>
         * <li><code>NACOS_2_0_0</code>: Nacos 2.x.x version.</li>
         * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         * </ul>
         * <p>
         * [Development Edition]
         * <p>
         * <ul>
         * <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         * </ul>
         * <p>
         * [Serverless Edition]
         * <p>
         * <ul>
         * <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clusterVersion Property clusterVersion: Cluster version. This parameter is required.
         */
        public Builder clusterVersion(final java.lang.String clusterVersion) {
            this.props.clusterVersion(clusterVersion);
            return this;
        }
        /**
         * Property clusterVersion: Cluster version.
         * <p>
         * [Professional Edition]
         * <p>
         * <ul>
         * <li><code>NACOS_2_0_0</code>: Nacos 2.x.x version.</li>
         * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         * </ul>
         * <p>
         * [Development Edition]
         * <p>
         * <ul>
         * <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         * </ul>
         * <p>
         * [Serverless Edition]
         * <p>
         * <ul>
         * <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clusterVersion Property clusterVersion: Cluster version. This parameter is required.
         */
        public Builder clusterVersion(final com.aliyun.ros.cdk.core.IResolvable clusterVersion) {
            this.props.clusterVersion(clusterVersion);
            return this;
        }

        /**
         * Property instanceCount: Number of instance nodes. Range: 1~15.
         * <p>
         * [Professional Edition]
         * <p>
         * <ul>
         * <li>Must be &gt;=3 and odd number.</li>
         * </ul>
         * <p>
         * [Development Edition]
         * <p>
         * <ul>
         * <li>Only 1 allowed.</li>
         * </ul>
         * <p>
         * [Serverless Edition]
         * <p>
         * <ul>
         * <li>Ignore this parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceCount Property instanceCount: Number of instance nodes. Range: 1~15. This parameter is required.
         */
        public Builder instanceCount(final java.lang.Number instanceCount) {
            this.props.instanceCount(instanceCount);
            return this;
        }
        /**
         * Property instanceCount: Number of instance nodes. Range: 1~15.
         * <p>
         * [Professional Edition]
         * <p>
         * <ul>
         * <li>Must be &gt;=3 and odd number.</li>
         * </ul>
         * <p>
         * [Development Edition]
         * <p>
         * <ul>
         * <li>Only 1 allowed.</li>
         * </ul>
         * <p>
         * [Serverless Edition]
         * <p>
         * <ul>
         * <li>Ignore this parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceCount Property instanceCount: Number of instance nodes. Range: 1~15. This parameter is required.
         */
        public Builder instanceCount(final com.aliyun.ros.cdk.core.IResolvable instanceCount) {
            this.props.instanceCount(instanceCount);
            return this;
        }

        /**
         * Property netType: Network type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>privatenet</code>: Private network.</li>
         * <li><code>pubnet</code>: Public network.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param netType Property netType: Network type. This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * Property netType: Network type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>privatenet</code>: Private network.</li>
         * <li><code>pubnet</code>: Public network.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param netType Property netType: Network type. This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * Property aclEntryList: List of ACL entries.
         * <p>
         * @return {@code this}
         * @param aclEntryList Property aclEntryList: List of ACL entries. This parameter is required.
         */
        public Builder aclEntryList(final com.aliyun.ros.cdk.core.IResolvable aclEntryList) {
            this.props.aclEntryList(aclEntryList);
            return this;
        }
        /**
         * Property aclEntryList: List of ACL entries.
         * <p>
         * @return {@code this}
         * @param aclEntryList Property aclEntryList: List of ACL entries. This parameter is required.
         */
        public Builder aclEntryList(final java.util.List<? extends java.lang.Object> aclEntryList) {
            this.props.aclEntryList(aclEntryList);
            return this;
        }

        /**
         * Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).
         * <p>
         * Ignored for Serverless Edition.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go). This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).
         * <p>
         * Ignored for Serverless Edition.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go). This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property clusterAliasName: cluster alias name.
         * <p>
         * @return {@code this}
         * @param clusterAliasName Property clusterAliasName: cluster alias name. This parameter is required.
         */
        public Builder clusterAliasName(final java.lang.String clusterAliasName) {
            this.props.clusterAliasName(clusterAliasName);
            return this;
        }
        /**
         * Property clusterAliasName: cluster alias name.
         * <p>
         * @return {@code this}
         * @param clusterAliasName Property clusterAliasName: cluster alias name. This parameter is required.
         */
        public Builder clusterAliasName(final com.aliyun.ros.cdk.core.IResolvable clusterAliasName) {
            this.props.clusterAliasName(clusterAliasName);
            return this;
        }

        /**
         * Property connectionType: Network access type, <code>slb</code> or <code>single_eni</code>;
         * <p>
         * some regions only support <code>single_eni</code> for Development Edition.
         * <p>
         * @return {@code this}
         * @param connectionType Property connectionType: Network access type, <code>slb</code> or <code>single_eni</code>;. This parameter is required.
         */
        public Builder connectionType(final java.lang.String connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }
        /**
         * Property connectionType: Network access type, <code>slb</code> or <code>single_eni</code>;
         * <p>
         * some regions only support <code>single_eni</code> for Development Edition.
         * <p>
         * @return {@code this}
         * @param connectionType Property connectionType: Network access type, <code>slb</code> or <code>single_eni</code>;. This parameter is required.
         */
        public Builder connectionType(final com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }

        /**
         * Property eipEnabled: Effective when ConnectionType is <code>single_eni</code>, indicates whether to enable public access (elastic IP).
         * <p>
         * @return {@code this}
         * @param eipEnabled Property eipEnabled: Effective when ConnectionType is <code>single_eni</code>, indicates whether to enable public access (elastic IP). This parameter is required.
         */
        public Builder eipEnabled(final java.lang.Boolean eipEnabled) {
            this.props.eipEnabled(eipEnabled);
            return this;
        }
        /**
         * Property eipEnabled: Effective when ConnectionType is <code>single_eni</code>, indicates whether to enable public access (elastic IP).
         * <p>
         * @return {@code this}
         * @param eipEnabled Property eipEnabled: Effective when ConnectionType is <code>single_eni</code>, indicates whether to enable public access (elastic IP). This parameter is required.
         */
        public Builder eipEnabled(final com.aliyun.ros.cdk.core.IResolvable eipEnabled) {
            this.props.eipEnabled(eipEnabled);
            return this;
        }

        /**
         * Property mseVersion: Must be filled unless special circumstances.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>mse_pro</code>: Professional Edition.</li>
         * <li><code>mse_dev</code>: Development Edition.</li>
         * <li><code>mse_serverless</code>: Serverless Edition.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mseVersion Property mseVersion: Must be filled unless special circumstances. This parameter is required.
         */
        public Builder mseVersion(final java.lang.String mseVersion) {
            this.props.mseVersion(mseVersion);
            return this;
        }
        /**
         * Property mseVersion: Must be filled unless special circumstances.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>mse_pro</code>: Professional Edition.</li>
         * <li><code>mse_dev</code>: Development Edition.</li>
         * <li><code>mse_serverless</code>: Serverless Edition.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mseVersion Property mseVersion: Must be filled unless special circumstances. This parameter is required.
         */
        public Builder mseVersion(final com.aliyun.ros.cdk.core.IResolvable mseVersion) {
            this.props.mseVersion(mseVersion);
            return this;
        }

        /**
         * Property pubNetworkFlow: Public network flow.
         * <p>
         * Valid when ConnectionType is <code>slb</code>. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
         * <p>
         * @return {@code this}
         * @param pubNetworkFlow Property pubNetworkFlow: Public network flow. This parameter is required.
         */
        public Builder pubNetworkFlow(final java.lang.Number pubNetworkFlow) {
            this.props.pubNetworkFlow(pubNetworkFlow);
            return this;
        }
        /**
         * Property pubNetworkFlow: Public network flow.
         * <p>
         * Valid when ConnectionType is <code>slb</code>. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
         * <p>
         * @return {@code this}
         * @param pubNetworkFlow Property pubNetworkFlow: Public network flow. This parameter is required.
         */
        public Builder pubNetworkFlow(final com.aliyun.ros.cdk.core.IResolvable pubNetworkFlow) {
            this.props.pubNetworkFlow(pubNetworkFlow);
            return this;
        }

        /**
         * Property requestPars: Extended request parameters in JSON format.
         * <p>
         * @return {@code this}
         * @param requestPars Property requestPars: Extended request parameters in JSON format. This parameter is required.
         */
        public Builder requestPars(final java.lang.String requestPars) {
            this.props.requestPars(requestPars);
            return this;
        }
        /**
         * Property requestPars: Extended request parameters in JSON format.
         * <p>
         * @return {@code this}
         * @param requestPars Property requestPars: Extended request parameters in JSON format. This parameter is required.
         */
        public Builder requestPars(final com.aliyun.ros.cdk.core.IResolvable requestPars) {
            this.props.requestPars(requestPars);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityGroupType: Effective when ConnectionType is <code>single_eni</code>, represents the security group type of the instance.
         * <p>
         * @return {@code this}
         * @param securityGroupType Property securityGroupType: Effective when ConnectionType is <code>single_eni</code>, represents the security group type of the instance. This parameter is required.
         */
        public Builder securityGroupType(final java.lang.String securityGroupType) {
            this.props.securityGroupType(securityGroupType);
            return this;
        }
        /**
         * Property securityGroupType: Effective when ConnectionType is <code>single_eni</code>, represents the security group type of the instance.
         * <p>
         * @return {@code this}
         * @param securityGroupType Property securityGroupType: Effective when ConnectionType is <code>single_eni</code>, represents the security group type of the instance. This parameter is required.
         */
        public Builder securityGroupType(final com.aliyun.ros.cdk.core.IResolvable securityGroupType) {
            this.props.securityGroupType(securityGroupType);
            return this;
        }

        /**
         * Property tags: Tags to attach to cluster.
         * <p>
         * Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.mse.RosCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: Switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Switch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: Switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Switch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.Cluster build() {
            return new com.aliyun.ros.cdk.mse.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
