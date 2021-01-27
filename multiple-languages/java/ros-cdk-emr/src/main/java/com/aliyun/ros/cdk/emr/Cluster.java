package com.aliyun.ros.cdk.emr;

/**
 * A ROS resource type:  `ALIYUN::EMR::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.869Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EMR::Cluster`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EMR::Cluster`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrHostGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodeInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterNodeInnerIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodePubIps() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterNodePubIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.Cluster> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.emr.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.ClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * @return {@code this}
         * @param emrVer This parameter is required.
         */
        public Builder emrVer(final java.lang.String emrVer) {
            this.props.emrVer(emrVer);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostGroup This parameter is required.
         */
        public Builder hostGroup(final com.aliyun.ros.cdk.core.IResolvable hostGroup) {
            this.props.hostGroup(hostGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostGroup This parameter is required.
         */
        public Builder hostGroup(final java.util.List<? extends java.lang.Object> hostGroup) {
            this.props.hostGroup(hostGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * @return {@code this}
         * @param useLocalMetaDb This parameter is required.
         */
        public Builder useLocalMetaDb(final java.lang.Boolean useLocalMetaDb) {
            this.props.useLocalMetaDb(useLocalMetaDb);
            return this;
        }
        /**
         * @return {@code this}
         * @param useLocalMetaDb This parameter is required.
         */
        public Builder useLocalMetaDb(final com.aliyun.ros.cdk.core.IResolvable useLocalMetaDb) {
            this.props.useLocalMetaDb(useLocalMetaDb);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param authorizeContent This parameter is required.
         */
        public Builder authorizeContent(final java.lang.String authorizeContent) {
            this.props.authorizeContent(authorizeContent);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param bootstrapAction This parameter is required.
         */
        public Builder bootstrapAction(final com.aliyun.ros.cdk.core.IResolvable bootstrapAction) {
            this.props.bootstrapAction(bootstrapAction);
            return this;
        }
        /**
         * @return {@code this}
         * @param bootstrapAction This parameter is required.
         */
        public Builder bootstrapAction(final java.util.List<? extends java.lang.Object> bootstrapAction) {
            this.props.bootstrapAction(bootstrapAction);
            return this;
        }

        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final java.util.List<? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }

        /**
         * @return {@code this}
         * @param configurations This parameter is required.
         */
        public Builder configurations(final java.lang.String configurations) {
            this.props.configurations(configurations);
            return this;
        }

        /**
         * @return {@code this}
         * @param depositType This parameter is required.
         */
        public Builder depositType(final java.lang.String depositType) {
            this.props.depositType(depositType);
            return this;
        }

        /**
         * @return {@code this}
         * @param easEnable This parameter is required.
         */
        public Builder easEnable(final java.lang.Boolean easEnable) {
            this.props.easEnable(easEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param easEnable This parameter is required.
         */
        public Builder easEnable(final com.aliyun.ros.cdk.core.IResolvable easEnable) {
            this.props.easEnable(easEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param highAvailabilityEnable This parameter is required.
         */
        public Builder highAvailabilityEnable(final java.lang.Boolean highAvailabilityEnable) {
            this.props.highAvailabilityEnable(highAvailabilityEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param highAvailabilityEnable This parameter is required.
         */
        public Builder highAvailabilityEnable(final com.aliyun.ros.cdk.core.IResolvable highAvailabilityEnable) {
            this.props.highAvailabilityEnable(highAvailabilityEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param initCustomHiveMetaDb This parameter is required.
         */
        public Builder initCustomHiveMetaDb(final java.lang.Boolean initCustomHiveMetaDb) {
            this.props.initCustomHiveMetaDb(initCustomHiveMetaDb);
            return this;
        }
        /**
         * @return {@code this}
         * @param initCustomHiveMetaDb This parameter is required.
         */
        public Builder initCustomHiveMetaDb(final com.aliyun.ros.cdk.core.IResolvable initCustomHiveMetaDb) {
            this.props.initCustomHiveMetaDb(initCustomHiveMetaDb);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceGeneration This parameter is required.
         */
        public Builder instanceGeneration(final java.lang.String instanceGeneration) {
            this.props.instanceGeneration(instanceGeneration);
            return this;
        }

        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final java.lang.Boolean ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * @return {@code this}
         * @param isOpenPublicIp This parameter is required.
         */
        public Builder isOpenPublicIp(final java.lang.Boolean isOpenPublicIp) {
            this.props.isOpenPublicIp(isOpenPublicIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param isOpenPublicIp This parameter is required.
         */
        public Builder isOpenPublicIp(final com.aliyun.ros.cdk.core.IResolvable isOpenPublicIp) {
            this.props.isOpenPublicIp(isOpenPublicIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * @return {@code this}
         * @param logPath This parameter is required.
         */
        public Builder logPath(final java.lang.String logPath) {
            this.props.logPath(logPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param machineType This parameter is required.
         */
        public Builder machineType(final java.lang.String machineType) {
            this.props.machineType(machineType);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterPwd This parameter is required.
         */
        public Builder masterPwd(final java.lang.String masterPwd) {
            this.props.masterPwd(masterPwd);
            return this;
        }

        /**
         * @return {@code this}
         * @param metaStoreConf This parameter is required.
         */
        public Builder metaStoreConf(final java.lang.String metaStoreConf) {
            this.props.metaStoreConf(metaStoreConf);
            return this;
        }

        /**
         * @return {@code this}
         * @param metaStoreType This parameter is required.
         */
        public Builder metaStoreType(final java.lang.String metaStoreType) {
            this.props.metaStoreType(metaStoreType);
            return this;
        }

        /**
         * @return {@code this}
         * @param optionSoftWareList This parameter is required.
         */
        public Builder optionSoftWareList(final java.util.List<java.lang.String> optionSoftWareList) {
            this.props.optionSoftWareList(optionSoftWareList);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param relatedClusterId This parameter is required.
         */
        public Builder relatedClusterId(final java.lang.String relatedClusterId) {
            this.props.relatedClusterId(relatedClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sshEnable This parameter is required.
         */
        public Builder sshEnable(final java.lang.Boolean sshEnable) {
            this.props.sshEnable(sshEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param sshEnable This parameter is required.
         */
        public Builder sshEnable(final com.aliyun.ros.cdk.core.IResolvable sshEnable) {
            this.props.sshEnable(sshEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param useCustomHiveMetaDb This parameter is required.
         */
        public Builder useCustomHiveMetaDb(final java.lang.Boolean useCustomHiveMetaDb) {
            this.props.useCustomHiveMetaDb(useCustomHiveMetaDb);
            return this;
        }
        /**
         * @return {@code this}
         * @param useCustomHiveMetaDb This parameter is required.
         */
        public Builder useCustomHiveMetaDb(final com.aliyun.ros.cdk.core.IResolvable useCustomHiveMetaDb) {
            this.props.useCustomHiveMetaDb(useCustomHiveMetaDb);
            return this;
        }

        /**
         * @return {@code this}
         * @param userDefinedEmrEcsRole This parameter is required.
         */
        public Builder userDefinedEmrEcsRole(final java.lang.String userDefinedEmrEcsRole) {
            this.props.userDefinedEmrEcsRole(userDefinedEmrEcsRole);
            return this;
        }

        /**
         * @return {@code this}
         * @param userInfo This parameter is required.
         */
        public Builder userInfo(final com.aliyun.ros.cdk.core.IResolvable userInfo) {
            this.props.userInfo(userInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param userInfo This parameter is required.
         */
        public Builder userInfo(final java.util.List<? extends java.lang.Object> userInfo) {
            this.props.userInfo(userInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param whiteListType This parameter is required.
         */
        public Builder whiteListType(final java.lang.String whiteListType) {
            this.props.whiteListType(whiteListType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.emr.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.Cluster build() {
            return new com.aliyun.ros.cdk.emr.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
