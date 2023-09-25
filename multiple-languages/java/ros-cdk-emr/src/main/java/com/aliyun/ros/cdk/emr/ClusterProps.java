package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>ALIYUN::EMR::Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.278Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property chargeType: The billing method.
     * <p>
     * Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

    /**
     * Property clusterType: The type of the cluster.
     * <p>
     * Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property emrVer: The version of EMR.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEmrVer();

    /**
     * Property hostGroup:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostGroup();

    /**
     * Property name: The name of the cluster.
     * <p>
     * The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property netType: The type of the network.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetType();

    /**
     * Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUseLocalMetaDb();

    /**
     * Property zoneId: The zone ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property authorizeContent: Not required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthorizeContent() {
        return null;
    }

    /**
     * Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property bootstrapAction:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBootstrapAction() {
        return null;
    }

    /**
     * Property clickHouseConf: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClickHouseConf() {
        return null;
    }

    /**
     * Property config:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     * Property configurations: Not required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigurations() {
        return null;
    }

    /**
     * Property depositType: The hosting type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDepositType() {
        return null;
    }

    /**
     * Property easEnable: Indicates whether the cluster is a high-security cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEasEnable() {
        return null;
    }

    /**
     * Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.
     * <p>
     * A value of true indicates
     * that two master nodes are required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHighAvailabilityEnable() {
        return null;
    }

    /**
     * Property initCustomHiveMetaDb: A reserved parameter.
     * <p>
     * Not required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitCustomHiveMetaDb() {
        return null;
    }

    /**
     * Property instanceGeneration: The generation of the ECS instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceGeneration() {
        return null;
    }

    /**
     * Property ioOptimized: Indicates wether I/O optimization is enabled.
     * <p>
     * Default value: true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     * Property isOpenPublicIp: Indicates whether a public IP address is assigned.
     * <p>
     * A value of true indicates that
     * a bandwidth of 8 MB is set by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsOpenPublicIp() {
        return null;
    }

    /**
     * Property keyPairName: The name of the key pair.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property logPath: The log path in OSS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogPath() {
        return null;
    }

    /**
     * Property machineType: The type of the machine.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMachineType() {
        return null;
    }

    /**
     * Property masterPwd: The SSH password for the master node.
     * <p>
     * The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterPwd() {
        return null;
    }

    /**
     * Property metaStoreConf: Meta store conf of specific meta store type.
     * <p>
     * If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetaStoreConf() {
        return null;
    }

    /**
     * Property metaStoreType: Meta store type.
     * <p>
     * Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetaStoreType() {
        return null;
    }

    /**
     * Property optionSoftWareList: The list of optional services.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptionSoftWareList() {
        return null;
    }

    /**
     * Property period: The length of the subscription.
     * <p>
     * Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRelatedClusterId() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the security group.
     * <p>
     * You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return null;
    }

    /**
     * Property sshEnable: Indicates whether SSH is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSshEnable() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property useCustomHiveMetaDb: A reserved parameter.
     * <p>
     * Not required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseCustomHiveMetaDb() {
        return null;
    }

    /**
     * Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserDefinedEmrEcsRole() {
        return null;
    }

    /**
     * Property userInfo:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserInfo() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC.
     * <p>
     * A value is required when NetType=vpc.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the Vswitch.
     * <p>
     * A value is required when NetType=vpc.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property whiteListType: Not required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWhiteListType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        java.lang.Object chargeType;
        java.lang.Object clusterType;
        java.lang.Object emrVer;
        java.lang.Object hostGroup;
        java.lang.Object name;
        java.lang.Object netType;
        java.lang.Object useLocalMetaDb;
        java.lang.Object zoneId;
        java.lang.Object authorizeContent;
        java.lang.Object autoRenew;
        java.lang.Object bootstrapAction;
        java.lang.Object clickHouseConf;
        java.lang.Object config;
        java.lang.Object configurations;
        java.lang.Object depositType;
        java.lang.Object easEnable;
        java.lang.Object highAvailabilityEnable;
        java.lang.Object initCustomHiveMetaDb;
        java.lang.Object instanceGeneration;
        java.lang.Object ioOptimized;
        java.lang.Object isOpenPublicIp;
        java.lang.Object keyPairName;
        java.lang.Object logPath;
        java.lang.Object machineType;
        java.lang.Object masterPwd;
        java.lang.Object metaStoreConf;
        java.lang.Object metaStoreType;
        java.lang.Object optionSoftWareList;
        java.lang.Object period;
        java.lang.Object relatedClusterId;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupName;
        java.lang.Object sshEnable;
        java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags;
        java.lang.Object useCustomHiveMetaDb;
        java.lang.Object userDefinedEmrEcsRole;
        java.lang.Object userInfo;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object whiteListType;

        /**
         * Sets the value of {@link ClusterProps#getChargeType}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         *                   Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
         *                   subscription.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getChargeType}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         *                   Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
         *                   subscription.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         *                    Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         *                    Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEmrVer}
         * @param emrVer Property emrVer: The version of EMR. This parameter is required.
         * @return {@code this}
         */
        public Builder emrVer(java.lang.String emrVer) {
            this.emrVer = emrVer;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEmrVer}
         * @param emrVer Property emrVer: The version of EMR. This parameter is required.
         * @return {@code this}
         */
        public Builder emrVer(com.aliyun.ros.cdk.core.IResolvable emrVer) {
            this.emrVer = emrVer;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getHostGroup}
         * @param hostGroup Property hostGroup:. This parameter is required.
         * @return {@code this}
         */
        public Builder hostGroup(com.aliyun.ros.cdk.core.IResolvable hostGroup) {
            this.hostGroup = hostGroup;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getHostGroup}
         * @param hostGroup Property hostGroup:. This parameter is required.
         * @return {@code this}
         */
        public Builder hostGroup(java.util.List<? extends java.lang.Object> hostGroup) {
            this.hostGroup = hostGroup;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The name can be 1 to 64 characters in length and only contain
         *             Chinese characters, letters, numbers, hyphens (-), and underscores (_).
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The name can be 1 to 64 characters in length and only contain
         *             Chinese characters, letters, numbers, hyphens (-), and underscores (_).
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetType}
         * @param netType Property netType: The type of the network. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetType}
         * @param netType Property netType: The type of the network. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUseLocalMetaDb}
         * @param useLocalMetaDb Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used. This parameter is required.
         * @return {@code this}
         */
        public Builder useLocalMetaDb(java.lang.Boolean useLocalMetaDb) {
            this.useLocalMetaDb = useLocalMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUseLocalMetaDb}
         * @param useLocalMetaDb Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used. This parameter is required.
         * @return {@code this}
         */
        public Builder useLocalMetaDb(com.aliyun.ros.cdk.core.IResolvable useLocalMetaDb) {
            this.useLocalMetaDb = useLocalMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAuthorizeContent}
         * @param authorizeContent Property authorizeContent: Not required.
         * @return {@code this}
         */
        public Builder authorizeContent(java.lang.String authorizeContent) {
            this.authorizeContent = authorizeContent;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAuthorizeContent}
         * @param authorizeContent Property authorizeContent: Not required.
         * @return {@code this}
         */
        public Builder authorizeContent(com.aliyun.ros.cdk.core.IResolvable authorizeContent) {
            this.authorizeContent = authorizeContent;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getBootstrapAction}
         * @param bootstrapAction Property bootstrapAction:.
         * @return {@code this}
         */
        public Builder bootstrapAction(com.aliyun.ros.cdk.core.IResolvable bootstrapAction) {
            this.bootstrapAction = bootstrapAction;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getBootstrapAction}
         * @param bootstrapAction Property bootstrapAction:.
         * @return {@code this}
         */
        public Builder bootstrapAction(java.util.List<? extends java.lang.Object> bootstrapAction) {
            this.bootstrapAction = bootstrapAction;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClickHouseConf}
         * @param clickHouseConf Property clickHouseConf: undefined.
         * @return {@code this}
         */
        public Builder clickHouseConf(com.aliyun.ros.cdk.core.IResolvable clickHouseConf) {
            this.clickHouseConf = clickHouseConf;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClickHouseConf}
         * @param clickHouseConf Property clickHouseConf: undefined.
         * @return {@code this}
         */
        public Builder clickHouseConf(java.util.Map<java.lang.String, ? extends java.lang.Object> clickHouseConf) {
            this.clickHouseConf = clickHouseConf;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getConfig}
         * @param config Property config:.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getConfig}
         * @param config Property config:.
         * @return {@code this}
         */
        public Builder config(java.util.List<? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getConfigurations}
         * @param configurations Property configurations: Not required.
         * @return {@code this}
         */
        public Builder configurations(java.lang.String configurations) {
            this.configurations = configurations;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getConfigurations}
         * @param configurations Property configurations: Not required.
         * @return {@code this}
         */
        public Builder configurations(com.aliyun.ros.cdk.core.IResolvable configurations) {
            this.configurations = configurations;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDepositType}
         * @param depositType Property depositType: The hosting type.
         * @return {@code this}
         */
        public Builder depositType(java.lang.String depositType) {
            this.depositType = depositType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDepositType}
         * @param depositType Property depositType: The hosting type.
         * @return {@code this}
         */
        public Builder depositType(com.aliyun.ros.cdk.core.IResolvable depositType) {
            this.depositType = depositType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEasEnable}
         * @param easEnable Property easEnable: Indicates whether the cluster is a high-security cluster.
         * @return {@code this}
         */
        public Builder easEnable(java.lang.Boolean easEnable) {
            this.easEnable = easEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEasEnable}
         * @param easEnable Property easEnable: Indicates whether the cluster is a high-security cluster.
         * @return {@code this}
         */
        public Builder easEnable(com.aliyun.ros.cdk.core.IResolvable easEnable) {
            this.easEnable = easEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getHighAvailabilityEnable}
         * @param highAvailabilityEnable Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.
         *                               A value of true indicates
         *                               that two master nodes are required.
         * @return {@code this}
         */
        public Builder highAvailabilityEnable(java.lang.Boolean highAvailabilityEnable) {
            this.highAvailabilityEnable = highAvailabilityEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getHighAvailabilityEnable}
         * @param highAvailabilityEnable Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.
         *                               A value of true indicates
         *                               that two master nodes are required.
         * @return {@code this}
         */
        public Builder highAvailabilityEnable(com.aliyun.ros.cdk.core.IResolvable highAvailabilityEnable) {
            this.highAvailabilityEnable = highAvailabilityEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInitCustomHiveMetaDb}
         * @param initCustomHiveMetaDb Property initCustomHiveMetaDb: A reserved parameter.
         *                             Not required.
         * @return {@code this}
         */
        public Builder initCustomHiveMetaDb(java.lang.Boolean initCustomHiveMetaDb) {
            this.initCustomHiveMetaDb = initCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInitCustomHiveMetaDb}
         * @param initCustomHiveMetaDb Property initCustomHiveMetaDb: A reserved parameter.
         *                             Not required.
         * @return {@code this}
         */
        public Builder initCustomHiveMetaDb(com.aliyun.ros.cdk.core.IResolvable initCustomHiveMetaDb) {
            this.initCustomHiveMetaDb = initCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInstanceGeneration}
         * @param instanceGeneration Property instanceGeneration: The generation of the ECS instances.
         * @return {@code this}
         */
        public Builder instanceGeneration(java.lang.String instanceGeneration) {
            this.instanceGeneration = instanceGeneration;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInstanceGeneration}
         * @param instanceGeneration Property instanceGeneration: The generation of the ECS instances.
         * @return {@code this}
         */
        public Builder instanceGeneration(com.aliyun.ros.cdk.core.IResolvable instanceGeneration) {
            this.instanceGeneration = instanceGeneration;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Indicates wether I/O optimization is enabled.
         *                    Default value: true.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.Boolean ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Indicates wether I/O optimization is enabled.
         *                    Default value: true.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIsOpenPublicIp}
         * @param isOpenPublicIp Property isOpenPublicIp: Indicates whether a public IP address is assigned.
         *                       A value of true indicates that
         *                       a bandwidth of 8 MB is set by default.
         * @return {@code this}
         */
        public Builder isOpenPublicIp(java.lang.Boolean isOpenPublicIp) {
            this.isOpenPublicIp = isOpenPublicIp;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIsOpenPublicIp}
         * @param isOpenPublicIp Property isOpenPublicIp: Indicates whether a public IP address is assigned.
         *                       A value of true indicates that
         *                       a bandwidth of 8 MB is set by default.
         * @return {@code this}
         */
        public Builder isOpenPublicIp(com.aliyun.ros.cdk.core.IResolvable isOpenPublicIp) {
            this.isOpenPublicIp = isOpenPublicIp;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getKeyPairName}
         * @param keyPairName Property keyPairName: The name of the key pair.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getKeyPairName}
         * @param keyPairName Property keyPairName: The name of the key pair.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLogPath}
         * @param logPath Property logPath: The log path in OSS.
         * @return {@code this}
         */
        public Builder logPath(java.lang.String logPath) {
            this.logPath = logPath;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLogPath}
         * @param logPath Property logPath: The log path in OSS.
         * @return {@code this}
         */
        public Builder logPath(com.aliyun.ros.cdk.core.IResolvable logPath) {
            this.logPath = logPath;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMachineType}
         * @param machineType Property machineType: The type of the machine.
         * @return {@code this}
         */
        public Builder machineType(java.lang.String machineType) {
            this.machineType = machineType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMachineType}
         * @param machineType Property machineType: The type of the machine.
         * @return {@code this}
         */
        public Builder machineType(com.aliyun.ros.cdk.core.IResolvable machineType) {
            this.machineType = machineType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMasterPwd}
         * @param masterPwd Property masterPwd: The SSH password for the master node.
         *                  The password must meet the following requirements.
         *                  Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
         *                  It must contain three types of characters (uppercase letters, lowercase letters, numbers,
         *                  and special symbols).
         * @return {@code this}
         */
        public Builder masterPwd(java.lang.String masterPwd) {
            this.masterPwd = masterPwd;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMasterPwd}
         * @param masterPwd Property masterPwd: The SSH password for the master node.
         *                  The password must meet the following requirements.
         *                  Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
         *                  It must contain three types of characters (uppercase letters, lowercase letters, numbers,
         *                  and special symbols).
         * @return {@code this}
         */
        public Builder masterPwd(com.aliyun.ros.cdk.core.IResolvable masterPwd) {
            this.masterPwd = masterPwd;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMetaStoreConf}
         * @param metaStoreConf Property metaStoreConf: Meta store conf of specific meta store type.
         *                      If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
         * @return {@code this}
         */
        public Builder metaStoreConf(java.lang.String metaStoreConf) {
            this.metaStoreConf = metaStoreConf;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMetaStoreConf}
         * @param metaStoreConf Property metaStoreConf: Meta store conf of specific meta store type.
         *                      If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
         * @return {@code this}
         */
        public Builder metaStoreConf(com.aliyun.ros.cdk.core.IResolvable metaStoreConf) {
            this.metaStoreConf = metaStoreConf;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMetaStoreType}
         * @param metaStoreType Property metaStoreType: Meta store type.
         *                      Allow types:
         *                      local: Local cluster
         *                      unified: Unified meta data
         *                      user_rds: User's RDS
         * @return {@code this}
         */
        public Builder metaStoreType(java.lang.String metaStoreType) {
            this.metaStoreType = metaStoreType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMetaStoreType}
         * @param metaStoreType Property metaStoreType: Meta store type.
         *                      Allow types:
         *                      local: Local cluster
         *                      unified: Unified meta data
         *                      user_rds: User's RDS
         * @return {@code this}
         */
        public Builder metaStoreType(com.aliyun.ros.cdk.core.IResolvable metaStoreType) {
            this.metaStoreType = metaStoreType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOptionSoftWareList}
         * @param optionSoftWareList Property optionSoftWareList: The list of optional services.
         * @return {@code this}
         */
        public Builder optionSoftWareList(com.aliyun.ros.cdk.core.IResolvable optionSoftWareList) {
            this.optionSoftWareList = optionSoftWareList;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getOptionSoftWareList}
         * @param optionSoftWareList Property optionSoftWareList: The list of optional services.
         * @return {@code this}
         */
        public Builder optionSoftWareList(java.util.List<? extends java.lang.Object> optionSoftWareList) {
            this.optionSoftWareList = optionSoftWareList;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPeriod}
         * @param period Property period: The length of the subscription.
         *               Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
         *               9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPeriod}
         * @param period Property period: The length of the subscription.
         *               Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
         *               9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRelatedClusterId}
         * @param relatedClusterId Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
         * @return {@code this}
         */
        public Builder relatedClusterId(java.lang.String relatedClusterId) {
            this.relatedClusterId = relatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRelatedClusterId}
         * @param relatedClusterId Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
         * @return {@code this}
         */
        public Builder relatedClusterId(com.aliyun.ros.cdk.core.IResolvable relatedClusterId) {
            this.relatedClusterId = relatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group.
         *                        You can create a security group in the ECS console and
         *                        use it. Note: If you use an existing security group, the default security group policy
         *                        is applied to this security group: Only port 22 is open at the inbound and all ports
         *                        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group.
         *                        You can create a security group in the ECS console and
         *                        use it. Note: If you use an existing security group, the default security group policy
         *                        is applied to this security group: Only port 22 is open at the inbound and all ports
         *                        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: The name of the security group to create.
         *                          If the ID of the security group is not specified,
         *                          this name is used to create a new security group. After the cluster is created, you
         *                          can view the ID of the security group on the Cluster Management page. The default
         *                          security group policy is applied to this security group: Only port 22 is open at the
         *                          inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
         *                          or SecurityGroupName.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: The name of the security group to create.
         *                          If the ID of the security group is not specified,
         *                          this name is used to create a new security group. After the cluster is created, you
         *                          can view the ID of the security group on the Cluster Management page. The default
         *                          security group policy is applied to this security group: Only port 22 is open at the
         *                          inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
         *                          or SecurityGroupName.
         * @return {@code this}
         */
        public Builder securityGroupName(com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSshEnable}
         * @param sshEnable Property sshEnable: Indicates whether SSH is enabled.
         * @return {@code this}
         */
        public Builder sshEnable(java.lang.Boolean sshEnable) {
            this.sshEnable = sshEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSshEnable}
         * @param sshEnable Property sshEnable: Indicates whether SSH is enabled.
         * @return {@code this}
         */
        public Builder sshEnable(com.aliyun.ros.cdk.core.IResolvable sshEnable) {
            this.sshEnable = sshEnable;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUseCustomHiveMetaDb}
         * @param useCustomHiveMetaDb Property useCustomHiveMetaDb: A reserved parameter.
         *                            Not required.
         * @return {@code this}
         */
        public Builder useCustomHiveMetaDb(java.lang.Boolean useCustomHiveMetaDb) {
            this.useCustomHiveMetaDb = useCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUseCustomHiveMetaDb}
         * @param useCustomHiveMetaDb Property useCustomHiveMetaDb: A reserved parameter.
         *                            Not required.
         * @return {@code this}
         */
        public Builder useCustomHiveMetaDb(com.aliyun.ros.cdk.core.IResolvable useCustomHiveMetaDb) {
            this.useCustomHiveMetaDb = useCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUserDefinedEmrEcsRole}
         * @param userDefinedEmrEcsRole Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
         * @return {@code this}
         */
        public Builder userDefinedEmrEcsRole(java.lang.String userDefinedEmrEcsRole) {
            this.userDefinedEmrEcsRole = userDefinedEmrEcsRole;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUserDefinedEmrEcsRole}
         * @param userDefinedEmrEcsRole Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
         * @return {@code this}
         */
        public Builder userDefinedEmrEcsRole(com.aliyun.ros.cdk.core.IResolvable userDefinedEmrEcsRole) {
            this.userDefinedEmrEcsRole = userDefinedEmrEcsRole;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUserInfo}
         * @param userInfo Property userInfo:.
         * @return {@code this}
         */
        public Builder userInfo(com.aliyun.ros.cdk.core.IResolvable userInfo) {
            this.userInfo = userInfo;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getUserInfo}
         * @param userInfo Property userInfo:.
         * @return {@code this}
         */
        public Builder userInfo(java.util.List<? extends java.lang.Object> userInfo) {
            this.userInfo = userInfo;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         *              A value is required when NetType=vpc.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         *              A value is required when NetType=vpc.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the Vswitch.
         *                  A value is required when NetType=vpc.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the Vswitch.
         *                  A value is required when NetType=vpc.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getWhiteListType}
         * @param whiteListType Property whiteListType: Not required.
         * @return {@code this}
         */
        public Builder whiteListType(java.lang.String whiteListType) {
            this.whiteListType = whiteListType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getWhiteListType}
         * @param whiteListType Property whiteListType: Not required.
         * @return {@code this}
         */
        public Builder whiteListType(com.aliyun.ros.cdk.core.IResolvable whiteListType) {
            this.whiteListType = whiteListType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object chargeType;
        private final java.lang.Object clusterType;
        private final java.lang.Object emrVer;
        private final java.lang.Object hostGroup;
        private final java.lang.Object name;
        private final java.lang.Object netType;
        private final java.lang.Object useLocalMetaDb;
        private final java.lang.Object zoneId;
        private final java.lang.Object authorizeContent;
        private final java.lang.Object autoRenew;
        private final java.lang.Object bootstrapAction;
        private final java.lang.Object clickHouseConf;
        private final java.lang.Object config;
        private final java.lang.Object configurations;
        private final java.lang.Object depositType;
        private final java.lang.Object easEnable;
        private final java.lang.Object highAvailabilityEnable;
        private final java.lang.Object initCustomHiveMetaDb;
        private final java.lang.Object instanceGeneration;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object isOpenPublicIp;
        private final java.lang.Object keyPairName;
        private final java.lang.Object logPath;
        private final java.lang.Object machineType;
        private final java.lang.Object masterPwd;
        private final java.lang.Object metaStoreConf;
        private final java.lang.Object metaStoreType;
        private final java.lang.Object optionSoftWareList;
        private final java.lang.Object period;
        private final java.lang.Object relatedClusterId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupName;
        private final java.lang.Object sshEnable;
        private final java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags;
        private final java.lang.Object useCustomHiveMetaDb;
        private final java.lang.Object userDefinedEmrEcsRole;
        private final java.lang.Object userInfo;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object whiteListType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.emrVer = software.amazon.jsii.Kernel.get(this, "emrVer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostGroup = software.amazon.jsii.Kernel.get(this, "hostGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useLocalMetaDb = software.amazon.jsii.Kernel.get(this, "useLocalMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authorizeContent = software.amazon.jsii.Kernel.get(this, "authorizeContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bootstrapAction = software.amazon.jsii.Kernel.get(this, "bootstrapAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clickHouseConf = software.amazon.jsii.Kernel.get(this, "clickHouseConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configurations = software.amazon.jsii.Kernel.get(this, "configurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.depositType = software.amazon.jsii.Kernel.get(this, "depositType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.easEnable = software.amazon.jsii.Kernel.get(this, "easEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.highAvailabilityEnable = software.amazon.jsii.Kernel.get(this, "highAvailabilityEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initCustomHiveMetaDb = software.amazon.jsii.Kernel.get(this, "initCustomHiveMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceGeneration = software.amazon.jsii.Kernel.get(this, "instanceGeneration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isOpenPublicIp = software.amazon.jsii.Kernel.get(this, "isOpenPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logPath = software.amazon.jsii.Kernel.get(this, "logPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.machineType = software.amazon.jsii.Kernel.get(this, "machineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterPwd = software.amazon.jsii.Kernel.get(this, "masterPwd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metaStoreConf = software.amazon.jsii.Kernel.get(this, "metaStoreConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metaStoreType = software.amazon.jsii.Kernel.get(this, "metaStoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.optionSoftWareList = software.amazon.jsii.Kernel.get(this, "optionSoftWareList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.relatedClusterId = software.amazon.jsii.Kernel.get(this, "relatedClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sshEnable = software.amazon.jsii.Kernel.get(this, "sshEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosCluster.TagsProperty.class)));
            this.useCustomHiveMetaDb = software.amazon.jsii.Kernel.get(this, "useCustomHiveMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userDefinedEmrEcsRole = software.amazon.jsii.Kernel.get(this, "userDefinedEmrEcsRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userInfo = software.amazon.jsii.Kernel.get(this, "userInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whiteListType = software.amazon.jsii.Kernel.get(this, "whiteListType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.emrVer = java.util.Objects.requireNonNull(builder.emrVer, "emrVer is required");
            this.hostGroup = java.util.Objects.requireNonNull(builder.hostGroup, "hostGroup is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.netType = java.util.Objects.requireNonNull(builder.netType, "netType is required");
            this.useLocalMetaDb = java.util.Objects.requireNonNull(builder.useLocalMetaDb, "useLocalMetaDb is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.authorizeContent = builder.authorizeContent;
            this.autoRenew = builder.autoRenew;
            this.bootstrapAction = builder.bootstrapAction;
            this.clickHouseConf = builder.clickHouseConf;
            this.config = builder.config;
            this.configurations = builder.configurations;
            this.depositType = builder.depositType;
            this.easEnable = builder.easEnable;
            this.highAvailabilityEnable = builder.highAvailabilityEnable;
            this.initCustomHiveMetaDb = builder.initCustomHiveMetaDb;
            this.instanceGeneration = builder.instanceGeneration;
            this.ioOptimized = builder.ioOptimized;
            this.isOpenPublicIp = builder.isOpenPublicIp;
            this.keyPairName = builder.keyPairName;
            this.logPath = builder.logPath;
            this.machineType = builder.machineType;
            this.masterPwd = builder.masterPwd;
            this.metaStoreConf = builder.metaStoreConf;
            this.metaStoreType = builder.metaStoreType;
            this.optionSoftWareList = builder.optionSoftWareList;
            this.period = builder.period;
            this.relatedClusterId = builder.relatedClusterId;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupName = builder.securityGroupName;
            this.sshEnable = builder.sshEnable;
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty>)builder.tags;
            this.useCustomHiveMetaDb = builder.useCustomHiveMetaDb;
            this.userDefinedEmrEcsRole = builder.userDefinedEmrEcsRole;
            this.userInfo = builder.userInfo;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.whiteListType = builder.whiteListType;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getEmrVer() {
            return this.emrVer;
        }

        @Override
        public final java.lang.Object getHostGroup() {
            return this.hostGroup;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNetType() {
            return this.netType;
        }

        @Override
        public final java.lang.Object getUseLocalMetaDb() {
            return this.useLocalMetaDb;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAuthorizeContent() {
            return this.authorizeContent;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getBootstrapAction() {
            return this.bootstrapAction;
        }

        @Override
        public final java.lang.Object getClickHouseConf() {
            return this.clickHouseConf;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        public final java.lang.Object getConfigurations() {
            return this.configurations;
        }

        @Override
        public final java.lang.Object getDepositType() {
            return this.depositType;
        }

        @Override
        public final java.lang.Object getEasEnable() {
            return this.easEnable;
        }

        @Override
        public final java.lang.Object getHighAvailabilityEnable() {
            return this.highAvailabilityEnable;
        }

        @Override
        public final java.lang.Object getInitCustomHiveMetaDb() {
            return this.initCustomHiveMetaDb;
        }

        @Override
        public final java.lang.Object getInstanceGeneration() {
            return this.instanceGeneration;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getIsOpenPublicIp() {
            return this.isOpenPublicIp;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getLogPath() {
            return this.logPath;
        }

        @Override
        public final java.lang.Object getMachineType() {
            return this.machineType;
        }

        @Override
        public final java.lang.Object getMasterPwd() {
            return this.masterPwd;
        }

        @Override
        public final java.lang.Object getMetaStoreConf() {
            return this.metaStoreConf;
        }

        @Override
        public final java.lang.Object getMetaStoreType() {
            return this.metaStoreType;
        }

        @Override
        public final java.lang.Object getOptionSoftWareList() {
            return this.optionSoftWareList;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getRelatedClusterId() {
            return this.relatedClusterId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupName() {
            return this.securityGroupName;
        }

        @Override
        public final java.lang.Object getSshEnable() {
            return this.sshEnable;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUseCustomHiveMetaDb() {
            return this.useCustomHiveMetaDb;
        }

        @Override
        public final java.lang.Object getUserDefinedEmrEcsRole() {
            return this.userDefinedEmrEcsRole;
        }

        @Override
        public final java.lang.Object getUserInfo() {
            return this.userInfo;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getWhiteListType() {
            return this.whiteListType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chargeType", om.valueToTree(this.getChargeType()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("emrVer", om.valueToTree(this.getEmrVer()));
            data.set("hostGroup", om.valueToTree(this.getHostGroup()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("netType", om.valueToTree(this.getNetType()));
            data.set("useLocalMetaDb", om.valueToTree(this.getUseLocalMetaDb()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAuthorizeContent() != null) {
                data.set("authorizeContent", om.valueToTree(this.getAuthorizeContent()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBootstrapAction() != null) {
                data.set("bootstrapAction", om.valueToTree(this.getBootstrapAction()));
            }
            if (this.getClickHouseConf() != null) {
                data.set("clickHouseConf", om.valueToTree(this.getClickHouseConf()));
            }
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }
            if (this.getConfigurations() != null) {
                data.set("configurations", om.valueToTree(this.getConfigurations()));
            }
            if (this.getDepositType() != null) {
                data.set("depositType", om.valueToTree(this.getDepositType()));
            }
            if (this.getEasEnable() != null) {
                data.set("easEnable", om.valueToTree(this.getEasEnable()));
            }
            if (this.getHighAvailabilityEnable() != null) {
                data.set("highAvailabilityEnable", om.valueToTree(this.getHighAvailabilityEnable()));
            }
            if (this.getInitCustomHiveMetaDb() != null) {
                data.set("initCustomHiveMetaDb", om.valueToTree(this.getInitCustomHiveMetaDb()));
            }
            if (this.getInstanceGeneration() != null) {
                data.set("instanceGeneration", om.valueToTree(this.getInstanceGeneration()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getIsOpenPublicIp() != null) {
                data.set("isOpenPublicIp", om.valueToTree(this.getIsOpenPublicIp()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getLogPath() != null) {
                data.set("logPath", om.valueToTree(this.getLogPath()));
            }
            if (this.getMachineType() != null) {
                data.set("machineType", om.valueToTree(this.getMachineType()));
            }
            if (this.getMasterPwd() != null) {
                data.set("masterPwd", om.valueToTree(this.getMasterPwd()));
            }
            if (this.getMetaStoreConf() != null) {
                data.set("metaStoreConf", om.valueToTree(this.getMetaStoreConf()));
            }
            if (this.getMetaStoreType() != null) {
                data.set("metaStoreType", om.valueToTree(this.getMetaStoreType()));
            }
            if (this.getOptionSoftWareList() != null) {
                data.set("optionSoftWareList", om.valueToTree(this.getOptionSoftWareList()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getRelatedClusterId() != null) {
                data.set("relatedClusterId", om.valueToTree(this.getRelatedClusterId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupName() != null) {
                data.set("securityGroupName", om.valueToTree(this.getSecurityGroupName()));
            }
            if (this.getSshEnable() != null) {
                data.set("sshEnable", om.valueToTree(this.getSshEnable()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUseCustomHiveMetaDb() != null) {
                data.set("useCustomHiveMetaDb", om.valueToTree(this.getUseCustomHiveMetaDb()));
            }
            if (this.getUserDefinedEmrEcsRole() != null) {
                data.set("userDefinedEmrEcsRole", om.valueToTree(this.getUserDefinedEmrEcsRole()));
            }
            if (this.getUserInfo() != null) {
                data.set("userInfo", om.valueToTree(this.getUserInfo()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getWhiteListType() != null) {
                data.set("whiteListType", om.valueToTree(this.getWhiteListType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

            if (!chargeType.equals(that.chargeType)) return false;
            if (!clusterType.equals(that.clusterType)) return false;
            if (!emrVer.equals(that.emrVer)) return false;
            if (!hostGroup.equals(that.hostGroup)) return false;
            if (!name.equals(that.name)) return false;
            if (!netType.equals(that.netType)) return false;
            if (!useLocalMetaDb.equals(that.useLocalMetaDb)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.authorizeContent != null ? !this.authorizeContent.equals(that.authorizeContent) : that.authorizeContent != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.bootstrapAction != null ? !this.bootstrapAction.equals(that.bootstrapAction) : that.bootstrapAction != null) return false;
            if (this.clickHouseConf != null ? !this.clickHouseConf.equals(that.clickHouseConf) : that.clickHouseConf != null) return false;
            if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
            if (this.configurations != null ? !this.configurations.equals(that.configurations) : that.configurations != null) return false;
            if (this.depositType != null ? !this.depositType.equals(that.depositType) : that.depositType != null) return false;
            if (this.easEnable != null ? !this.easEnable.equals(that.easEnable) : that.easEnable != null) return false;
            if (this.highAvailabilityEnable != null ? !this.highAvailabilityEnable.equals(that.highAvailabilityEnable) : that.highAvailabilityEnable != null) return false;
            if (this.initCustomHiveMetaDb != null ? !this.initCustomHiveMetaDb.equals(that.initCustomHiveMetaDb) : that.initCustomHiveMetaDb != null) return false;
            if (this.instanceGeneration != null ? !this.instanceGeneration.equals(that.instanceGeneration) : that.instanceGeneration != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.isOpenPublicIp != null ? !this.isOpenPublicIp.equals(that.isOpenPublicIp) : that.isOpenPublicIp != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.logPath != null ? !this.logPath.equals(that.logPath) : that.logPath != null) return false;
            if (this.machineType != null ? !this.machineType.equals(that.machineType) : that.machineType != null) return false;
            if (this.masterPwd != null ? !this.masterPwd.equals(that.masterPwd) : that.masterPwd != null) return false;
            if (this.metaStoreConf != null ? !this.metaStoreConf.equals(that.metaStoreConf) : that.metaStoreConf != null) return false;
            if (this.metaStoreType != null ? !this.metaStoreType.equals(that.metaStoreType) : that.metaStoreType != null) return false;
            if (this.optionSoftWareList != null ? !this.optionSoftWareList.equals(that.optionSoftWareList) : that.optionSoftWareList != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.relatedClusterId != null ? !this.relatedClusterId.equals(that.relatedClusterId) : that.relatedClusterId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.sshEnable != null ? !this.sshEnable.equals(that.sshEnable) : that.sshEnable != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.useCustomHiveMetaDb != null ? !this.useCustomHiveMetaDb.equals(that.useCustomHiveMetaDb) : that.useCustomHiveMetaDb != null) return false;
            if (this.userDefinedEmrEcsRole != null ? !this.userDefinedEmrEcsRole.equals(that.userDefinedEmrEcsRole) : that.userDefinedEmrEcsRole != null) return false;
            if (this.userInfo != null ? !this.userInfo.equals(that.userInfo) : that.userInfo != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.whiteListType != null ? this.whiteListType.equals(that.whiteListType) : that.whiteListType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chargeType.hashCode();
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.emrVer.hashCode());
            result = 31 * result + (this.hostGroup.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.netType.hashCode());
            result = 31 * result + (this.useLocalMetaDb.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.authorizeContent != null ? this.authorizeContent.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.bootstrapAction != null ? this.bootstrapAction.hashCode() : 0);
            result = 31 * result + (this.clickHouseConf != null ? this.clickHouseConf.hashCode() : 0);
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            result = 31 * result + (this.configurations != null ? this.configurations.hashCode() : 0);
            result = 31 * result + (this.depositType != null ? this.depositType.hashCode() : 0);
            result = 31 * result + (this.easEnable != null ? this.easEnable.hashCode() : 0);
            result = 31 * result + (this.highAvailabilityEnable != null ? this.highAvailabilityEnable.hashCode() : 0);
            result = 31 * result + (this.initCustomHiveMetaDb != null ? this.initCustomHiveMetaDb.hashCode() : 0);
            result = 31 * result + (this.instanceGeneration != null ? this.instanceGeneration.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.isOpenPublicIp != null ? this.isOpenPublicIp.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.logPath != null ? this.logPath.hashCode() : 0);
            result = 31 * result + (this.machineType != null ? this.machineType.hashCode() : 0);
            result = 31 * result + (this.masterPwd != null ? this.masterPwd.hashCode() : 0);
            result = 31 * result + (this.metaStoreConf != null ? this.metaStoreConf.hashCode() : 0);
            result = 31 * result + (this.metaStoreType != null ? this.metaStoreType.hashCode() : 0);
            result = 31 * result + (this.optionSoftWareList != null ? this.optionSoftWareList.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.relatedClusterId != null ? this.relatedClusterId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.sshEnable != null ? this.sshEnable.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.useCustomHiveMetaDb != null ? this.useCustomHiveMetaDb.hashCode() : 0);
            result = 31 * result + (this.userDefinedEmrEcsRole != null ? this.userDefinedEmrEcsRole.hashCode() : 0);
            result = 31 * result + (this.userInfo != null ? this.userInfo.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.whiteListType != null ? this.whiteListType.hashCode() : 0);
            return result;
        }
    }
}
