package com.aliyun.ros.cdk.mse;

/**
 * A ROS resource type:  `ALIYUN::MSE::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:15.928Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Attribute AclEntryList: acl entry list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclEntryList() {
        return software.amazon.jsii.Kernel.get(this, "attrAclEntryList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AclId: acl id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AppVersion: app version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAppVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterAliasName: cluster alias name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterAliasName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterAliasName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterId: cluster id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterName: cluster name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterSpecification() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterSpecification", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterType: cluster type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConnectionType: network connect type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionType() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Cpu: cpu core size.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskCapacity: disk capacity, unit: G.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskCapacity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskType: disk type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskType() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HealthStatus: health status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceCount: instance count.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceCount() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: instance id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetAddress: internet address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetDomain: internet domain.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetPort: internet port.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IntranetAddress: intranet address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IntranetDomain: intranet domain.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IntranetPort: intranet port.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemoryCapacity: memory capacity.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemoryCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrMemoryCapacity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetType: network type, Enum: privatenet,pubnet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PayInfo: pay info.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPayInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrPayInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PubNetworkFlow: pub network flow.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPubNetworkFlow() {
        return software.amazon.jsii.Kernel.get(this, "attrPubNetworkFlow", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: vpc id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: switcher Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.
         * <p>
         * @return {@code this}
         * @param clusterSpecification Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c. This parameter is required.
         */
        public Builder clusterSpecification(final java.lang.String clusterSpecification) {
            this.props.clusterSpecification(clusterSpecification);
            return this;
        }
        /**
         * Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.
         * <p>
         * @return {@code this}
         * @param clusterSpecification Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c. This parameter is required.
         */
        public Builder clusterSpecification(final com.aliyun.ros.cdk.core.IResolvable clusterSpecification) {
            this.props.clusterSpecification(clusterSpecification);
            return this;
        }

        /**
         * Property clusterType: cluster type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: cluster type. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: cluster type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: cluster type. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.
         * <p>
         * @return {@code this}
         * @param clusterVersion Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3. This parameter is required.
         */
        public Builder clusterVersion(final java.lang.String clusterVersion) {
            this.props.clusterVersion(clusterVersion);
            return this;
        }
        /**
         * Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.
         * <p>
         * @return {@code this}
         * @param clusterVersion Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3. This parameter is required.
         */
        public Builder clusterVersion(final com.aliyun.ros.cdk.core.IResolvable clusterVersion) {
            this.props.clusterVersion(clusterVersion);
            return this;
        }

        /**
         * Property instanceCount: instance count.
         * <p>
         * @return {@code this}
         * @param instanceCount Property instanceCount: instance count. This parameter is required.
         */
        public Builder instanceCount(final java.lang.Number instanceCount) {
            this.props.instanceCount(instanceCount);
            return this;
        }
        /**
         * Property instanceCount: instance count.
         * <p>
         * @return {@code this}
         * @param instanceCount Property instanceCount: instance count. This parameter is required.
         */
        public Builder instanceCount(final com.aliyun.ros.cdk.core.IResolvable instanceCount) {
            this.props.instanceCount(instanceCount);
            return this;
        }

        /**
         * Property netType: network type, Enum: privatenet,pubnet.
         * <p>
         * @return {@code this}
         * @param netType Property netType: network type, Enum: privatenet,pubnet. This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * Property netType: network type, Enum: privatenet,pubnet.
         * <p>
         * @return {@code this}
         * @param netType Property netType: network type, Enum: privatenet,pubnet. This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * Property aclEntryList: acl entry list.
         * <p>
         * @return {@code this}
         * @param aclEntryList Property aclEntryList: acl entry list. This parameter is required.
         */
        public Builder aclEntryList(final com.aliyun.ros.cdk.core.IResolvable aclEntryList) {
            this.props.aclEntryList(aclEntryList);
            return this;
        }
        /**
         * Property aclEntryList: acl entry list.
         * <p>
         * @return {@code this}
         * @param aclEntryList Property aclEntryList: acl entry list. This parameter is required.
         */
        public Builder aclEntryList(final java.util.List<? extends java.lang.Object> aclEntryList) {
            this.props.aclEntryList(aclEntryList);
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
         * Property connectionType: network connect type.
         * <p>
         * @return {@code this}
         * @param connectionType Property connectionType: network connect type. This parameter is required.
         */
        public Builder connectionType(final java.lang.String connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }
        /**
         * Property connectionType: network connect type.
         * <p>
         * @return {@code this}
         * @param connectionType Property connectionType: network connect type. This parameter is required.
         */
        public Builder connectionType(final com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }

        /**
         * Property diskCapacity: disk capacity, unit: G.
         * <p>
         * @return {@code this}
         * @param diskCapacity Property diskCapacity: disk capacity, unit: G. This parameter is required.
         */
        public Builder diskCapacity(final java.lang.Number diskCapacity) {
            this.props.diskCapacity(diskCapacity);
            return this;
        }
        /**
         * Property diskCapacity: disk capacity, unit: G.
         * <p>
         * @return {@code this}
         * @param diskCapacity Property diskCapacity: disk capacity, unit: G. This parameter is required.
         */
        public Builder diskCapacity(final com.aliyun.ros.cdk.core.IResolvable diskCapacity) {
            this.props.diskCapacity(diskCapacity);
            return this;
        }

        /**
         * Property diskType: disk type.
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: disk type. This parameter is required.
         */
        public Builder diskType(final java.lang.String diskType) {
            this.props.diskType(diskType);
            return this;
        }
        /**
         * Property diskType: disk type.
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: disk type. This parameter is required.
         */
        public Builder diskType(final com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.props.diskType(diskType);
            return this;
        }

        /**
         * Property privateSlbSpecification:.
         * <p>
         * @return {@code this}
         * @param privateSlbSpecification Property privateSlbSpecification:. This parameter is required.
         */
        public Builder privateSlbSpecification(final java.lang.String privateSlbSpecification) {
            this.props.privateSlbSpecification(privateSlbSpecification);
            return this;
        }
        /**
         * Property privateSlbSpecification:.
         * <p>
         * @return {@code this}
         * @param privateSlbSpecification Property privateSlbSpecification:. This parameter is required.
         */
        public Builder privateSlbSpecification(final com.aliyun.ros.cdk.core.IResolvable privateSlbSpecification) {
            this.props.privateSlbSpecification(privateSlbSpecification);
            return this;
        }

        /**
         * Property pubNetworkFlow: pub network flow.
         * <p>
         * @return {@code this}
         * @param pubNetworkFlow Property pubNetworkFlow: pub network flow. This parameter is required.
         */
        public Builder pubNetworkFlow(final java.lang.String pubNetworkFlow) {
            this.props.pubNetworkFlow(pubNetworkFlow);
            return this;
        }
        /**
         * Property pubNetworkFlow: pub network flow.
         * <p>
         * @return {@code this}
         * @param pubNetworkFlow Property pubNetworkFlow: pub network flow. This parameter is required.
         */
        public Builder pubNetworkFlow(final com.aliyun.ros.cdk.core.IResolvable pubNetworkFlow) {
            this.props.pubNetworkFlow(pubNetworkFlow);
            return this;
        }

        /**
         * Property pubSlbSpecification:.
         * <p>
         * @return {@code this}
         * @param pubSlbSpecification Property pubSlbSpecification:. This parameter is required.
         */
        public Builder pubSlbSpecification(final java.lang.String pubSlbSpecification) {
            this.props.pubSlbSpecification(pubSlbSpecification);
            return this;
        }
        /**
         * Property pubSlbSpecification:.
         * <p>
         * @return {@code this}
         * @param pubSlbSpecification Property pubSlbSpecification:. This parameter is required.
         */
        public Builder pubSlbSpecification(final com.aliyun.ros.cdk.core.IResolvable pubSlbSpecification) {
            this.props.pubSlbSpecification(pubSlbSpecification);
            return this;
        }

        /**
         * Property requestPars:.
         * <p>
         * @return {@code this}
         * @param requestPars Property requestPars:. This parameter is required.
         */
        public Builder requestPars(final java.lang.String requestPars) {
            this.props.requestPars(requestPars);
            return this;
        }
        /**
         * Property requestPars:.
         * <p>
         * @return {@code this}
         * @param requestPars Property requestPars:. This parameter is required.
         */
        public Builder requestPars(final com.aliyun.ros.cdk.core.IResolvable requestPars) {
            this.props.requestPars(requestPars);
            return this;
        }

        /**
         * Property vpcId: vpc id.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: vpc id. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: vpc id.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: vpc id. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: switcher Id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: switcher Id. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: switcher Id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: switcher Id. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mse.Cluster}.
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
