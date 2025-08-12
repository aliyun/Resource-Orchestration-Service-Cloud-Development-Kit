package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>ElasticDBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.966Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.ElasticDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(ElasticDBInstanceProps.Jsii$Proxy.class)
public interface ElasticDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property engineVersion: The version of the database engine.
     * <p>
     * For example: 6.0、7.0
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property instanceSpec: The specification of segment nodes.
     * <p>
     * For example: 2C16G, 4C32G, 16C128G.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSpec();

    /**
     * Property segNodeNum: The number of segment nodes.
     * <p>
     * For the high availability version, the value ranges from 4 to 512.
     * The basic version ranges from 2 to 512.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSegNodeNum();

    /**
     * Property segStorageType: The disk type of segment nodes.
     * <p>
     * For example: cloud_essd, cloud_efficiency.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSegStorageType();

    /**
     * Property storageSize: The storage capacity of per segment node.
     * <p>
     * Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageSize();

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
     * Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * <p>
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceCategory() {
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
     * Property tags: The list of instance tags in the form of key/value pairs.
     * <p>
     * You can define a maximum of 20 tags for instance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty> getTags() {
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
     * @return a {@link Builder} of {@link ElasticDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ElasticDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ElasticDBInstanceProps> {
        java.lang.Object engineVersion;
        java.lang.Object instanceSpec;
        java.lang.Object segNodeNum;
        java.lang.Object segStorageType;
        java.lang.Object storageSize;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object dbInstanceCategory;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceMode;
        java.lang.Object encryptionKey;
        java.lang.Object encryptionType;
        java.lang.Object masterNodeNum;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object privateIpAddress;
        java.lang.Object securityIpList;
        java.util.List<com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty> tags;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         *                      For example: 6.0、7.0
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         *                      For example: 6.0、7.0
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getInstanceSpec}
         * @param instanceSpec Property instanceSpec: The specification of segment nodes. This parameter is required.
         *                     For example: 2C16G, 4C32G, 16C128G.
         * @return {@code this}
         */
        public Builder instanceSpec(java.lang.String instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getInstanceSpec}
         * @param instanceSpec Property instanceSpec: The specification of segment nodes. This parameter is required.
         *                     For example: 2C16G, 4C32G, 16C128G.
         * @return {@code this}
         */
        public Builder instanceSpec(com.aliyun.ros.cdk.core.IResolvable instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getSegNodeNum}
         * @param segNodeNum Property segNodeNum: The number of segment nodes. This parameter is required.
         *                   For the high availability version, the value ranges from 4 to 512.
         *                   The basic version ranges from 2 to 512.
         * @return {@code this}
         */
        public Builder segNodeNum(java.lang.Number segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getSegNodeNum}
         * @param segNodeNum Property segNodeNum: The number of segment nodes. This parameter is required.
         *                   For the high availability version, the value ranges from 4 to 512.
         *                   The basic version ranges from 2 to 512.
         * @return {@code this}
         */
        public Builder segNodeNum(com.aliyun.ros.cdk.core.IResolvable segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getSegStorageType}
         * @param segStorageType Property segStorageType: The disk type of segment nodes. This parameter is required.
         *                       For example: cloud_essd, cloud_efficiency.
         * @return {@code this}
         */
        public Builder segStorageType(java.lang.String segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getSegStorageType}
         * @param segStorageType Property segStorageType: The disk type of segment nodes. This parameter is required.
         *                       For example: cloud_essd, cloud_efficiency.
         * @return {@code this}
         */
        public Builder segStorageType(com.aliyun.ros.cdk.core.IResolvable segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The storage capacity of per segment node. This parameter is required.
         *                    Unit: GB. Minimum is 50, max is 4000, step is 50.
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The storage capacity of per segment node. This parameter is required.
         *                    Unit: GB. Minimum is 50, max is 4000, step is 50.
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getZoneId}
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
         * Sets the value of {@link ElasticDBInstanceProps#getZoneId}
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
         * Sets the value of {@link ElasticDBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
         *                           This parameter must be passed in to create a storage reservation mode instance.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(java.lang.String dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
         *                           This parameter must be passed in to create a storage reservation mode instance.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         *                              The description cannot exceed 256 characters in length.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance.
         *                              The description cannot exceed 256 characters in length.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getDbInstanceMode}
         * @param dbInstanceMode Property dbInstanceMode: The db instance mode.
         *                       Valid values: StorageElastic, Serverless, Classic.
         * @return {@code this}
         */
        public Builder dbInstanceMode(java.lang.String dbInstanceMode) {
            this.dbInstanceMode = dbInstanceMode;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getDbInstanceMode}
         * @param dbInstanceMode Property dbInstanceMode: The db instance mode.
         *                       Valid values: StorageElastic, Serverless, Classic.
         * @return {@code this}
         */
        public Builder dbInstanceMode(com.aliyun.ros.cdk.core.IResolvable dbInstanceMode) {
            this.dbInstanceMode = dbInstanceMode;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
         *                      Otherwise, leave this parameter empty.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
         *                      Otherwise, leave this parameter empty.
         * @return {@code this}
         */
        public Builder encryptionKey(com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getEncryptionType}
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
         * Sets the value of {@link ElasticDBInstanceProps#getEncryptionType}
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
         * Sets the value of {@link ElasticDBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum Property masterNodeNum: The number of master nodes.
         *                      Minimum is 1, max is 2.
         * @return {@code this}
         */
        public Builder masterNodeNum(java.lang.Number masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum Property masterNodeNum: The number of master nodes.
         *                      Minimum is 1, max is 2.
         * @return {@code this}
         */
        public Builder masterNodeNum(com.aliyun.ros.cdk.core.IResolvable masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getPayType}
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
         * Sets the value of {@link ElasticDBInstanceProps#getPayType}
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
         * Sets the value of {@link ElasticDBInstanceProps#getPeriod}
         * @param period Property period: The subscription period.
         *               While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getPeriod}
         * @param period Property period: The subscription period.
         *               While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of subscription period, it could be Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of subscription period, it could be Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP address.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP address.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getSecurityIpList}
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
         * Sets the value of {@link ElasticDBInstanceProps#getSecurityIpList}
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
         * Sets the value of {@link ElasticDBInstanceProps#getTags}
         * @param tags Property tags: The list of instance tags in the form of key/value pairs.
         *             You can define a maximum of 20 tags for instance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ElasticDBInstanceProps#getVpcId}
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
         * Sets the value of {@link ElasticDBInstanceProps#getVpcId}
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
         * @return a new instance of {@link ElasticDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ElasticDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ElasticDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ElasticDBInstanceProps {
        private final java.lang.Object engineVersion;
        private final java.lang.Object instanceSpec;
        private final java.lang.Object segNodeNum;
        private final java.lang.Object segStorageType;
        private final java.lang.Object storageSize;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object dbInstanceCategory;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceMode;
        private final java.lang.Object encryptionKey;
        private final java.lang.Object encryptionType;
        private final java.lang.Object masterNodeNum;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object securityIpList;
        private final java.util.List<com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty> tags;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSpec = software.amazon.jsii.Kernel.get(this, "instanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segNodeNum = software.amazon.jsii.Kernel.get(this, "segNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segStorageType = software.amazon.jsii.Kernel.get(this, "segStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceCategory = software.amazon.jsii.Kernel.get(this, "dbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceMode = software.amazon.jsii.Kernel.get(this, "dbInstanceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionType = software.amazon.jsii.Kernel.get(this, "encryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterNodeNum = software.amazon.jsii.Kernel.get(this, "masterNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.instanceSpec = java.util.Objects.requireNonNull(builder.instanceSpec, "instanceSpec is required");
            this.segNodeNum = java.util.Objects.requireNonNull(builder.segNodeNum, "segNodeNum is required");
            this.segStorageType = java.util.Objects.requireNonNull(builder.segStorageType, "segStorageType is required");
            this.storageSize = java.util.Objects.requireNonNull(builder.storageSize, "storageSize is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.dbInstanceCategory = builder.dbInstanceCategory;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceMode = builder.dbInstanceMode;
            this.encryptionKey = builder.encryptionKey;
            this.encryptionType = builder.encryptionType;
            this.masterNodeNum = builder.masterNodeNum;
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.privateIpAddress = builder.privateIpAddress;
            this.securityIpList = builder.securityIpList;
            this.tags = (java.util.List<com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getInstanceSpec() {
            return this.instanceSpec;
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
        public final java.lang.Object getStorageSize() {
            return this.storageSize;
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
        public final java.lang.Object getDbInstanceCategory() {
            return this.dbInstanceCategory;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
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
        public final java.util.List<com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty> getTags() {
            return this.tags;
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
            data.set("instanceSpec", om.valueToTree(this.getInstanceSpec()));
            data.set("segNodeNum", om.valueToTree(this.getSegNodeNum()));
            data.set("segStorageType", om.valueToTree(this.getSegStorageType()));
            data.set("storageSize", om.valueToTree(this.getStorageSize()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDbInstanceCategory() != null) {
                data.set("dbInstanceCategory", om.valueToTree(this.getDbInstanceCategory()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.ElasticDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ElasticDBInstanceProps.Jsii$Proxy that = (ElasticDBInstanceProps.Jsii$Proxy) o;

            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!instanceSpec.equals(that.instanceSpec)) return false;
            if (!segNodeNum.equals(that.segNodeNum)) return false;
            if (!segStorageType.equals(that.segStorageType)) return false;
            if (!storageSize.equals(that.storageSize)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.dbInstanceCategory != null ? !this.dbInstanceCategory.equals(that.dbInstanceCategory) : that.dbInstanceCategory != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceMode != null ? !this.dbInstanceMode.equals(that.dbInstanceMode) : that.dbInstanceMode != null) return false;
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
            if (this.encryptionType != null ? !this.encryptionType.equals(that.encryptionType) : that.encryptionType != null) return false;
            if (this.masterNodeNum != null ? !this.masterNodeNum.equals(that.masterNodeNum) : that.masterNodeNum != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.engineVersion.hashCode();
            result = 31 * result + (this.instanceSpec.hashCode());
            result = 31 * result + (this.segNodeNum.hashCode());
            result = 31 * result + (this.segStorageType.hashCode());
            result = 31 * result + (this.storageSize.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.dbInstanceCategory != null ? this.dbInstanceCategory.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceMode != null ? this.dbInstanceMode.hashCode() : 0);
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
            result = 31 * result + (this.encryptionType != null ? this.encryptionType.hashCode() : 0);
            result = 31 * result + (this.masterNodeNum != null ? this.masterNodeNum.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
