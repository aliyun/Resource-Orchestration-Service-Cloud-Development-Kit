package com.aliyun.ros.cdk.redis;

/**
 * Properties for defining a <code>PrepayInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-prepayinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.510Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.PrepayInstanceProps")
@software.amazon.jsii.Jsii.Proxy(PrepayInstanceProps.Jsii$Proxy.class)
public interface PrepayInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property autoPay: Indicates whether automatic payment is enabled.
     * <p>
     * Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default is False
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoRenewDuration: The auto-renewal period.
     * <p>
     * Valid values: 1 to 12.
     * When the instance is about to expire, the instance is automatically renewed
     * based on the number of months specified by this parameter.
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewDuration() {
        return null;
    }

    /**
     * Property backupPolicy: Backup policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicy() {
        return null;
    }

    /**
     * Property connections: Connection address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnections() {
        return null;
    }

    /**
     * Property deletionForce: Whether destroy instance when it is in recycle.
     * <p>
     * Default is false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the instance.
     * <p>
     * Default is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     * Property engineVersion: Engine version.
     * <p>
     * Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     * Property evictionPolicy: The eviction policy of cache data storage.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEvictionPolicy() {
        return null;
    }

    /**
     * Property instanceClass: Redis instance type.
     * <p>
     * Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceClass() {
        return null;
    }

    /**
     * Property instanceMaintainTime: Instance maintain time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceMaintainTime() {
        return null;
    }

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property nodeType: The type of node.
     * <p>
     * Valid value:
     * <p>
     * <ul>
     * <li><strong>STAND_ALONE</strong></li>
     * <li><strong>MASTER_SLAVE</strong></li>
     * <li><strong>double</strong></li>
     * <li><strong>single</strong></li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeType() {
        return null;
    }

    /**
     * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the subscription duration.
     * <p>
     * Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property productType: Product type.
     * <p>
     * Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductType() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property secondaryZoneId: The secondary zone ID of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryZoneId() {
        return null;
    }

    /**
     * Property securityGroupId: The IDs of security groups.
     * <p>
     * Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property shardCount: The number of data nodes in the instance.
     * <p>
     * Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node.
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes.
     * For more information about the cluster architecture, see Cluster master-replica instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return null;
    }

    /**
     * Property sslEnabled: Modifies the SSL status.
     * <p>
     * Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslEnabled() {
        return null;
    }

    /**
     * Property tags: Tags to attach to redis.
     * <p>
     * Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property tairConfig: Tair config.
     * <p>
     * This parameter is available only if the InstanceClass parameter is start with tair.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTairConfig() {
        return null;
    }

    /**
     * Property vpcId: The VPC id to create ecs instance.
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
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The zone id of input region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrepayInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrepayInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrepayInstanceProps> {
        java.lang.Object autoPay;
        java.lang.Object autoRenewDuration;
        java.lang.Object backupPolicy;
        java.lang.Object connections;
        java.lang.Object deletionForce;
        java.lang.Object deletionProtection;
        java.lang.Object engineVersion;
        java.lang.Object evictionPolicy;
        java.lang.Object instanceClass;
        java.lang.Object instanceMaintainTime;
        java.lang.Object instanceName;
        java.lang.Object nodeType;
        java.lang.Object password;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object productType;
        java.lang.Object resourceGroupId;
        java.lang.Object secondaryZoneId;
        java.lang.Object securityGroupId;
        java.lang.Object shardCount;
        java.lang.Object sslEnabled;
        java.util.List<com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty> tags;
        java.lang.Object tairConfig;
        java.lang.Object vpcId;
        java.lang.Object vpcPasswordFree;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled.
         *                Valid values:
         *                false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         *                true: Automatic payment is enabled. The payment is automatically made.
         *                Default is False
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled.
         *                Valid values:
         *                false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         *                true: Automatic payment is enabled. The payment is automatically made.
         *                Default is False
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoRenewDuration}
         * @param autoRenewDuration Property autoRenewDuration: The auto-renewal period.
         *                          Valid values: 1 to 12.
         *                          When the instance is about to expire, the instance is automatically renewed
         *                          based on the number of months specified by this parameter.
         *                          Note This parameter is valid only when ChargeType is set to PrePaid.
         * @return {@code this}
         */
        public Builder autoRenewDuration(java.lang.Number autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoRenewDuration}
         * @param autoRenewDuration Property autoRenewDuration: The auto-renewal period.
         *                          Valid values: 1 to 12.
         *                          When the instance is about to expire, the instance is automatically renewed
         *                          based on the number of months specified by this parameter.
         *                          Note This parameter is valid only when ChargeType is set to PrePaid.
         * @return {@code this}
         */
        public Builder autoRenewDuration(com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getBackupPolicy}
         * @param backupPolicy Property backupPolicy: Backup policy.
         * @return {@code this}
         */
        public Builder backupPolicy(com.aliyun.ros.cdk.core.IResolvable backupPolicy) {
            this.backupPolicy = backupPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getBackupPolicy}
         * @param backupPolicy Property backupPolicy: Backup policy.
         * @return {@code this}
         */
        public Builder backupPolicy(com.aliyun.ros.cdk.redis.RosPrepayInstance.BackupPolicyProperty backupPolicy) {
            this.backupPolicy = backupPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getConnections}
         * @param connections Property connections: Connection address.
         * @return {@code this}
         */
        public Builder connections(com.aliyun.ros.cdk.core.IResolvable connections) {
            this.connections = connections;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getConnections}
         * @param connections Property connections: Connection address.
         * @return {@code this}
         */
        public Builder connections(com.aliyun.ros.cdk.redis.RosPrepayInstance.ConnectionsProperty connections) {
            this.connections = connections;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether destroy instance when it is in recycle.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether destroy instance when it is in recycle.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the instance.
         *                           Default is false.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the instance.
         *                           Default is false.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Engine version.
         *                      Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Engine version.
         *                      Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getEvictionPolicy}
         * @param evictionPolicy Property evictionPolicy: The eviction policy of cache data storage.
         * @return {@code this}
         */
        public Builder evictionPolicy(java.lang.String evictionPolicy) {
            this.evictionPolicy = evictionPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getEvictionPolicy}
         * @param evictionPolicy Property evictionPolicy: The eviction policy of cache data storage.
         * @return {@code this}
         */
        public Builder evictionPolicy(com.aliyun.ros.cdk.core.IResolvable evictionPolicy) {
            this.evictionPolicy = evictionPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceClass}
         * @param instanceClass Property instanceClass: Redis instance type.
         *                      Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
         * @return {@code this}
         */
        public Builder instanceClass(java.lang.String instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceClass}
         * @param instanceClass Property instanceClass: Redis instance type.
         *                      Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
         * @return {@code this}
         */
        public Builder instanceClass(com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceMaintainTime}
         * @param instanceMaintainTime Property instanceMaintainTime: Instance maintain time.
         * @return {@code this}
         */
        public Builder instanceMaintainTime(com.aliyun.ros.cdk.core.IResolvable instanceMaintainTime) {
            this.instanceMaintainTime = instanceMaintainTime;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceMaintainTime}
         * @param instanceMaintainTime Property instanceMaintainTime: Instance maintain time.
         * @return {@code this}
         */
        public Builder instanceMaintainTime(com.aliyun.ros.cdk.redis.RosPrepayInstance.InstanceMaintainTimeProperty instanceMaintainTime) {
            this.instanceMaintainTime = instanceMaintainTime;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getNodeType}
         * @param nodeType Property nodeType: The type of node.
         *                 Valid value:
         *                 <p>
         *                 <ul>
         *                 <li><strong>STAND_ALONE</strong></li>
         *                 <li><strong>MASTER_SLAVE</strong></li>
         *                 <li><strong>double</strong></li>
         *                 <li><strong>single</strong></li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder nodeType(java.lang.String nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getNodeType}
         * @param nodeType Property nodeType: The type of node.
         *                 Valid value:
         *                 <p>
         *                 <ul>
         *                 <li><strong>STAND_ALONE</strong></li>
         *                 <li><strong>MASTER_SLAVE</strong></li>
         *                 <li><strong>double</strong></li>
         *                 <li><strong>single</strong></li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder nodeType(com.aliyun.ros.cdk.core.IResolvable nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPassword}
         * @param password Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPassword}
         * @param password Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriod}
         * @param period Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriod}
         * @param period Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getProductType}
         * @param productType Property productType: Product type.
         *                    Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
         * @return {@code this}
         */
        public Builder productType(java.lang.String productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getProductType}
         * @param productType Property productType: Product type.
         *                    Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
         * @return {@code this}
         */
        public Builder productType(com.aliyun.ros.cdk.core.IResolvable productType) {
            this.productType = productType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecondaryZoneId}
         * @param secondaryZoneId Property secondaryZoneId: The secondary zone ID of the instance.
         * @return {@code this}
         */
        public Builder secondaryZoneId(java.lang.String secondaryZoneId) {
            this.secondaryZoneId = secondaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecondaryZoneId}
         * @param secondaryZoneId Property secondaryZoneId: The secondary zone ID of the instance.
         * @return {@code this}
         */
        public Builder secondaryZoneId(com.aliyun.ros.cdk.core.IResolvable secondaryZoneId) {
            this.secondaryZoneId = secondaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The IDs of security groups.
         *                        Separate multiple security group IDs with commas (,) and up to 10 can be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The IDs of security groups.
         *                        Separate multiple security group IDs with commas (,) and up to 10 can be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getShardCount}
         * @param shardCount Property shardCount: The number of data nodes in the instance.
         *                   Default value: 1. Valid values:
         *                   1: You can create an instance in the standard architecture that contains only a single data node.
         *                   For more information about the standard architecture, see Cluster master-replica instances.
         *                   2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes.
         *                   For more information about the cluster architecture, see Cluster master-replica instances.
         * @return {@code this}
         */
        public Builder shardCount(java.lang.Number shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getShardCount}
         * @param shardCount Property shardCount: The number of data nodes in the instance.
         *                   Default value: 1. Valid values:
         *                   1: You can create an instance in the standard architecture that contains only a single data node.
         *                   For more information about the standard architecture, see Cluster master-replica instances.
         *                   2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes.
         *                   For more information about the cluster architecture, see Cluster master-replica instances.
         * @return {@code this}
         */
        public Builder shardCount(com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSslEnabled}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status.
         *                   Valid values:
         *                   Disable: disables SSL encryption.
         *                   Enable: enables SSL encryption.
         *                   Update: updates the SSL certificate.
         * @return {@code this}
         */
        public Builder sslEnabled(java.lang.String sslEnabled) {
            this.sslEnabled = sslEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSslEnabled}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status.
         *                   Valid values:
         *                   Disable: disables SSL encryption.
         *                   Enable: enables SSL encryption.
         *                   Update: updates the SSL certificate.
         * @return {@code this}
         */
        public Builder sslEnabled(com.aliyun.ros.cdk.core.IResolvable sslEnabled) {
            this.sslEnabled = sslEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getTags}
         * @param tags Property tags: Tags to attach to redis.
         *             Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getTairConfig}
         * @param tairConfig Property tairConfig: Tair config.
         *                   This parameter is available only if the InstanceClass parameter is start with tair.
         * @return {@code this}
         */
        public Builder tairConfig(com.aliyun.ros.cdk.core.IResolvable tairConfig) {
            this.tairConfig = tairConfig;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getTairConfig}
         * @param tairConfig Property tairConfig: Tair config.
         *                   This parameter is available only if the InstanceClass parameter is start with tair.
         * @return {@code this}
         */
        public Builder tairConfig(com.aliyun.ros.cdk.redis.RosPrepayInstance.TairConfigProperty tairConfig) {
            this.tairConfig = tairConfig;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create ecs instance.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create ecs instance.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVpcPasswordFree}
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
         * Sets the value of {@link PrepayInstanceProps#getVpcPasswordFree}
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
         * Sets the value of {@link PrepayInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone id of input region.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone id of input region.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrepayInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrepayInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrepayInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrepayInstanceProps {
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenewDuration;
        private final java.lang.Object backupPolicy;
        private final java.lang.Object connections;
        private final java.lang.Object deletionForce;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object engineVersion;
        private final java.lang.Object evictionPolicy;
        private final java.lang.Object instanceClass;
        private final java.lang.Object instanceMaintainTime;
        private final java.lang.Object instanceName;
        private final java.lang.Object nodeType;
        private final java.lang.Object password;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object productType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object secondaryZoneId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object shardCount;
        private final java.lang.Object sslEnabled;
        private final java.util.List<com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty> tags;
        private final java.lang.Object tairConfig;
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
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewDuration = software.amazon.jsii.Kernel.get(this, "autoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupPolicy = software.amazon.jsii.Kernel.get(this, "backupPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connections = software.amazon.jsii.Kernel.get(this, "connections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.evictionPolicy = software.amazon.jsii.Kernel.get(this, "evictionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceClass = software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceMaintainTime = software.amazon.jsii.Kernel.get(this, "instanceMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeType = software.amazon.jsii.Kernel.get(this, "nodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productType = software.amazon.jsii.Kernel.get(this, "productType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryZoneId = software.amazon.jsii.Kernel.get(this, "secondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shardCount = software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslEnabled = software.amazon.jsii.Kernel.get(this, "sslEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty.class)));
            this.tairConfig = software.amazon.jsii.Kernel.get(this, "tairConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcPasswordFree = software.amazon.jsii.Kernel.get(this, "vpcPasswordFree", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoPay = builder.autoPay;
            this.autoRenewDuration = builder.autoRenewDuration;
            this.backupPolicy = builder.backupPolicy;
            this.connections = builder.connections;
            this.deletionForce = builder.deletionForce;
            this.deletionProtection = builder.deletionProtection;
            this.engineVersion = builder.engineVersion;
            this.evictionPolicy = builder.evictionPolicy;
            this.instanceClass = builder.instanceClass;
            this.instanceMaintainTime = builder.instanceMaintainTime;
            this.instanceName = builder.instanceName;
            this.nodeType = builder.nodeType;
            this.password = builder.password;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.productType = builder.productType;
            this.resourceGroupId = builder.resourceGroupId;
            this.secondaryZoneId = builder.secondaryZoneId;
            this.securityGroupId = builder.securityGroupId;
            this.shardCount = builder.shardCount;
            this.sslEnabled = builder.sslEnabled;
            this.tags = (java.util.List<com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty>)builder.tags;
            this.tairConfig = builder.tairConfig;
            this.vpcId = builder.vpcId;
            this.vpcPasswordFree = builder.vpcPasswordFree;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoRenewDuration() {
            return this.autoRenewDuration;
        }

        @Override
        public final java.lang.Object getBackupPolicy() {
            return this.backupPolicy;
        }

        @Override
        public final java.lang.Object getConnections() {
            return this.connections;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getEvictionPolicy() {
            return this.evictionPolicy;
        }

        @Override
        public final java.lang.Object getInstanceClass() {
            return this.instanceClass;
        }

        @Override
        public final java.lang.Object getInstanceMaintainTime() {
            return this.instanceMaintainTime;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getNodeType() {
            return this.nodeType;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getProductType() {
            return this.productType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecondaryZoneId() {
            return this.secondaryZoneId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getShardCount() {
            return this.shardCount;
        }

        @Override
        public final java.lang.Object getSslEnabled() {
            return this.sslEnabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTairConfig() {
            return this.tairConfig;
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

            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenewDuration() != null) {
                data.set("autoRenewDuration", om.valueToTree(this.getAutoRenewDuration()));
            }
            if (this.getBackupPolicy() != null) {
                data.set("backupPolicy", om.valueToTree(this.getBackupPolicy()));
            }
            if (this.getConnections() != null) {
                data.set("connections", om.valueToTree(this.getConnections()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getEvictionPolicy() != null) {
                data.set("evictionPolicy", om.valueToTree(this.getEvictionPolicy()));
            }
            if (this.getInstanceClass() != null) {
                data.set("instanceClass", om.valueToTree(this.getInstanceClass()));
            }
            if (this.getInstanceMaintainTime() != null) {
                data.set("instanceMaintainTime", om.valueToTree(this.getInstanceMaintainTime()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getNodeType() != null) {
                data.set("nodeType", om.valueToTree(this.getNodeType()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getProductType() != null) {
                data.set("productType", om.valueToTree(this.getProductType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecondaryZoneId() != null) {
                data.set("secondaryZoneId", om.valueToTree(this.getSecondaryZoneId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getShardCount() != null) {
                data.set("shardCount", om.valueToTree(this.getShardCount()));
            }
            if (this.getSslEnabled() != null) {
                data.set("sslEnabled", om.valueToTree(this.getSslEnabled()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTairConfig() != null) {
                data.set("tairConfig", om.valueToTree(this.getTairConfig()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.PrepayInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrepayInstanceProps.Jsii$Proxy that = (PrepayInstanceProps.Jsii$Proxy) o;

            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenewDuration != null ? !this.autoRenewDuration.equals(that.autoRenewDuration) : that.autoRenewDuration != null) return false;
            if (this.backupPolicy != null ? !this.backupPolicy.equals(that.backupPolicy) : that.backupPolicy != null) return false;
            if (this.connections != null ? !this.connections.equals(that.connections) : that.connections != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.evictionPolicy != null ? !this.evictionPolicy.equals(that.evictionPolicy) : that.evictionPolicy != null) return false;
            if (this.instanceClass != null ? !this.instanceClass.equals(that.instanceClass) : that.instanceClass != null) return false;
            if (this.instanceMaintainTime != null ? !this.instanceMaintainTime.equals(that.instanceMaintainTime) : that.instanceMaintainTime != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.nodeType != null ? !this.nodeType.equals(that.nodeType) : that.nodeType != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.productType != null ? !this.productType.equals(that.productType) : that.productType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.secondaryZoneId != null ? !this.secondaryZoneId.equals(that.secondaryZoneId) : that.secondaryZoneId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.shardCount != null ? !this.shardCount.equals(that.shardCount) : that.shardCount != null) return false;
            if (this.sslEnabled != null ? !this.sslEnabled.equals(that.sslEnabled) : that.sslEnabled != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tairConfig != null ? !this.tairConfig.equals(that.tairConfig) : that.tairConfig != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vpcPasswordFree != null ? !this.vpcPasswordFree.equals(that.vpcPasswordFree) : that.vpcPasswordFree != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoPay != null ? this.autoPay.hashCode() : 0;
            result = 31 * result + (this.autoRenewDuration != null ? this.autoRenewDuration.hashCode() : 0);
            result = 31 * result + (this.backupPolicy != null ? this.backupPolicy.hashCode() : 0);
            result = 31 * result + (this.connections != null ? this.connections.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.evictionPolicy != null ? this.evictionPolicy.hashCode() : 0);
            result = 31 * result + (this.instanceClass != null ? this.instanceClass.hashCode() : 0);
            result = 31 * result + (this.instanceMaintainTime != null ? this.instanceMaintainTime.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.nodeType != null ? this.nodeType.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.productType != null ? this.productType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.secondaryZoneId != null ? this.secondaryZoneId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.shardCount != null ? this.shardCount.hashCode() : 0);
            result = 31 * result + (this.sslEnabled != null ? this.sslEnabled.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tairConfig != null ? this.tairConfig.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vpcPasswordFree != null ? this.vpcPasswordFree.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
