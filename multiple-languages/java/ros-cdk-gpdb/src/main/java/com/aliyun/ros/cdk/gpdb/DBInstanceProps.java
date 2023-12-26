package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>DBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.510Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.DBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(DBInstanceProps.Jsii$Proxy.class)
public interface DBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property engineVersion: The version of the database engine.
     * <p>
     * For example: 6.0、7.0
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property vSwitchId: The vSwitch ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.
     * <p>
     * You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property createSampleData: Whether to load the sample data set after the instance is created.
     * <p>
     * The value can be:
     * true: load the sample dataset.
     * false: not to load the sample dataset
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreateSampleData() {
        return null;
    }

    /**
     * Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * <p>
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceCategory() {
        return null;
    }

    /**
     * Property dbInstanceClass: The instance type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return null;
    }

    /**
     * Property dbInstanceDescription: The description of the instance.
     * <p>
     * The description cannot exceed 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property dbInstanceGroupCount: The number of compute nodes in the instance.
     * <p>
     * The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceGroupCount() {
        return null;
    }

    /**
     * Property dbInstanceMode: The db instance mode.
     * <p>
     * Valid values: StorageElastic, Serverless, Classic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceMode() {
        return null;
    }

    /**
     * Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
     * <p>
     * Otherwise, leave this parameter empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
        return null;
    }

    /**
     * Property encryptionType: The type of the encryption.
     * <p>
     * Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionType() {
        return null;
    }

    /**
     * Property idleTime: Idle release wait time.
     * <p>
     * That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIdleTime() {
        return null;
    }

    /**
     * Property instanceSpec: The specification of segment nodes.
     * <p>
     * <ul>
     * <li>When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.</li>
     * <li>When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.</li>
     * <li>When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
     * This parameter must be passed to create a storage elastic mode instance and a serverless version instance.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceSpec() {
        return null;
    }

    /**
     * Property masterNodeNum: The number of master nodes.
     * <p>
     * Minimum is 1, max is 2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterNodeNum() {
        return null;
    }

    /**
     * Property payType: The billing method of the instance.
     * <p>
     * Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property period: The subscription period.
     * <p>
     * While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: Unit of subscription period, it could be Month/Year.
     * <p>
     * Default value is Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property privateIpAddress: Private IP address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.
     * <p>
     * Default value:
     * 127.0.0.1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     * Property segDiskPerformanceLevel: Seg disk performance level.
     * <p>
     * The value can be:
     * pl0、pl1 and pl2
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSegDiskPerformanceLevel() {
        return null;
    }

    /**
     * Property segNodeNum: Calculate the number of nodes.
     * <p>
     * The value can be:
     * <p>
     * <ul>
     * <li>When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.</li>
     * <li>When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.</li>
     * <li>When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSegNodeNum() {
        return null;
    }

    /**
     * Property segStorageType: The disk type of segment nodes.
     * <p>
     * For example: cloud_essd, cloud_efficiency.
     * This parameter must be passed in to create a storage elastic mode instance.
     * Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSegStorageType() {
        return null;
    }

    /**
     * Property serverlessMode: Mode of the Serverless instance.
     * <p>
     * The value can be:
     * Manual: manual scheduling is the default value.
     * Auto: indicates automatic scheduling.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessMode() {
        return null;
    }

    /**
     * Property serverlessResource: Computing resource threshold.
     * <p>
     * The value ranges from 8 to 32. The step length is 8.
     * The unit is ACU. The default value is 32.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessResource() {
        return null;
    }

    /**
     * Property storageSize: The storage capacity of per segment node.
     * <p>
     * Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSize() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vectorConfigurationStatus: the status of vector configuration.
     * <p>
     * The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVectorConfigurationStatus() {
        return null;
    }

    /**
     * Property vpcId: The VPC ID of the instance.
     * <p>
     * If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBInstanceProps> {
        java.lang.Object engineVersion;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object createSampleData;
        java.lang.Object dbInstanceCategory;
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceGroupCount;
        java.lang.Object dbInstanceMode;
        java.lang.Object encryptionKey;
        java.lang.Object encryptionType;
        java.lang.Object idleTime;
        java.lang.Object instanceSpec;
        java.lang.Object masterNodeNum;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object privateIpAddress;
        java.lang.Object securityIpList;
        java.lang.Object segDiskPerformanceLevel;
        java.lang.Object segNodeNum;
        java.lang.Object segStorageType;
        java.lang.Object serverlessMode;
        java.lang.Object serverlessResource;
        java.lang.Object storageSize;
        java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> tags;
        java.lang.Object vectorConfigurationStatus;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link DBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         *                      For example: 6.0、7.0
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         *                      For example: 6.0、7.0
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. This parameter is required.
         *               You can call the DescribeRegions
         *               operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. This parameter is required.
         *               You can call the DescribeRegions
         *               operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getCreateSampleData}
         * @param createSampleData Property createSampleData: Whether to load the sample data set after the instance is created.
         *                         The value can be:
         *                         true: load the sample dataset.
         *                         false: not to load the sample dataset
         * @return {@code this}
         */
        public Builder createSampleData(java.lang.Boolean createSampleData) {
            this.createSampleData = createSampleData;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getCreateSampleData}
         * @param createSampleData Property createSampleData: Whether to load the sample data set after the instance is created.
         *                         The value can be:
         *                         true: load the sample dataset.
         *                         false: not to load the sample dataset
         * @return {@code this}
         */
        public Builder createSampleData(com.aliyun.ros.cdk.core.IResolvable createSampleData) {
            this.createSampleData = createSampleData;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
         *                           This parameter must be passed in to create a storage reservation mode instance.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(java.lang.String dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
         *                           This parameter must be passed in to create a storage reservation mode instance.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The instance type.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The instance type.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         *                              The description cannot exceed 256 characters in length.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         *                              The description cannot exceed 256 characters in length.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceGroupCount}
         * @param dbInstanceGroupCount Property dbInstanceGroupCount: The number of compute nodes in the instance.
         *                             The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
         * @return {@code this}
         */
        public Builder dbInstanceGroupCount(java.lang.Number dbInstanceGroupCount) {
            this.dbInstanceGroupCount = dbInstanceGroupCount;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceGroupCount}
         * @param dbInstanceGroupCount Property dbInstanceGroupCount: The number of compute nodes in the instance.
         *                             The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
         * @return {@code this}
         */
        public Builder dbInstanceGroupCount(com.aliyun.ros.cdk.core.IResolvable dbInstanceGroupCount) {
            this.dbInstanceGroupCount = dbInstanceGroupCount;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceMode}
         * @param dbInstanceMode Property dbInstanceMode: The db instance mode.
         *                       Valid values: StorageElastic, Serverless, Classic.
         * @return {@code this}
         */
        public Builder dbInstanceMode(java.lang.String dbInstanceMode) {
            this.dbInstanceMode = dbInstanceMode;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbInstanceMode}
         * @param dbInstanceMode Property dbInstanceMode: The db instance mode.
         *                       Valid values: StorageElastic, Serverless, Classic.
         * @return {@code this}
         */
        public Builder dbInstanceMode(com.aliyun.ros.cdk.core.IResolvable dbInstanceMode) {
            this.dbInstanceMode = dbInstanceMode;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
         *                      Otherwise, leave this parameter empty.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
         *                      Otherwise, leave this parameter empty.
         * @return {@code this}
         */
        public Builder encryptionKey(com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getEncryptionType}
         * @param encryptionType Property encryptionType: The type of the encryption.
         *                       Default value: NULL. Valid values:
         *                       NULL: Encryption is disabled.
         *                       CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
         *                       Note: Disk encryption cannot be disabled after it is enabled.
         * @return {@code this}
         */
        public Builder encryptionType(java.lang.String encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getEncryptionType}
         * @param encryptionType Property encryptionType: The type of the encryption.
         *                       Default value: NULL. Valid values:
         *                       NULL: Encryption is disabled.
         *                       CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
         *                       Note: Disk encryption cannot be disabled after it is enabled.
         * @return {@code this}
         */
        public Builder encryptionType(com.aliyun.ros.cdk.core.IResolvable encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getIdleTime}
         * @param idleTime Property idleTime: Idle release wait time.
         *                 That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
         * @return {@code this}
         */
        public Builder idleTime(java.lang.Number idleTime) {
            this.idleTime = idleTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getIdleTime}
         * @param idleTime Property idleTime: Idle release wait time.
         *                 That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
         * @return {@code this}
         */
        public Builder idleTime(com.aliyun.ros.cdk.core.IResolvable idleTime) {
            this.idleTime = idleTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getInstanceSpec}
         * @param instanceSpec Property instanceSpec: The specification of segment nodes.
         *                     <ul>
         *                     <li>When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.</li>
         *                     <li>When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.</li>
         *                     <li>When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
         *                     This parameter must be passed to create a storage elastic mode instance and a serverless version instance.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceSpec(java.lang.String instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getInstanceSpec}
         * @param instanceSpec Property instanceSpec: The specification of segment nodes.
         *                     <ul>
         *                     <li>When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.</li>
         *                     <li>When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.</li>
         *                     <li>When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
         *                     This parameter must be passed to create a storage elastic mode instance and a serverless version instance.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceSpec(com.aliyun.ros.cdk.core.IResolvable instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum Property masterNodeNum: The number of master nodes.
         *                      Minimum is 1, max is 2.
         * @return {@code this}
         */
        public Builder masterNodeNum(java.lang.Number masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum Property masterNodeNum: The number of master nodes.
         *                      Minimum is 1, max is 2.
         * @return {@code this}
         */
        public Builder masterNodeNum(com.aliyun.ros.cdk.core.IResolvable masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPayType}
         * @param payType Property payType: The billing method of the instance.
         *                Default value: Postpaid. Valid values:
         *                Postpaid: pay-as-you-go
         *                Prepaid: subscription
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPayType}
         * @param payType Property payType: The billing method of the instance.
         *                Default value: Postpaid. Valid values:
         *                Postpaid: pay-as-you-go
         *                Prepaid: subscription
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPeriod}
         * @param period Property period: The subscription period.
         *               While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPeriod}
         * @param period Property period: The subscription period.
         *               While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of subscription period, it could be Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of subscription period, it could be Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP address.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP address.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.
         *                       Default value:
         *                       127.0.0.1.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.
         *                       Default value:
         *                       127.0.0.1.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSegDiskPerformanceLevel}
         * @param segDiskPerformanceLevel Property segDiskPerformanceLevel: Seg disk performance level.
         *                                The value can be:
         *                                pl0、pl1 and pl2
         * @return {@code this}
         */
        public Builder segDiskPerformanceLevel(java.lang.String segDiskPerformanceLevel) {
            this.segDiskPerformanceLevel = segDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSegDiskPerformanceLevel}
         * @param segDiskPerformanceLevel Property segDiskPerformanceLevel: Seg disk performance level.
         *                                The value can be:
         *                                pl0、pl1 and pl2
         * @return {@code this}
         */
        public Builder segDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable segDiskPerformanceLevel) {
            this.segDiskPerformanceLevel = segDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSegNodeNum}
         * @param segNodeNum Property segNodeNum: Calculate the number of nodes.
         *                   The value can be:
         *                   <p>
         *                   <ul>
         *                   <li>When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.</li>
         *                   <li>When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.</li>
         *                   <li>When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder segNodeNum(java.lang.Number segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSegNodeNum}
         * @param segNodeNum Property segNodeNum: Calculate the number of nodes.
         *                   The value can be:
         *                   <p>
         *                   <ul>
         *                   <li>When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.</li>
         *                   <li>When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.</li>
         *                   <li>When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder segNodeNum(com.aliyun.ros.cdk.core.IResolvable segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSegStorageType}
         * @param segStorageType Property segStorageType: The disk type of segment nodes.
         *                       For example: cloud_essd, cloud_efficiency.
         *                       This parameter must be passed in to create a storage elastic mode instance.
         *                       Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
         * @return {@code this}
         */
        public Builder segStorageType(java.lang.String segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getSegStorageType}
         * @param segStorageType Property segStorageType: The disk type of segment nodes.
         *                       For example: cloud_essd, cloud_efficiency.
         *                       This parameter must be passed in to create a storage elastic mode instance.
         *                       Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
         * @return {@code this}
         */
        public Builder segStorageType(com.aliyun.ros.cdk.core.IResolvable segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getServerlessMode}
         * @param serverlessMode Property serverlessMode: Mode of the Serverless instance.
         *                       The value can be:
         *                       Manual: manual scheduling is the default value.
         *                       Auto: indicates automatic scheduling.
         * @return {@code this}
         */
        public Builder serverlessMode(java.lang.String serverlessMode) {
            this.serverlessMode = serverlessMode;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getServerlessMode}
         * @param serverlessMode Property serverlessMode: Mode of the Serverless instance.
         *                       The value can be:
         *                       Manual: manual scheduling is the default value.
         *                       Auto: indicates automatic scheduling.
         * @return {@code this}
         */
        public Builder serverlessMode(com.aliyun.ros.cdk.core.IResolvable serverlessMode) {
            this.serverlessMode = serverlessMode;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getServerlessResource}
         * @param serverlessResource Property serverlessResource: Computing resource threshold.
         *                           The value ranges from 8 to 32. The step length is 8.
         *                           The unit is ACU. The default value is 32.
         * @return {@code this}
         */
        public Builder serverlessResource(java.lang.Number serverlessResource) {
            this.serverlessResource = serverlessResource;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getServerlessResource}
         * @param serverlessResource Property serverlessResource: Computing resource threshold.
         *                           The value ranges from 8 to 32. The step length is 8.
         *                           The unit is ACU. The default value is 32.
         * @return {@code this}
         */
        public Builder serverlessResource(com.aliyun.ros.cdk.core.IResolvable serverlessResource) {
            this.serverlessResource = serverlessResource;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The storage capacity of per segment node.
         *                    Unit: GB. Minimum is 50, max is 4000, step is 50.
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The storage capacity of per segment node.
         *                    Unit: GB. Minimum is 50, max is 4000, step is 50.
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVectorConfigurationStatus}
         * @param vectorConfigurationStatus Property vectorConfigurationStatus: the status of vector configuration.
         *                                  The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
         * @return {@code this}
         */
        public Builder vectorConfigurationStatus(java.lang.String vectorConfigurationStatus) {
            this.vectorConfigurationStatus = vectorConfigurationStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVectorConfigurationStatus}
         * @param vectorConfigurationStatus Property vectorConfigurationStatus: the status of vector configuration.
         *                                  The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
         * @return {@code this}
         */
        public Builder vectorConfigurationStatus(com.aliyun.ros.cdk.core.IResolvable vectorConfigurationStatus) {
            this.vectorConfigurationStatus = vectorConfigurationStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the instance.
         *              If you set the InstanceNetworkType parameter to VPC, you
         *              must also specify the VPCId parameter. The specified region of the VPC must be the
         *              same as the RegionId value.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the instance.
         *              If you set the InstanceNetworkType parameter to VPC, you
         *              must also specify the VPCId parameter. The specified region of the VPC must be the
         *              same as the RegionId value.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstanceProps {
        private final java.lang.Object engineVersion;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object createSampleData;
        private final java.lang.Object dbInstanceCategory;
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceGroupCount;
        private final java.lang.Object dbInstanceMode;
        private final java.lang.Object encryptionKey;
        private final java.lang.Object encryptionType;
        private final java.lang.Object idleTime;
        private final java.lang.Object instanceSpec;
        private final java.lang.Object masterNodeNum;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object securityIpList;
        private final java.lang.Object segDiskPerformanceLevel;
        private final java.lang.Object segNodeNum;
        private final java.lang.Object segStorageType;
        private final java.lang.Object serverlessMode;
        private final java.lang.Object serverlessResource;
        private final java.lang.Object storageSize;
        private final java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> tags;
        private final java.lang.Object vectorConfigurationStatus;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.createSampleData = software.amazon.jsii.Kernel.get(this, "createSampleData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceCategory = software.amazon.jsii.Kernel.get(this, "dbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceGroupCount = software.amazon.jsii.Kernel.get(this, "dbInstanceGroupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceMode = software.amazon.jsii.Kernel.get(this, "dbInstanceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionType = software.amazon.jsii.Kernel.get(this, "encryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.idleTime = software.amazon.jsii.Kernel.get(this, "idleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSpec = software.amazon.jsii.Kernel.get(this, "instanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterNodeNum = software.amazon.jsii.Kernel.get(this, "masterNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "segDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segNodeNum = software.amazon.jsii.Kernel.get(this, "segNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segStorageType = software.amazon.jsii.Kernel.get(this, "segStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessMode = software.amazon.jsii.Kernel.get(this, "serverlessMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessResource = software.amazon.jsii.Kernel.get(this, "serverlessResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty.class)));
            this.vectorConfigurationStatus = software.amazon.jsii.Kernel.get(this, "vectorConfigurationStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.createSampleData = builder.createSampleData;
            this.dbInstanceCategory = builder.dbInstanceCategory;
            this.dbInstanceClass = builder.dbInstanceClass;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceGroupCount = builder.dbInstanceGroupCount;
            this.dbInstanceMode = builder.dbInstanceMode;
            this.encryptionKey = builder.encryptionKey;
            this.encryptionType = builder.encryptionType;
            this.idleTime = builder.idleTime;
            this.instanceSpec = builder.instanceSpec;
            this.masterNodeNum = builder.masterNodeNum;
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.privateIpAddress = builder.privateIpAddress;
            this.securityIpList = builder.securityIpList;
            this.segDiskPerformanceLevel = builder.segDiskPerformanceLevel;
            this.segNodeNum = builder.segNodeNum;
            this.segStorageType = builder.segStorageType;
            this.serverlessMode = builder.serverlessMode;
            this.serverlessResource = builder.serverlessResource;
            this.storageSize = builder.storageSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty>)builder.tags;
            this.vectorConfigurationStatus = builder.vectorConfigurationStatus;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
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
        public final java.lang.Object getCreateSampleData() {
            return this.createSampleData;
        }

        @Override
        public final java.lang.Object getDbInstanceCategory() {
            return this.dbInstanceCategory;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceGroupCount() {
            return this.dbInstanceGroupCount;
        }

        @Override
        public final java.lang.Object getDbInstanceMode() {
            return this.dbInstanceMode;
        }

        @Override
        public final java.lang.Object getEncryptionKey() {
            return this.encryptionKey;
        }

        @Override
        public final java.lang.Object getEncryptionType() {
            return this.encryptionType;
        }

        @Override
        public final java.lang.Object getIdleTime() {
            return this.idleTime;
        }

        @Override
        public final java.lang.Object getInstanceSpec() {
            return this.instanceSpec;
        }

        @Override
        public final java.lang.Object getMasterNodeNum() {
            return this.masterNodeNum;
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
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getSegDiskPerformanceLevel() {
            return this.segDiskPerformanceLevel;
        }

        @Override
        public final java.lang.Object getSegNodeNum() {
            return this.segNodeNum;
        }

        @Override
        public final java.lang.Object getSegStorageType() {
            return this.segStorageType;
        }

        @Override
        public final java.lang.Object getServerlessMode() {
            return this.serverlessMode;
        }

        @Override
        public final java.lang.Object getServerlessResource() {
            return this.serverlessResource;
        }

        @Override
        public final java.lang.Object getStorageSize() {
            return this.storageSize;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVectorConfigurationStatus() {
            return this.vectorConfigurationStatus;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getCreateSampleData() != null) {
                data.set("createSampleData", om.valueToTree(this.getCreateSampleData()));
            }
            if (this.getDbInstanceCategory() != null) {
                data.set("dbInstanceCategory", om.valueToTree(this.getDbInstanceCategory()));
            }
            if (this.getDbInstanceClass() != null) {
                data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceGroupCount() != null) {
                data.set("dbInstanceGroupCount", om.valueToTree(this.getDbInstanceGroupCount()));
            }
            if (this.getDbInstanceMode() != null) {
                data.set("dbInstanceMode", om.valueToTree(this.getDbInstanceMode()));
            }
            if (this.getEncryptionKey() != null) {
                data.set("encryptionKey", om.valueToTree(this.getEncryptionKey()));
            }
            if (this.getEncryptionType() != null) {
                data.set("encryptionType", om.valueToTree(this.getEncryptionType()));
            }
            if (this.getIdleTime() != null) {
                data.set("idleTime", om.valueToTree(this.getIdleTime()));
            }
            if (this.getInstanceSpec() != null) {
                data.set("instanceSpec", om.valueToTree(this.getInstanceSpec()));
            }
            if (this.getMasterNodeNum() != null) {
                data.set("masterNodeNum", om.valueToTree(this.getMasterNodeNum()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getSegDiskPerformanceLevel() != null) {
                data.set("segDiskPerformanceLevel", om.valueToTree(this.getSegDiskPerformanceLevel()));
            }
            if (this.getSegNodeNum() != null) {
                data.set("segNodeNum", om.valueToTree(this.getSegNodeNum()));
            }
            if (this.getSegStorageType() != null) {
                data.set("segStorageType", om.valueToTree(this.getSegStorageType()));
            }
            if (this.getServerlessMode() != null) {
                data.set("serverlessMode", om.valueToTree(this.getServerlessMode()));
            }
            if (this.getServerlessResource() != null) {
                data.set("serverlessResource", om.valueToTree(this.getServerlessResource()));
            }
            if (this.getStorageSize() != null) {
                data.set("storageSize", om.valueToTree(this.getStorageSize()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVectorConfigurationStatus() != null) {
                data.set("vectorConfigurationStatus", om.valueToTree(this.getVectorConfigurationStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.DBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBInstanceProps.Jsii$Proxy that = (DBInstanceProps.Jsii$Proxy) o;

            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.createSampleData != null ? !this.createSampleData.equals(that.createSampleData) : that.createSampleData != null) return false;
            if (this.dbInstanceCategory != null ? !this.dbInstanceCategory.equals(that.dbInstanceCategory) : that.dbInstanceCategory != null) return false;
            if (this.dbInstanceClass != null ? !this.dbInstanceClass.equals(that.dbInstanceClass) : that.dbInstanceClass != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceGroupCount != null ? !this.dbInstanceGroupCount.equals(that.dbInstanceGroupCount) : that.dbInstanceGroupCount != null) return false;
            if (this.dbInstanceMode != null ? !this.dbInstanceMode.equals(that.dbInstanceMode) : that.dbInstanceMode != null) return false;
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
            if (this.encryptionType != null ? !this.encryptionType.equals(that.encryptionType) : that.encryptionType != null) return false;
            if (this.idleTime != null ? !this.idleTime.equals(that.idleTime) : that.idleTime != null) return false;
            if (this.instanceSpec != null ? !this.instanceSpec.equals(that.instanceSpec) : that.instanceSpec != null) return false;
            if (this.masterNodeNum != null ? !this.masterNodeNum.equals(that.masterNodeNum) : that.masterNodeNum != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.segDiskPerformanceLevel != null ? !this.segDiskPerformanceLevel.equals(that.segDiskPerformanceLevel) : that.segDiskPerformanceLevel != null) return false;
            if (this.segNodeNum != null ? !this.segNodeNum.equals(that.segNodeNum) : that.segNodeNum != null) return false;
            if (this.segStorageType != null ? !this.segStorageType.equals(that.segStorageType) : that.segStorageType != null) return false;
            if (this.serverlessMode != null ? !this.serverlessMode.equals(that.serverlessMode) : that.serverlessMode != null) return false;
            if (this.serverlessResource != null ? !this.serverlessResource.equals(that.serverlessResource) : that.serverlessResource != null) return false;
            if (this.storageSize != null ? !this.storageSize.equals(that.storageSize) : that.storageSize != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vectorConfigurationStatus != null ? !this.vectorConfigurationStatus.equals(that.vectorConfigurationStatus) : that.vectorConfigurationStatus != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.engineVersion.hashCode();
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.createSampleData != null ? this.createSampleData.hashCode() : 0);
            result = 31 * result + (this.dbInstanceCategory != null ? this.dbInstanceCategory.hashCode() : 0);
            result = 31 * result + (this.dbInstanceClass != null ? this.dbInstanceClass.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceGroupCount != null ? this.dbInstanceGroupCount.hashCode() : 0);
            result = 31 * result + (this.dbInstanceMode != null ? this.dbInstanceMode.hashCode() : 0);
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
            result = 31 * result + (this.encryptionType != null ? this.encryptionType.hashCode() : 0);
            result = 31 * result + (this.idleTime != null ? this.idleTime.hashCode() : 0);
            result = 31 * result + (this.instanceSpec != null ? this.instanceSpec.hashCode() : 0);
            result = 31 * result + (this.masterNodeNum != null ? this.masterNodeNum.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.segDiskPerformanceLevel != null ? this.segDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.segNodeNum != null ? this.segNodeNum.hashCode() : 0);
            result = 31 * result + (this.segStorageType != null ? this.segStorageType.hashCode() : 0);
            result = 31 * result + (this.serverlessMode != null ? this.serverlessMode.hashCode() : 0);
            result = 31 * result + (this.serverlessResource != null ? this.serverlessResource.hashCode() : 0);
            result = 31 * result + (this.storageSize != null ? this.storageSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vectorConfigurationStatus != null ? this.vectorConfigurationStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
