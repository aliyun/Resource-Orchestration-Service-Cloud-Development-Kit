package com.aliyun.ros.cdk.emr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EMR::Cluster</code>, which is used to create an E-MapReduce (EMR) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.806Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource {

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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostGroups: The host group list of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrHostGroups", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterNodeInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterNodeInnerIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterNodePubIps() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterNodePubIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.ClusterProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.Cluster> {
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
        private final com.aliyun.ros.cdk.emr.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.ClusterProps.Builder();
        }

        /**
         * Property chargeType: The billing method.
         * <p>
         * Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
         * subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method.
         * <p>
         * Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
         * subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property clusterType: The type of the cluster.
         * <p>
         * Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: The type of the cluster.
         * <p>
         * Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property emrVer: The version of EMR.
         * <p>
         * @return {@code this}
         * @param emrVer Property emrVer: The version of EMR. This parameter is required.
         */
        public Builder emrVer(final java.lang.String emrVer) {
            this.props.emrVer(emrVer);
            return this;
        }
        /**
         * Property emrVer: The version of EMR.
         * <p>
         * @return {@code this}
         * @param emrVer Property emrVer: The version of EMR. This parameter is required.
         */
        public Builder emrVer(final com.aliyun.ros.cdk.core.IResolvable emrVer) {
            this.props.emrVer(emrVer);
            return this;
        }

        /**
         * Property hostGroup:.
         * <p>
         * @return {@code this}
         * @param hostGroup Property hostGroup:. This parameter is required.
         */
        public Builder hostGroup(final com.aliyun.ros.cdk.core.IResolvable hostGroup) {
            this.props.hostGroup(hostGroup);
            return this;
        }
        /**
         * Property hostGroup:.
         * <p>
         * @return {@code this}
         * @param hostGroup Property hostGroup:. This parameter is required.
         */
        public Builder hostGroup(final java.util.List<? extends java.lang.Object> hostGroup) {
            this.props.hostGroup(hostGroup);
            return this;
        }

        /**
         * Property name: The name of the cluster.
         * <p>
         * The name can be 1 to 64 characters in length and only contain
         * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the cluster.
         * <p>
         * The name can be 1 to 64 characters in length and only contain
         * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property netType: The type of the network.
         * <p>
         * @return {@code this}
         * @param netType Property netType: The type of the network. This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * Property netType: The type of the network.
         * <p>
         * @return {@code this}
         * @param netType Property netType: The type of the network. This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
         * <p>
         * @return {@code this}
         * @param useLocalMetaDb Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used. This parameter is required.
         */
        public Builder useLocalMetaDb(final java.lang.Boolean useLocalMetaDb) {
            this.props.useLocalMetaDb(useLocalMetaDb);
            return this;
        }
        /**
         * Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
         * <p>
         * @return {@code this}
         * @param useLocalMetaDb Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used. This parameter is required.
         */
        public Builder useLocalMetaDb(final com.aliyun.ros.cdk.core.IResolvable useLocalMetaDb) {
            this.props.useLocalMetaDb(useLocalMetaDb);
            return this;
        }

        /**
         * Property zoneId: The zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property authorizeContent: Not required.
         * <p>
         * @return {@code this}
         * @param authorizeContent Property authorizeContent: Not required. This parameter is required.
         */
        public Builder authorizeContent(final java.lang.String authorizeContent) {
            this.props.authorizeContent(authorizeContent);
            return this;
        }
        /**
         * Property authorizeContent: Not required.
         * <p>
         * @return {@code this}
         * @param authorizeContent Property authorizeContent: Not required. This parameter is required.
         */
        public Builder authorizeContent(final com.aliyun.ros.cdk.core.IResolvable authorizeContent) {
            this.props.authorizeContent(authorizeContent);
            return this;
        }

        /**
         * Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether the subscription cluster is auto-renewed. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether the subscription cluster is auto-renewed. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property bootstrapAction:.
         * <p>
         * @return {@code this}
         * @param bootstrapAction Property bootstrapAction:. This parameter is required.
         */
        public Builder bootstrapAction(final com.aliyun.ros.cdk.core.IResolvable bootstrapAction) {
            this.props.bootstrapAction(bootstrapAction);
            return this;
        }
        /**
         * Property bootstrapAction:.
         * <p>
         * @return {@code this}
         * @param bootstrapAction Property bootstrapAction:. This parameter is required.
         */
        public Builder bootstrapAction(final java.util.List<? extends java.lang.Object> bootstrapAction) {
            this.props.bootstrapAction(bootstrapAction);
            return this;
        }

        /**
         * Property clickHouseConf: undefined.
         * <p>
         * @return {@code this}
         * @param clickHouseConf Property clickHouseConf: undefined. This parameter is required.
         */
        public Builder clickHouseConf(final com.aliyun.ros.cdk.core.IResolvable clickHouseConf) {
            this.props.clickHouseConf(clickHouseConf);
            return this;
        }
        /**
         * Property clickHouseConf: undefined.
         * <p>
         * @return {@code this}
         * @param clickHouseConf Property clickHouseConf: undefined. This parameter is required.
         */
        public Builder clickHouseConf(final java.util.Map<java.lang.String, ? extends java.lang.Object> clickHouseConf) {
            this.props.clickHouseConf(clickHouseConf);
            return this;
        }

        /**
         * Property config:.
         * <p>
         * @return {@code this}
         * @param config Property config:. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * Property config:.
         * <p>
         * @return {@code this}
         * @param config Property config:. This parameter is required.
         */
        public Builder config(final java.util.List<? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }

        /**
         * Property configurations: Not required.
         * <p>
         * @return {@code this}
         * @param configurations Property configurations: Not required. This parameter is required.
         */
        public Builder configurations(final java.lang.String configurations) {
            this.props.configurations(configurations);
            return this;
        }
        /**
         * Property configurations: Not required.
         * <p>
         * @return {@code this}
         * @param configurations Property configurations: Not required. This parameter is required.
         */
        public Builder configurations(final com.aliyun.ros.cdk.core.IResolvable configurations) {
            this.props.configurations(configurations);
            return this;
        }

        /**
         * Property depositType: The hosting type.
         * <p>
         * @return {@code this}
         * @param depositType Property depositType: The hosting type. This parameter is required.
         */
        public Builder depositType(final java.lang.String depositType) {
            this.props.depositType(depositType);
            return this;
        }
        /**
         * Property depositType: The hosting type.
         * <p>
         * @return {@code this}
         * @param depositType Property depositType: The hosting type. This parameter is required.
         */
        public Builder depositType(final com.aliyun.ros.cdk.core.IResolvable depositType) {
            this.props.depositType(depositType);
            return this;
        }

        /**
         * Property easEnable: Indicates whether the cluster is a high-security cluster.
         * <p>
         * @return {@code this}
         * @param easEnable Property easEnable: Indicates whether the cluster is a high-security cluster. This parameter is required.
         */
        public Builder easEnable(final java.lang.Boolean easEnable) {
            this.props.easEnable(easEnable);
            return this;
        }
        /**
         * Property easEnable: Indicates whether the cluster is a high-security cluster.
         * <p>
         * @return {@code this}
         * @param easEnable Property easEnable: Indicates whether the cluster is a high-security cluster. This parameter is required.
         */
        public Builder easEnable(final com.aliyun.ros.cdk.core.IResolvable easEnable) {
            this.props.easEnable(easEnable);
            return this;
        }

        /**
         * Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.
         * <p>
         * A value of true indicates
         * that two master nodes are required.
         * <p>
         * @return {@code this}
         * @param highAvailabilityEnable Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. This parameter is required.
         */
        public Builder highAvailabilityEnable(final java.lang.Boolean highAvailabilityEnable) {
            this.props.highAvailabilityEnable(highAvailabilityEnable);
            return this;
        }
        /**
         * Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.
         * <p>
         * A value of true indicates
         * that two master nodes are required.
         * <p>
         * @return {@code this}
         * @param highAvailabilityEnable Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. This parameter is required.
         */
        public Builder highAvailabilityEnable(final com.aliyun.ros.cdk.core.IResolvable highAvailabilityEnable) {
            this.props.highAvailabilityEnable(highAvailabilityEnable);
            return this;
        }

        /**
         * Property initCustomHiveMetaDb: A reserved parameter.
         * <p>
         * Not required.
         * <p>
         * @return {@code this}
         * @param initCustomHiveMetaDb Property initCustomHiveMetaDb: A reserved parameter. This parameter is required.
         */
        public Builder initCustomHiveMetaDb(final java.lang.Boolean initCustomHiveMetaDb) {
            this.props.initCustomHiveMetaDb(initCustomHiveMetaDb);
            return this;
        }
        /**
         * Property initCustomHiveMetaDb: A reserved parameter.
         * <p>
         * Not required.
         * <p>
         * @return {@code this}
         * @param initCustomHiveMetaDb Property initCustomHiveMetaDb: A reserved parameter. This parameter is required.
         */
        public Builder initCustomHiveMetaDb(final com.aliyun.ros.cdk.core.IResolvable initCustomHiveMetaDb) {
            this.props.initCustomHiveMetaDb(initCustomHiveMetaDb);
            return this;
        }

        /**
         * Property instanceGeneration: The generation of the ECS instances.
         * <p>
         * @return {@code this}
         * @param instanceGeneration Property instanceGeneration: The generation of the ECS instances. This parameter is required.
         */
        public Builder instanceGeneration(final java.lang.String instanceGeneration) {
            this.props.instanceGeneration(instanceGeneration);
            return this;
        }
        /**
         * Property instanceGeneration: The generation of the ECS instances.
         * <p>
         * @return {@code this}
         * @param instanceGeneration Property instanceGeneration: The generation of the ECS instances. This parameter is required.
         */
        public Builder instanceGeneration(final com.aliyun.ros.cdk.core.IResolvable instanceGeneration) {
            this.props.instanceGeneration(instanceGeneration);
            return this;
        }

        /**
         * Property ioOptimized: Indicates wether I/O optimization is enabled.
         * <p>
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Indicates wether I/O optimization is enabled. This parameter is required.
         */
        public Builder ioOptimized(final java.lang.Boolean ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * Property ioOptimized: Indicates wether I/O optimization is enabled.
         * <p>
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Indicates wether I/O optimization is enabled. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * Property isOpenPublicIp: Indicates whether a public IP address is assigned.
         * <p>
         * A value of true indicates that
         * a bandwidth of 8 MB is set by default.
         * <p>
         * @return {@code this}
         * @param isOpenPublicIp Property isOpenPublicIp: Indicates whether a public IP address is assigned. This parameter is required.
         */
        public Builder isOpenPublicIp(final java.lang.Boolean isOpenPublicIp) {
            this.props.isOpenPublicIp(isOpenPublicIp);
            return this;
        }
        /**
         * Property isOpenPublicIp: Indicates whether a public IP address is assigned.
         * <p>
         * A value of true indicates that
         * a bandwidth of 8 MB is set by default.
         * <p>
         * @return {@code this}
         * @param isOpenPublicIp Property isOpenPublicIp: Indicates whether a public IP address is assigned. This parameter is required.
         */
        public Builder isOpenPublicIp(final com.aliyun.ros.cdk.core.IResolvable isOpenPublicIp) {
            this.props.isOpenPublicIp(isOpenPublicIp);
            return this;
        }

        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property logPath: The log path in OSS.
         * <p>
         * @return {@code this}
         * @param logPath Property logPath: The log path in OSS. This parameter is required.
         */
        public Builder logPath(final java.lang.String logPath) {
            this.props.logPath(logPath);
            return this;
        }
        /**
         * Property logPath: The log path in OSS.
         * <p>
         * @return {@code this}
         * @param logPath Property logPath: The log path in OSS. This parameter is required.
         */
        public Builder logPath(final com.aliyun.ros.cdk.core.IResolvable logPath) {
            this.props.logPath(logPath);
            return this;
        }

        /**
         * Property machineType: The type of the machine.
         * <p>
         * @return {@code this}
         * @param machineType Property machineType: The type of the machine. This parameter is required.
         */
        public Builder machineType(final java.lang.String machineType) {
            this.props.machineType(machineType);
            return this;
        }
        /**
         * Property machineType: The type of the machine.
         * <p>
         * @return {@code this}
         * @param machineType Property machineType: The type of the machine. This parameter is required.
         */
        public Builder machineType(final com.aliyun.ros.cdk.core.IResolvable machineType) {
            this.props.machineType(machineType);
            return this;
        }

        /**
         * Property masterPwd: The SSH password for the master node.
         * <p>
         * The password must meet the following requirements.
         * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
         * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
         * and special symbols).
         * <p>
         * @return {@code this}
         * @param masterPwd Property masterPwd: The SSH password for the master node. This parameter is required.
         */
        public Builder masterPwd(final java.lang.String masterPwd) {
            this.props.masterPwd(masterPwd);
            return this;
        }
        /**
         * Property masterPwd: The SSH password for the master node.
         * <p>
         * The password must meet the following requirements.
         * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
         * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
         * and special symbols).
         * <p>
         * @return {@code this}
         * @param masterPwd Property masterPwd: The SSH password for the master node. This parameter is required.
         */
        public Builder masterPwd(final com.aliyun.ros.cdk.core.IResolvable masterPwd) {
            this.props.masterPwd(masterPwd);
            return this;
        }

        /**
         * Property metaStoreConf: Meta store conf of specific meta store type.
         * <p>
         * If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
         * <p>
         * @return {@code this}
         * @param metaStoreConf Property metaStoreConf: Meta store conf of specific meta store type. This parameter is required.
         */
        public Builder metaStoreConf(final java.lang.String metaStoreConf) {
            this.props.metaStoreConf(metaStoreConf);
            return this;
        }
        /**
         * Property metaStoreConf: Meta store conf of specific meta store type.
         * <p>
         * If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
         * <p>
         * @return {@code this}
         * @param metaStoreConf Property metaStoreConf: Meta store conf of specific meta store type. This parameter is required.
         */
        public Builder metaStoreConf(final com.aliyun.ros.cdk.core.IResolvable metaStoreConf) {
            this.props.metaStoreConf(metaStoreConf);
            return this;
        }

        /**
         * Property metaStoreType: Meta store type.
         * <p>
         * Allow types:
         * local: Local cluster
         * unified: Unified meta data
         * user_rds: User's RDS
         * <p>
         * @return {@code this}
         * @param metaStoreType Property metaStoreType: Meta store type. This parameter is required.
         */
        public Builder metaStoreType(final java.lang.String metaStoreType) {
            this.props.metaStoreType(metaStoreType);
            return this;
        }
        /**
         * Property metaStoreType: Meta store type.
         * <p>
         * Allow types:
         * local: Local cluster
         * unified: Unified meta data
         * user_rds: User's RDS
         * <p>
         * @return {@code this}
         * @param metaStoreType Property metaStoreType: Meta store type. This parameter is required.
         */
        public Builder metaStoreType(final com.aliyun.ros.cdk.core.IResolvable metaStoreType) {
            this.props.metaStoreType(metaStoreType);
            return this;
        }

        /**
         * Property optionSoftWareList: The list of optional services.
         * <p>
         * @return {@code this}
         * @param optionSoftWareList Property optionSoftWareList: The list of optional services. This parameter is required.
         */
        public Builder optionSoftWareList(final com.aliyun.ros.cdk.core.IResolvable optionSoftWareList) {
            this.props.optionSoftWareList(optionSoftWareList);
            return this;
        }
        /**
         * Property optionSoftWareList: The list of optional services.
         * <p>
         * @return {@code this}
         * @param optionSoftWareList Property optionSoftWareList: The list of optional services. This parameter is required.
         */
        public Builder optionSoftWareList(final java.util.List<? extends java.lang.Object> optionSoftWareList) {
            this.props.optionSoftWareList(optionSoftWareList);
            return this;
        }

        /**
         * Property period: The length of the subscription.
         * <p>
         * Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
         * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The length of the subscription. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The length of the subscription.
         * <p>
         * Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
         * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The length of the subscription. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
         * <p>
         * @return {@code this}
         * @param relatedClusterId Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster). This parameter is required.
         */
        public Builder relatedClusterId(final java.lang.String relatedClusterId) {
            this.props.relatedClusterId(relatedClusterId);
            return this;
        }
        /**
         * Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
         * <p>
         * @return {@code this}
         * @param relatedClusterId Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster). This parameter is required.
         */
        public Builder relatedClusterId(final com.aliyun.ros.cdk.core.IResolvable relatedClusterId) {
            this.props.relatedClusterId(relatedClusterId);
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
         * Property securityGroupId: The ID of the security group.
         * <p>
         * You can create a security group in the ECS console and
         * use it. Note: If you use an existing security group, the default security group policy
         * is applied to this security group: Only port 22 is open at the inbound and all ports
         * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group.
         * <p>
         * You can create a security group in the ECS console and
         * use it. Note: If you use an existing security group, the default security group policy
         * is applied to this security group: Only port 22 is open at the inbound and all ports
         * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityGroupName: The name of the security group to create.
         * <p>
         * If the ID of the security group is not specified,
         * this name is used to create a new security group. After the cluster is created, you
         * can view the ID of the security group on the Cluster Management page. The default
         * security group policy is applied to this security group: Only port 22 is open at the
         * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
         * or SecurityGroupName.
         * <p>
         * @return {@code this}
         * @param securityGroupName Property securityGroupName: The name of the security group to create. This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }
        /**
         * Property securityGroupName: The name of the security group to create.
         * <p>
         * If the ID of the security group is not specified,
         * this name is used to create a new security group. After the cluster is created, you
         * can view the ID of the security group on the Cluster Management page. The default
         * security group policy is applied to this security group: Only port 22 is open at the
         * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
         * or SecurityGroupName.
         * <p>
         * @return {@code this}
         * @param securityGroupName Property securityGroupName: The name of the security group to create. This parameter is required.
         */
        public Builder securityGroupName(final com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * Property sshEnable: Indicates whether SSH is enabled.
         * <p>
         * @return {@code this}
         * @param sshEnable Property sshEnable: Indicates whether SSH is enabled. This parameter is required.
         */
        public Builder sshEnable(final java.lang.Boolean sshEnable) {
            this.props.sshEnable(sshEnable);
            return this;
        }
        /**
         * Property sshEnable: Indicates whether SSH is enabled.
         * <p>
         * @return {@code this}
         * @param sshEnable Property sshEnable: Indicates whether SSH is enabled. This parameter is required.
         */
        public Builder sshEnable(final com.aliyun.ros.cdk.core.IResolvable sshEnable) {
            this.props.sshEnable(sshEnable);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property useCustomHiveMetaDb: A reserved parameter.
         * <p>
         * Not required.
         * <p>
         * @return {@code this}
         * @param useCustomHiveMetaDb Property useCustomHiveMetaDb: A reserved parameter. This parameter is required.
         */
        public Builder useCustomHiveMetaDb(final java.lang.Boolean useCustomHiveMetaDb) {
            this.props.useCustomHiveMetaDb(useCustomHiveMetaDb);
            return this;
        }
        /**
         * Property useCustomHiveMetaDb: A reserved parameter.
         * <p>
         * Not required.
         * <p>
         * @return {@code this}
         * @param useCustomHiveMetaDb Property useCustomHiveMetaDb: A reserved parameter. This parameter is required.
         */
        public Builder useCustomHiveMetaDb(final com.aliyun.ros.cdk.core.IResolvable useCustomHiveMetaDb) {
            this.props.useCustomHiveMetaDb(useCustomHiveMetaDb);
            return this;
        }

        /**
         * Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
         * <p>
         * @return {@code this}
         * @param userDefinedEmrEcsRole Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources. This parameter is required.
         */
        public Builder userDefinedEmrEcsRole(final java.lang.String userDefinedEmrEcsRole) {
            this.props.userDefinedEmrEcsRole(userDefinedEmrEcsRole);
            return this;
        }
        /**
         * Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
         * <p>
         * @return {@code this}
         * @param userDefinedEmrEcsRole Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources. This parameter is required.
         */
        public Builder userDefinedEmrEcsRole(final com.aliyun.ros.cdk.core.IResolvable userDefinedEmrEcsRole) {
            this.props.userDefinedEmrEcsRole(userDefinedEmrEcsRole);
            return this;
        }

        /**
         * Property userInfo:.
         * <p>
         * @return {@code this}
         * @param userInfo Property userInfo:. This parameter is required.
         */
        public Builder userInfo(final com.aliyun.ros.cdk.core.IResolvable userInfo) {
            this.props.userInfo(userInfo);
            return this;
        }
        /**
         * Property userInfo:.
         * <p>
         * @return {@code this}
         * @param userInfo Property userInfo:. This parameter is required.
         */
        public Builder userInfo(final java.util.List<? extends java.lang.Object> userInfo) {
            this.props.userInfo(userInfo);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * A value is required when NetType=vpc.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * A value is required when NetType=vpc.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the Vswitch.
         * <p>
         * A value is required when NetType=vpc.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the Vswitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the Vswitch.
         * <p>
         * A value is required when NetType=vpc.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the Vswitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property whiteListType: Not required.
         * <p>
         * @return {@code this}
         * @param whiteListType Property whiteListType: Not required. This parameter is required.
         */
        public Builder whiteListType(final java.lang.String whiteListType) {
            this.props.whiteListType(whiteListType);
            return this;
        }
        /**
         * Property whiteListType: Not required.
         * <p>
         * @return {@code this}
         * @param whiteListType Property whiteListType: Not required. This parameter is required.
         */
        public Builder whiteListType(final com.aliyun.ros.cdk.core.IResolvable whiteListType) {
            this.props.whiteListType(whiteListType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.Cluster}.
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
