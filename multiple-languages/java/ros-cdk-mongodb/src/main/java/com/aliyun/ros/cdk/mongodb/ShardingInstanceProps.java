package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a <code>ShardingInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:56.167Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.ShardingInstanceProps")
@software.amazon.jsii.Jsii.Proxy(ShardingInstanceProps.Jsii$Proxy.class)
public interface ShardingInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configServer:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigServer();

    /**
     * Property mongos:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMongos();

    /**
     * Property replicaSet:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicaSet();

    /**
     * Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPassword() {
        return null;
    }

    /**
     * Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
     * <p>
     * Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property engineVersion: Database instance version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     * Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * <p>
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHiddenZoneId() {
        return null;
    }

    /**
     * Property networkType: The instance network type.
     * <p>
     * Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property protocolType: Protocol type.
     * <p>
     * Valid value: mongodb or dynamodb.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocolType() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property restoreTime: The time to restore the cloned instance to.
     * <p>
     * The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTime() {
        return null;
    }

    /**
     * Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * <p>
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryZoneId() {
        return null;
    }

    /**
     * Property securityIpArray: Security ips to add or remove.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpArray() {
        return null;
    }

    /**
     * Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSrcDbInstanceId() {
        return null;
    }

    /**
     * Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageEngine() {
        return null;
    }

    /**
     * Property storageType: The storage type of the instance.
     * <p>
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageType() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
     * <p>
     * Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTdeStatus() {
        return null;
    }

    /**
     * Property vpcId: The VPC id to create mongodb instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: On which zone to create the instance.
     * <p>
     * If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ShardingInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ShardingInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ShardingInstanceProps> {
        java.lang.Object configServer;
        java.lang.Object mongos;
        java.lang.Object replicaSet;
        java.lang.Object accountPassword;
        java.lang.Object autoRenew;
        java.lang.Object chargeType;
        java.lang.Object dbInstanceDescription;
        java.lang.Object engineVersion;
        java.lang.Object hiddenZoneId;
        java.lang.Object networkType;
        java.lang.Object period;
        java.lang.Object protocolType;
        java.lang.Object resourceGroupId;
        java.lang.Object restoreTime;
        java.lang.Object secondaryZoneId;
        java.lang.Object securityIpArray;
        java.lang.Object srcDbInstanceId;
        java.lang.Object storageEngine;
        java.lang.Object storageType;
        java.util.List<com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty> tags;
        java.lang.Object tdeStatus;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ShardingInstanceProps#getConfigServer}
         * @param configServer Property configServer:. This parameter is required.
         * @return {@code this}
         */
        public Builder configServer(com.aliyun.ros.cdk.core.IResolvable configServer) {
            this.configServer = configServer;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getConfigServer}
         * @param configServer Property configServer:. This parameter is required.
         * @return {@code this}
         */
        public Builder configServer(java.util.List<? extends java.lang.Object> configServer) {
            this.configServer = configServer;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getMongos}
         * @param mongos Property mongos:. This parameter is required.
         * @return {@code this}
         */
        public Builder mongos(com.aliyun.ros.cdk.core.IResolvable mongos) {
            this.mongos = mongos;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getMongos}
         * @param mongos Property mongos:. This parameter is required.
         * @return {@code this}
         */
        public Builder mongos(java.util.List<? extends java.lang.Object> mongos) {
            this.mongos = mongos;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getReplicaSet}
         * @param replicaSet Property replicaSet:. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaSet(com.aliyun.ros.cdk.core.IResolvable replicaSet) {
            this.replicaSet = replicaSet;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getReplicaSet}
         * @param replicaSet Property replicaSet:. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaSet(java.util.List<? extends java.lang.Object> replicaSet) {
            this.replicaSet = replicaSet;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         *                  Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         *                  Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getHiddenZoneId}
         * @param hiddenZoneId Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
         *                     When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
         *                     The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
         * @return {@code this}
         */
        public Builder hiddenZoneId(java.lang.String hiddenZoneId) {
            this.hiddenZoneId = hiddenZoneId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getHiddenZoneId}
         * @param hiddenZoneId Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
         *                     When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
         *                     The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
         * @return {@code this}
         */
        public Builder hiddenZoneId(com.aliyun.ros.cdk.core.IResolvable hiddenZoneId) {
            this.hiddenZoneId = hiddenZoneId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getNetworkType}
         * @param networkType Property networkType: The instance network type.
         *                    Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getNetworkType}
         * @param networkType Property networkType: The instance network type.
         *                    Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getProtocolType}
         * @param protocolType Property protocolType: Protocol type.
         *                     Valid value: mongodb or dynamodb.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getProtocolType}
         * @param protocolType Property protocolType: Protocol type.
         *                     Valid value: mongodb or dynamodb.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The time to restore the cloned instance to.
         *                    The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.String restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The time to restore the cloned instance to.
         *                    The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
         * @return {@code this}
         */
        public Builder restoreTime(com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getSecondaryZoneId}
         * @param secondaryZoneId Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
         *                        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
         * @return {@code this}
         */
        public Builder secondaryZoneId(java.lang.String secondaryZoneId) {
            this.secondaryZoneId = secondaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getSecondaryZoneId}
         * @param secondaryZoneId Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
         *                        When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
         * @return {@code this}
         */
        public Builder secondaryZoneId(com.aliyun.ros.cdk.core.IResolvable secondaryZoneId) {
            this.secondaryZoneId = secondaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getSecurityIpArray}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove.
         * @return {@code this}
         */
        public Builder securityIpArray(java.lang.String securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getSecurityIpArray}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove.
         * @return {@code this}
         */
        public Builder securityIpArray(com.aliyun.ros.cdk.core.IResolvable securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getSrcDbInstanceId}
         * @param srcDbInstanceId Property srcDbInstanceId: Create an instance of the backup set based on an instance.
         * @return {@code this}
         */
        public Builder srcDbInstanceId(java.lang.String srcDbInstanceId) {
            this.srcDbInstanceId = srcDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getSrcDbInstanceId}
         * @param srcDbInstanceId Property srcDbInstanceId: Create an instance of the backup set based on an instance.
         * @return {@code this}
         */
        public Builder srcDbInstanceId(com.aliyun.ros.cdk.core.IResolvable srcDbInstanceId) {
            this.srcDbInstanceId = srcDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getStorageEngine}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
         * @return {@code this}
         */
        public Builder storageEngine(java.lang.String storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getStorageEngine}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
         * @return {@code this}
         */
        public Builder storageEngine(com.aliyun.ros.cdk.core.IResolvable storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getStorageType}
         * @param storageType Property storageType: The storage type of the instance.
         *                    Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
         *                    Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getStorageType}
         * @param storageType Property storageType: The storage type of the instance.
         *                    Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
         *                    Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
         * @return {@code this}
         */
        public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getTdeStatus}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         *                  Valid values:
         *                  true: enable TDE
         *                  false: disable TDE (default)
         *                  Note: You cannot disable TDE after it is enabled.
         * @return {@code this}
         */
        public Builder tdeStatus(java.lang.Boolean tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getTdeStatus}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         *                  Valid values:
         *                  true: enable TDE
         *                  false: disable TDE (default)
         *                  Note: You cannot disable TDE after it is enabled.
         * @return {@code this}
         */
        public Builder tdeStatus(com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getZoneId}
         * @param zoneId Property zoneId: On which zone to create the instance.
         *               If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ShardingInstanceProps#getZoneId}
         * @param zoneId Property zoneId: On which zone to create the instance.
         *               If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ShardingInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ShardingInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ShardingInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ShardingInstanceProps {
        private final java.lang.Object configServer;
        private final java.lang.Object mongos;
        private final java.lang.Object replicaSet;
        private final java.lang.Object accountPassword;
        private final java.lang.Object autoRenew;
        private final java.lang.Object chargeType;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object engineVersion;
        private final java.lang.Object hiddenZoneId;
        private final java.lang.Object networkType;
        private final java.lang.Object period;
        private final java.lang.Object protocolType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restoreTime;
        private final java.lang.Object secondaryZoneId;
        private final java.lang.Object securityIpArray;
        private final java.lang.Object srcDbInstanceId;
        private final java.lang.Object storageEngine;
        private final java.lang.Object storageType;
        private final java.util.List<com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty> tags;
        private final java.lang.Object tdeStatus;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configServer = software.amazon.jsii.Kernel.get(this, "configServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mongos = software.amazon.jsii.Kernel.get(this, "mongos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicaSet = software.amazon.jsii.Kernel.get(this, "replicaSet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hiddenZoneId = software.amazon.jsii.Kernel.get(this, "hiddenZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreTime = software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryZoneId = software.amazon.jsii.Kernel.get(this, "secondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpArray = software.amazon.jsii.Kernel.get(this, "securityIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.srcDbInstanceId = software.amazon.jsii.Kernel.get(this, "srcDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageEngine = software.amazon.jsii.Kernel.get(this, "storageEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty.class)));
            this.tdeStatus = software.amazon.jsii.Kernel.get(this, "tdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configServer = java.util.Objects.requireNonNull(builder.configServer, "configServer is required");
            this.mongos = java.util.Objects.requireNonNull(builder.mongos, "mongos is required");
            this.replicaSet = java.util.Objects.requireNonNull(builder.replicaSet, "replicaSet is required");
            this.accountPassword = builder.accountPassword;
            this.autoRenew = builder.autoRenew;
            this.chargeType = builder.chargeType;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.engineVersion = builder.engineVersion;
            this.hiddenZoneId = builder.hiddenZoneId;
            this.networkType = builder.networkType;
            this.period = builder.period;
            this.protocolType = builder.protocolType;
            this.resourceGroupId = builder.resourceGroupId;
            this.restoreTime = builder.restoreTime;
            this.secondaryZoneId = builder.secondaryZoneId;
            this.securityIpArray = builder.securityIpArray;
            this.srcDbInstanceId = builder.srcDbInstanceId;
            this.storageEngine = builder.storageEngine;
            this.storageType = builder.storageType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty>)builder.tags;
            this.tdeStatus = builder.tdeStatus;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getConfigServer() {
            return this.configServer;
        }

        @Override
        public final java.lang.Object getMongos() {
            return this.mongos;
        }

        @Override
        public final java.lang.Object getReplicaSet() {
            return this.replicaSet;
        }

        @Override
        public final java.lang.Object getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getHiddenZoneId() {
            return this.hiddenZoneId;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRestoreTime() {
            return this.restoreTime;
        }

        @Override
        public final java.lang.Object getSecondaryZoneId() {
            return this.secondaryZoneId;
        }

        @Override
        public final java.lang.Object getSecurityIpArray() {
            return this.securityIpArray;
        }

        @Override
        public final java.lang.Object getSrcDbInstanceId() {
            return this.srcDbInstanceId;
        }

        @Override
        public final java.lang.Object getStorageEngine() {
            return this.storageEngine;
        }

        @Override
        public final java.lang.Object getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTdeStatus() {
            return this.tdeStatus;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("configServer", om.valueToTree(this.getConfigServer()));
            data.set("mongos", om.valueToTree(this.getMongos()));
            data.set("replicaSet", om.valueToTree(this.getReplicaSet()));
            if (this.getAccountPassword() != null) {
                data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getHiddenZoneId() != null) {
                data.set("hiddenZoneId", om.valueToTree(this.getHiddenZoneId()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getProtocolType() != null) {
                data.set("protocolType", om.valueToTree(this.getProtocolType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestoreTime() != null) {
                data.set("restoreTime", om.valueToTree(this.getRestoreTime()));
            }
            if (this.getSecondaryZoneId() != null) {
                data.set("secondaryZoneId", om.valueToTree(this.getSecondaryZoneId()));
            }
            if (this.getSecurityIpArray() != null) {
                data.set("securityIpArray", om.valueToTree(this.getSecurityIpArray()));
            }
            if (this.getSrcDbInstanceId() != null) {
                data.set("srcDbInstanceId", om.valueToTree(this.getSrcDbInstanceId()));
            }
            if (this.getStorageEngine() != null) {
                data.set("storageEngine", om.valueToTree(this.getStorageEngine()));
            }
            if (this.getStorageType() != null) {
                data.set("storageType", om.valueToTree(this.getStorageType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTdeStatus() != null) {
                data.set("tdeStatus", om.valueToTree(this.getTdeStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.ShardingInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ShardingInstanceProps.Jsii$Proxy that = (ShardingInstanceProps.Jsii$Proxy) o;

            if (!configServer.equals(that.configServer)) return false;
            if (!mongos.equals(that.mongos)) return false;
            if (!replicaSet.equals(that.replicaSet)) return false;
            if (this.accountPassword != null ? !this.accountPassword.equals(that.accountPassword) : that.accountPassword != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.hiddenZoneId != null ? !this.hiddenZoneId.equals(that.hiddenZoneId) : that.hiddenZoneId != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.protocolType != null ? !this.protocolType.equals(that.protocolType) : that.protocolType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restoreTime != null ? !this.restoreTime.equals(that.restoreTime) : that.restoreTime != null) return false;
            if (this.secondaryZoneId != null ? !this.secondaryZoneId.equals(that.secondaryZoneId) : that.secondaryZoneId != null) return false;
            if (this.securityIpArray != null ? !this.securityIpArray.equals(that.securityIpArray) : that.securityIpArray != null) return false;
            if (this.srcDbInstanceId != null ? !this.srcDbInstanceId.equals(that.srcDbInstanceId) : that.srcDbInstanceId != null) return false;
            if (this.storageEngine != null ? !this.storageEngine.equals(that.storageEngine) : that.storageEngine != null) return false;
            if (this.storageType != null ? !this.storageType.equals(that.storageType) : that.storageType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tdeStatus != null ? !this.tdeStatus.equals(that.tdeStatus) : that.tdeStatus != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configServer.hashCode();
            result = 31 * result + (this.mongos.hashCode());
            result = 31 * result + (this.replicaSet.hashCode());
            result = 31 * result + (this.accountPassword != null ? this.accountPassword.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.hiddenZoneId != null ? this.hiddenZoneId.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.protocolType != null ? this.protocolType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restoreTime != null ? this.restoreTime.hashCode() : 0);
            result = 31 * result + (this.secondaryZoneId != null ? this.secondaryZoneId.hashCode() : 0);
            result = 31 * result + (this.securityIpArray != null ? this.securityIpArray.hashCode() : 0);
            result = 31 * result + (this.srcDbInstanceId != null ? this.srcDbInstanceId.hashCode() : 0);
            result = 31 * result + (this.storageEngine != null ? this.storageEngine.hashCode() : 0);
            result = 31 * result + (this.storageType != null ? this.storageType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tdeStatus != null ? this.tdeStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
