package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a `ALIYUN::MONGODB::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:43.664Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceClass();

    /**
     * Property dbInstanceStorage: Database instance storage size.
     * <p>
     * MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorage();

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
     * Property backupId: Specific backup set Id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupId() {
        return null;
    }

    /**
     * Property businessInfo: The business information.
     * <p>
     * It is an additional parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBusinessInfo() {
        return null;
    }

    /**
     * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property couponNo: The coupon code.
     * <p>
     * Default value:youhuiquan_promotion_option_id_for_blank.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCouponNo() {
        return null;
    }

    /**
     * Property databaseNames: The name of the database.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseNames() {
        return null;
    }

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
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
     * Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReadonlyReplicas() {
        return null;
    }

    /**
     * Property replicationFactor: The number of nodes in the replica set.
     * <p>
     * Allowed values: [3, 5, 7], default to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReplicationFactor() {
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
     * Property securityGroupId: The ID of the ECS security group.
     * <p>
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
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
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> getTags() {
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
     * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
     * <p>
     * If set to:
     * <p>
     * <ul>
     * <li>true: enables password free.</li>
     * <li>false: disables password free.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcPasswordFree() {
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
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        private java.lang.Object dbInstanceClass;
        private java.lang.Object dbInstanceStorage;
        private java.lang.Object accountPassword;
        private java.lang.Object autoRenew;
        private java.lang.Object backupId;
        private java.lang.Object businessInfo;
        private java.lang.Object chargeType;
        private java.lang.Object couponNo;
        private java.lang.Object databaseNames;
        private java.lang.Object dbInstanceDescription;
        private java.lang.Object engineVersion;
        private java.lang.Object networkType;
        private java.lang.Object period;
        private java.lang.Object readonlyReplicas;
        private java.lang.Object replicationFactor;
        private java.lang.Object resourceGroupId;
        private java.lang.Object restoreTime;
        private java.lang.Object securityGroupId;
        private java.lang.Object securityIpArray;
        private java.lang.Object srcDbInstanceId;
        private java.lang.Object storageEngine;
        private java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> tags;
        private java.lang.Object tdeStatus;
        private java.lang.Object vpcId;
        private java.lang.Object vpcPasswordFree;
        private java.lang.Object vSwitchId;
        private java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size. This parameter is required.
         *                          MongoDB is [5,3000], increased every 10 GB, Unit in GB
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size. This parameter is required.
         *                          MongoDB is [5,3000], increased every 10 GB, Unit in GB
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         *                  Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         *                  Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBackupId}
         * @param backupId Property backupId: Specific backup set Id.
         * @return {@code this}
         */
        public Builder backupId(java.lang.String backupId) {
            this.backupId = backupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBackupId}
         * @param backupId Property backupId: Specific backup set Id.
         * @return {@code this}
         */
        public Builder backupId(com.aliyun.ros.cdk.core.IResolvable backupId) {
            this.backupId = backupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBusinessInfo}
         * @param businessInfo Property businessInfo: The business information.
         *                     It is an additional parameter.
         * @return {@code this}
         */
        public Builder businessInfo(java.lang.String businessInfo) {
            this.businessInfo = businessInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBusinessInfo}
         * @param businessInfo Property businessInfo: The business information.
         *                     It is an additional parameter.
         * @return {@code this}
         */
        public Builder businessInfo(com.aliyun.ros.cdk.core.IResolvable businessInfo) {
            this.businessInfo = businessInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCouponNo}
         * @param couponNo Property couponNo: The coupon code.
         *                 Default value:youhuiquan_promotion_option_id_for_blank.
         * @return {@code this}
         */
        public Builder couponNo(java.lang.String couponNo) {
            this.couponNo = couponNo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCouponNo}
         * @param couponNo Property couponNo: The coupon code.
         *                 Default value:youhuiquan_promotion_option_id_for_blank.
         * @return {@code this}
         */
        public Builder couponNo(com.aliyun.ros.cdk.core.IResolvable couponNo) {
            this.couponNo = couponNo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatabaseNames}
         * @param databaseNames Property databaseNames: The name of the database.
         * @return {@code this}
         */
        public Builder databaseNames(java.lang.String databaseNames) {
            this.databaseNames = databaseNames;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatabaseNames}
         * @param databaseNames Property databaseNames: The name of the database.
         * @return {@code this}
         */
        public Builder databaseNames(com.aliyun.ros.cdk.core.IResolvable databaseNames) {
            this.databaseNames = databaseNames;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetworkType}
         * @param networkType Property networkType: The instance network type.
         *                    Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetworkType}
         * @param networkType Property networkType: The instance network type.
         *                    Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getReadonlyReplicas}
         * @param readonlyReplicas Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
         * @return {@code this}
         */
        public Builder readonlyReplicas(java.lang.Number readonlyReplicas) {
            this.readonlyReplicas = readonlyReplicas;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getReadonlyReplicas}
         * @param readonlyReplicas Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
         * @return {@code this}
         */
        public Builder readonlyReplicas(com.aliyun.ros.cdk.core.IResolvable readonlyReplicas) {
            this.readonlyReplicas = readonlyReplicas;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getReplicationFactor}
         * @param replicationFactor Property replicationFactor: The number of nodes in the replica set.
         *                          Allowed values: [3, 5, 7], default to 3.
         * @return {@code this}
         */
        public Builder replicationFactor(java.lang.Number replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getReplicationFactor}
         * @param replicationFactor Property replicationFactor: The number of nodes in the replica set.
         *                          Allowed values: [3, 5, 7], default to 3.
         * @return {@code this}
         */
        public Builder replicationFactor(com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The time to restore the cloned instance to.
         *                    The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.String restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The time to restore the cloned instance to.
         *                    The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
         * @return {@code this}
         */
        public Builder restoreTime(com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security group.
         *                        Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
         *                        You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security group.
         *                        Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
         *                        You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSecurityIpArray}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove.
         * @return {@code this}
         */
        public Builder securityIpArray(java.lang.String securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSecurityIpArray}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove.
         * @return {@code this}
         */
        public Builder securityIpArray(com.aliyun.ros.cdk.core.IResolvable securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSrcDbInstanceId}
         * @param srcDbInstanceId Property srcDbInstanceId: Create an instance of the backup set based on an instance.
         * @return {@code this}
         */
        public Builder srcDbInstanceId(java.lang.String srcDbInstanceId) {
            this.srcDbInstanceId = srcDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSrcDbInstanceId}
         * @param srcDbInstanceId Property srcDbInstanceId: Create an instance of the backup set based on an instance.
         * @return {@code this}
         */
        public Builder srcDbInstanceId(com.aliyun.ros.cdk.core.IResolvable srcDbInstanceId) {
            this.srcDbInstanceId = srcDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStorageEngine}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
         * @return {@code this}
         */
        public Builder storageEngine(java.lang.String storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStorageEngine}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
         * @return {@code this}
         */
        public Builder storageEngine(com.aliyun.ros.cdk.core.IResolvable storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTdeStatus}
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
         * Sets the value of {@link InstanceProps#getTdeStatus}
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
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcPasswordFree}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         *                        If set to:
         *                        <p>
         *                        <ul>
         *                        <li>true: enables password free.</li>
         *                        <li>false: disables password free.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder vpcPasswordFree(java.lang.Boolean vpcPasswordFree) {
            this.vpcPasswordFree = vpcPasswordFree;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcPasswordFree}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         *                        If set to:
         *                        <p>
         *                        <ul>
         *                        <li>true: enables password free.</li>
         *                        <li>false: disables password free.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder vpcPasswordFree(com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.vpcPasswordFree = vpcPasswordFree;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: On which zone to create the instance.
         *               If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
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
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(dbInstanceClass, dbInstanceStorage, accountPassword, autoRenew, backupId, businessInfo, chargeType, couponNo, databaseNames, dbInstanceDescription, engineVersion, networkType, period, readonlyReplicas, replicationFactor, resourceGroupId, restoreTime, securityGroupId, securityIpArray, srcDbInstanceId, storageEngine, tags, tdeStatus, vpcId, vpcPasswordFree, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceStorage;
        private final java.lang.Object accountPassword;
        private final java.lang.Object autoRenew;
        private final java.lang.Object backupId;
        private final java.lang.Object businessInfo;
        private final java.lang.Object chargeType;
        private final java.lang.Object couponNo;
        private final java.lang.Object databaseNames;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object engineVersion;
        private final java.lang.Object networkType;
        private final java.lang.Object period;
        private final java.lang.Object readonlyReplicas;
        private final java.lang.Object replicationFactor;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restoreTime;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityIpArray;
        private final java.lang.Object srcDbInstanceId;
        private final java.lang.Object storageEngine;
        private final java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> tags;
        private final java.lang.Object tdeStatus;
        private final java.lang.Object vpcId;
        private final java.lang.Object vpcPasswordFree;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupId = software.amazon.jsii.Kernel.get(this, "backupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.businessInfo = software.amazon.jsii.Kernel.get(this, "businessInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.couponNo = software.amazon.jsii.Kernel.get(this, "couponNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseNames = software.amazon.jsii.Kernel.get(this, "databaseNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.readonlyReplicas = software.amazon.jsii.Kernel.get(this, "readonlyReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicationFactor = software.amazon.jsii.Kernel.get(this, "replicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreTime = software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpArray = software.amazon.jsii.Kernel.get(this, "securityIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.srcDbInstanceId = software.amazon.jsii.Kernel.get(this, "srcDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageEngine = software.amazon.jsii.Kernel.get(this, "storageEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty.class)));
            this.tdeStatus = software.amazon.jsii.Kernel.get(this, "tdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcPasswordFree = software.amazon.jsii.Kernel.get(this, "vpcPasswordFree", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object dbInstanceClass, final java.lang.Object dbInstanceStorage, final java.lang.Object accountPassword, final java.lang.Object autoRenew, final java.lang.Object backupId, final java.lang.Object businessInfo, final java.lang.Object chargeType, final java.lang.Object couponNo, final java.lang.Object databaseNames, final java.lang.Object dbInstanceDescription, final java.lang.Object engineVersion, final java.lang.Object networkType, final java.lang.Object period, final java.lang.Object readonlyReplicas, final java.lang.Object replicationFactor, final java.lang.Object resourceGroupId, final java.lang.Object restoreTime, final java.lang.Object securityGroupId, final java.lang.Object securityIpArray, final java.lang.Object srcDbInstanceId, final java.lang.Object storageEngine, final java.util.List<? extends com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> tags, final java.lang.Object tdeStatus, final java.lang.Object vpcId, final java.lang.Object vpcPasswordFree, final java.lang.Object vSwitchId, final java.lang.Object zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceClass = java.util.Objects.requireNonNull(dbInstanceClass, "dbInstanceClass is required");
            this.dbInstanceStorage = java.util.Objects.requireNonNull(dbInstanceStorage, "dbInstanceStorage is required");
            this.accountPassword = accountPassword;
            this.autoRenew = autoRenew;
            this.backupId = backupId;
            this.businessInfo = businessInfo;
            this.chargeType = chargeType;
            this.couponNo = couponNo;
            this.databaseNames = databaseNames;
            this.dbInstanceDescription = dbInstanceDescription;
            this.engineVersion = engineVersion;
            this.networkType = networkType;
            this.period = period;
            this.readonlyReplicas = readonlyReplicas;
            this.replicationFactor = replicationFactor;
            this.resourceGroupId = resourceGroupId;
            this.restoreTime = restoreTime;
            this.securityGroupId = securityGroupId;
            this.securityIpArray = securityIpArray;
            this.srcDbInstanceId = srcDbInstanceId;
            this.storageEngine = storageEngine;
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty>)tags;
            this.tdeStatus = tdeStatus;
            this.vpcId = vpcId;
            this.vpcPasswordFree = vpcPasswordFree;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceStorage() {
            return this.dbInstanceStorage;
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
        public final java.lang.Object getBackupId() {
            return this.backupId;
        }

        @Override
        public final java.lang.Object getBusinessInfo() {
            return this.businessInfo;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getCouponNo() {
            return this.couponNo;
        }

        @Override
        public final java.lang.Object getDatabaseNames() {
            return this.databaseNames;
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
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getReadonlyReplicas() {
            return this.readonlyReplicas;
        }

        @Override
        public final java.lang.Object getReplicationFactor() {
            return this.replicationFactor;
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
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
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
        public final java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> getTags() {
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
        public final java.lang.Object getVpcPasswordFree() {
            return this.vpcPasswordFree;
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

            data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            if (this.getAccountPassword() != null) {
                data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBackupId() != null) {
                data.set("backupId", om.valueToTree(this.getBackupId()));
            }
            if (this.getBusinessInfo() != null) {
                data.set("businessInfo", om.valueToTree(this.getBusinessInfo()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getCouponNo() != null) {
                data.set("couponNo", om.valueToTree(this.getCouponNo()));
            }
            if (this.getDatabaseNames() != null) {
                data.set("databaseNames", om.valueToTree(this.getDatabaseNames()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getReadonlyReplicas() != null) {
                data.set("readonlyReplicas", om.valueToTree(this.getReadonlyReplicas()));
            }
            if (this.getReplicationFactor() != null) {
                data.set("replicationFactor", om.valueToTree(this.getReplicationFactor()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestoreTime() != null) {
                data.set("restoreTime", om.valueToTree(this.getRestoreTime()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTdeStatus() != null) {
                data.set("tdeStatus", om.valueToTree(this.getTdeStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVpcPasswordFree() != null) {
                data.set("vpcPasswordFree", om.valueToTree(this.getVpcPasswordFree()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!dbInstanceClass.equals(that.dbInstanceClass)) return false;
            if (!dbInstanceStorage.equals(that.dbInstanceStorage)) return false;
            if (this.accountPassword != null ? !this.accountPassword.equals(that.accountPassword) : that.accountPassword != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.backupId != null ? !this.backupId.equals(that.backupId) : that.backupId != null) return false;
            if (this.businessInfo != null ? !this.businessInfo.equals(that.businessInfo) : that.businessInfo != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.couponNo != null ? !this.couponNo.equals(that.couponNo) : that.couponNo != null) return false;
            if (this.databaseNames != null ? !this.databaseNames.equals(that.databaseNames) : that.databaseNames != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.readonlyReplicas != null ? !this.readonlyReplicas.equals(that.readonlyReplicas) : that.readonlyReplicas != null) return false;
            if (this.replicationFactor != null ? !this.replicationFactor.equals(that.replicationFactor) : that.replicationFactor != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restoreTime != null ? !this.restoreTime.equals(that.restoreTime) : that.restoreTime != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityIpArray != null ? !this.securityIpArray.equals(that.securityIpArray) : that.securityIpArray != null) return false;
            if (this.srcDbInstanceId != null ? !this.srcDbInstanceId.equals(that.srcDbInstanceId) : that.srcDbInstanceId != null) return false;
            if (this.storageEngine != null ? !this.storageEngine.equals(that.storageEngine) : that.storageEngine != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tdeStatus != null ? !this.tdeStatus.equals(that.tdeStatus) : that.tdeStatus != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vpcPasswordFree != null ? !this.vpcPasswordFree.equals(that.vpcPasswordFree) : that.vpcPasswordFree != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceClass.hashCode();
            result = 31 * result + (this.dbInstanceStorage.hashCode());
            result = 31 * result + (this.accountPassword != null ? this.accountPassword.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.backupId != null ? this.backupId.hashCode() : 0);
            result = 31 * result + (this.businessInfo != null ? this.businessInfo.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.couponNo != null ? this.couponNo.hashCode() : 0);
            result = 31 * result + (this.databaseNames != null ? this.databaseNames.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.readonlyReplicas != null ? this.readonlyReplicas.hashCode() : 0);
            result = 31 * result + (this.replicationFactor != null ? this.replicationFactor.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restoreTime != null ? this.restoreTime.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpArray != null ? this.securityIpArray.hashCode() : 0);
            result = 31 * result + (this.srcDbInstanceId != null ? this.srcDbInstanceId.hashCode() : 0);
            result = 31 * result + (this.storageEngine != null ? this.storageEngine.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tdeStatus != null ? this.tdeStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vpcPasswordFree != null ? this.vpcPasswordFree.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
