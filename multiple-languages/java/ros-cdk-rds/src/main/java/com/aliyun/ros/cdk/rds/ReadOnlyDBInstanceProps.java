package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>ReadOnlyDBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-readonlydbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.873Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(ReadOnlyDBInstanceProps.Jsii$Proxy.class)
public interface ReadOnlyDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceClass: The type of the instance.
     * <p>
     * For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceClass();

    /**
     * Property dbInstanceId: The ID of the master instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property dbInstanceStorage: The storage space of the instance.
     * <p>
     * Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorage();

    /**
     * Property engineVersion: The version of the database.
     * <p>
     * The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property zoneId: The ID of the zone.
     * <p>
     * You can call the DescribeRegions API operation to view the latest zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal.
     * <p>
     * Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property category: The RDS edition of the read-only instance.
     * <p>
     * Valid values:
     * Basic: Basic Edition.
     * HighAvailability: High-availability Edition. This is the default value.
     * AlwaysOn: Cluster Edition.
     * Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property dbInstanceStorageType: The type of storage media that is used by the instance.
     * <p>
     * Valid values:
     * local_ssd: local SSDs
     * cloud_ssd: standard SSDs
     * cloud_essd: ESSDs of performance level 1 (PL1)
     * cloud_essd2: ESSDs of PL2
     * cloud_essd3: ESSDs of PL3
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorageType() {
        return null;
    }

    /**
     * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs.
     * <p>
     * This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance.
     * <p>
     * Valid values:- <strong>true</strong>: enables the feature.- <strong>false</strong> (default): disables the feature.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     * Property payType: The billing method.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property period: The subscription duration.
     * <p>
     * Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     * When PeriodType is Year, it could be from 1 to 5.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodType: Charge period for created instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodType() {
        return null;
    }

    /**
     * Property privateIpAddress: The private IP address of the read-only instance.
     * <p>
     * It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: The tags of an instance.
     * <p>
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides.
     * <p>
     * This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForMaster() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ReadOnlyDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ReadOnlyDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ReadOnlyDBInstanceProps> {
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceId;
        java.lang.Object dbInstanceStorage;
        java.lang.Object engineVersion;
        java.lang.Object zoneId;
        java.lang.Object autoRenew;
        java.lang.Object category;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceStorageType;
        java.lang.Object dedicatedHostGroupId;
        java.lang.Object deletionProtection;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodType;
        java.lang.Object privateIpAddress;
        java.lang.Object resourceGroupId;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object targetDedicatedHostIdForMaster;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The type of the instance. This parameter is required.
         *                        For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The type of the instance. This parameter is required.
         *                        For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the master instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the master instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage space of the instance. This parameter is required.
         *                          Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage space of the instance. This parameter is required.
         *                          Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database. This parameter is required.
         *                      The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database. This parameter is required.
         *                      The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         *               You can call the DescribeRegions API operation to view the latest zones.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         *               You can call the DescribeRegions API operation to view the latest zones.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal.
         *                  Valid values: true and false. Note
         *                  :Monthly subscription: The auto-renewal cycle is one month.
         *                  Annual subscription: The auto-renewal cycle is one year.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal.
         *                  Valid values: true and false. Note
         *                  :Monthly subscription: The auto-renewal cycle is one month.
         *                  Annual subscription: The auto-renewal cycle is one year.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getCategory}
         * @param category Property category: The RDS edition of the read-only instance.
         *                 Valid values:
         *                 Basic: Basic Edition.
         *                 HighAvailability: High-availability Edition. This is the default value.
         *                 AlwaysOn: Cluster Edition.
         *                 Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getCategory}
         * @param category Property category: The RDS edition of the read-only instance.
         *                 Valid values:
         *                 Basic: Basic Edition.
         *                 HighAvailability: High-availability Edition. This is the default value.
         *                 AlwaysOn: Cluster Edition.
         *                 Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The type of storage media that is used by the instance.
         *                              Valid values:
         *                              local_ssd: local SSDs
         *                              cloud_ssd: standard SSDs
         *                              cloud_essd: ESSDs of performance level 1 (PL1)
         *                              cloud_essd2: ESSDs of PL2
         *                              cloud_essd3: ESSDs of PL3
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(java.lang.String dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The type of storage media that is used by the instance.
         *                              Valid values:
         *                              local_ssd: local SSDs
         *                              cloud_ssd: standard SSDs
         *                              cloud_essd: ESSDs of performance level 1 (PL1)
         *                              cloud_essd2: ESSDs of PL2
         *                              cloud_essd3: ESSDs of PL3
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs.
         *                             This parameter is valid when you create the read-only instance in a dedicated cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs.
         *                             This parameter is valid when you create the read-only instance in a dedicated cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance.
         *                           Valid values:- <strong>true</strong>: enables the feature.- <strong>false</strong> (default): disables the feature.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance.
         *                           Valid values:- <strong>true</strong>: enables the feature.- <strong>false</strong> (default): disables the feature.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPayType}
         * @param payType Property payType: The billing method.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPayType}
         * @param payType Property payType: The billing method.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPeriod}
         * @param period Property period: The subscription duration.
         *               Valid values:
         *               When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
         *               When PeriodType is Year, it could be from 1 to 5.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPeriod}
         * @param period Property period: The subscription duration.
         *               Valid values:
         *               When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
         *               When PeriodType is Year, it could be from 1 to 5.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the read-only instance.
         *                         It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the read-only instance.
         *                         It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getTags}
         * @param tags Property tags: The tags of an instance.
         *             You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         *             At most 5 tags can be specified.
         *             Key
         *             It can be up to 64 characters in length.
         *             Cannot begin with aliyun.
         *             Cannot begin with http:// or https://.
         *             Cannot be a null string.
         *             Value
         *             It can be up to 128 characters in length.
         *             Cannot begin with aliyun.
         *             Cannot begin with http:// or https://.
         *             Can be a null string.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getTargetDedicatedHostIdForMaster}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides.
         *                                       This parameter is valid when you create the read-only instance in a dedicated cluster.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForMaster(java.lang.String targetDedicatedHostIdForMaster) {
            this.targetDedicatedHostIdForMaster = targetDedicatedHostIdForMaster;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getTargetDedicatedHostIdForMaster}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides.
         *                                       This parameter is valid when you create the read-only instance in a dedicated cluster.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForMaster(com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForMaster) {
            this.targetDedicatedHostIdForMaster = targetDedicatedHostIdForMaster;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ReadOnlyDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ReadOnlyDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ReadOnlyDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ReadOnlyDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadOnlyDBInstanceProps {
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbInstanceStorage;
        private final java.lang.Object engineVersion;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object category;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceStorageType;
        private final java.lang.Object dedicatedHostGroupId;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object resourceGroupId;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object targetDedicatedHostIdForMaster;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorageType = software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.targetDedicatedHostIdForMaster = software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForMaster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceClass = java.util.Objects.requireNonNull(builder.dbInstanceClass, "dbInstanceClass is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbInstanceStorage = java.util.Objects.requireNonNull(builder.dbInstanceStorage, "dbInstanceStorage is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoRenew = builder.autoRenew;
            this.category = builder.category;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceStorageType = builder.dbInstanceStorageType;
            this.dedicatedHostGroupId = builder.dedicatedHostGroupId;
            this.deletionProtection = builder.deletionProtection;
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodType = builder.periodType;
            this.privateIpAddress = builder.privateIpAddress;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.targetDedicatedHostIdForMaster = builder.targetDedicatedHostIdForMaster;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbInstanceStorage() {
            return this.dbInstanceStorage;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceStorageType() {
            return this.dbInstanceStorageType;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodType() {
            return this.periodType;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTargetDedicatedHostIdForMaster() {
            return this.targetDedicatedHostIdForMaster;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceStorageType() != null) {
                data.set("dbInstanceStorageType", om.valueToTree(this.getDbInstanceStorageType()));
            }
            if (this.getDedicatedHostGroupId() != null) {
                data.set("dedicatedHostGroupId", om.valueToTree(this.getDedicatedHostGroupId()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodType() != null) {
                data.set("periodType", om.valueToTree(this.getPeriodType()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTargetDedicatedHostIdForMaster() != null) {
                data.set("targetDedicatedHostIdForMaster", om.valueToTree(this.getTargetDedicatedHostIdForMaster()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ReadOnlyDBInstanceProps.Jsii$Proxy that = (ReadOnlyDBInstanceProps.Jsii$Proxy) o;

            if (!dbInstanceClass.equals(that.dbInstanceClass)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbInstanceStorage.equals(that.dbInstanceStorage)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceStorageType != null ? !this.dbInstanceStorageType.equals(that.dbInstanceStorageType) : that.dbInstanceStorageType != null) return false;
            if (this.dedicatedHostGroupId != null ? !this.dedicatedHostGroupId.equals(that.dedicatedHostGroupId) : that.dedicatedHostGroupId != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodType != null ? !this.periodType.equals(that.periodType) : that.periodType != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.targetDedicatedHostIdForMaster != null ? !this.targetDedicatedHostIdForMaster.equals(that.targetDedicatedHostIdForMaster) : that.targetDedicatedHostIdForMaster != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceClass.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbInstanceStorage.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceStorageType != null ? this.dbInstanceStorageType.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostGroupId != null ? this.dedicatedHostGroupId.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodType != null ? this.periodType.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.targetDedicatedHostIdForMaster != null ? this.targetDedicatedHostIdForMaster.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
