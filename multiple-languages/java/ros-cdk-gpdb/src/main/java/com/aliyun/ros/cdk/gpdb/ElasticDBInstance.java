package com.aliyun.ros.cdk.gpdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GPDB::ElasticDBInstance</code>, which is used to create an AnalyticDB for PostgreSQL instance in elastic storage mode.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.485Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.ElasticDBInstance")
public class ElasticDBInstance extends com.aliyun.ros.cdk.core.Resource {

    protected ElasticDBInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ElasticDBInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ElasticDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.ElasticDBInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ElasticDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.ElasticDBInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: The endpoint of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The order ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Port: The port used to connect to the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.ElasticDBInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.ElasticDBInstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.ElasticDBInstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.gpdb.ElasticDBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gpdb.ElasticDBInstance> {
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
        private final com.aliyun.ros.cdk.gpdb.ElasticDBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gpdb.ElasticDBInstanceProps.Builder();
        }

        /**
         * Property engineVersion: The version of the database engine.
         * <p>
         * For example: 6.0、7.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: The version of the database engine.
         * <p>
         * For example: 6.0、7.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database engine. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property instanceSpec: The specification of segment nodes.
         * <p>
         * For example: 2C16G, 4C32G, 16C128G.
         * <p>
         * @return {@code this}
         * @param instanceSpec Property instanceSpec: The specification of segment nodes. This parameter is required.
         */
        public Builder instanceSpec(final java.lang.String instanceSpec) {
            this.props.instanceSpec(instanceSpec);
            return this;
        }
        /**
         * Property instanceSpec: The specification of segment nodes.
         * <p>
         * For example: 2C16G, 4C32G, 16C128G.
         * <p>
         * @return {@code this}
         * @param instanceSpec Property instanceSpec: The specification of segment nodes. This parameter is required.
         */
        public Builder instanceSpec(final com.aliyun.ros.cdk.core.IResolvable instanceSpec) {
            this.props.instanceSpec(instanceSpec);
            return this;
        }

        /**
         * Property segNodeNum: The number of segment nodes.
         * <p>
         * For the high availability version, the value ranges from 4 to 512.
         * The basic version ranges from 2 to 512.
         * <p>
         * @return {@code this}
         * @param segNodeNum Property segNodeNum: The number of segment nodes. This parameter is required.
         */
        public Builder segNodeNum(final java.lang.Number segNodeNum) {
            this.props.segNodeNum(segNodeNum);
            return this;
        }
        /**
         * Property segNodeNum: The number of segment nodes.
         * <p>
         * For the high availability version, the value ranges from 4 to 512.
         * The basic version ranges from 2 to 512.
         * <p>
         * @return {@code this}
         * @param segNodeNum Property segNodeNum: The number of segment nodes. This parameter is required.
         */
        public Builder segNodeNum(final com.aliyun.ros.cdk.core.IResolvable segNodeNum) {
            this.props.segNodeNum(segNodeNum);
            return this;
        }

        /**
         * Property segStorageType: The disk type of segment nodes.
         * <p>
         * For example: cloud_essd, cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param segStorageType Property segStorageType: The disk type of segment nodes. This parameter is required.
         */
        public Builder segStorageType(final java.lang.String segStorageType) {
            this.props.segStorageType(segStorageType);
            return this;
        }
        /**
         * Property segStorageType: The disk type of segment nodes.
         * <p>
         * For example: cloud_essd, cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param segStorageType Property segStorageType: The disk type of segment nodes. This parameter is required.
         */
        public Builder segStorageType(final com.aliyun.ros.cdk.core.IResolvable segStorageType) {
            this.props.segStorageType(segStorageType);
            return this;
        }

        /**
         * Property storageSize: The storage capacity of per segment node.
         * <p>
         * Unit: GB. Minimum is 50, max is 4000, step is 50.
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: The storage capacity of per segment node. This parameter is required.
         */
        public Builder storageSize(final java.lang.Number storageSize) {
            this.props.storageSize(storageSize);
            return this;
        }
        /**
         * Property storageSize: The storage capacity of per segment node.
         * <p>
         * Unit: GB. Minimum is 50, max is 4000, step is 50.
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: The storage capacity of per segment node. This parameter is required.
         */
        public Builder storageSize(final com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.props.storageSize(storageSize);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch ID of the instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch ID of the instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.
         * <p>
         * You can call the DescribeRegions
         * operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.
         * <p>
         * You can call the DescribeRegions
         * operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
         * <p>
         * This parameter must be passed in to create a storage reservation mode instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceCategory Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability. This parameter is required.
         */
        public Builder dbInstanceCategory(final java.lang.String dbInstanceCategory) {
            this.props.dbInstanceCategory(dbInstanceCategory);
            return this;
        }
        /**
         * Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
         * <p>
         * This parameter must be passed in to create a storage reservation mode instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceCategory Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability. This parameter is required.
         */
        public Builder dbInstanceCategory(final com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.props.dbInstanceCategory(dbInstanceCategory);
            return this;
        }

        /**
         * Property dbInstanceDescription: The description of the instance.
         * <p>
         * The description cannot exceed 256 characters in length.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: The description of the instance.
         * <p>
         * The description cannot exceed 256 characters in length.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property dbInstanceMode: The db instance mode.
         * <p>
         * Valid values: StorageElastic, Serverless, Classic.
         * <p>
         * @return {@code this}
         * @param dbInstanceMode Property dbInstanceMode: The db instance mode. This parameter is required.
         */
        public Builder dbInstanceMode(final java.lang.String dbInstanceMode) {
            this.props.dbInstanceMode(dbInstanceMode);
            return this;
        }
        /**
         * Property dbInstanceMode: The db instance mode.
         * <p>
         * Valid values: StorageElastic, Serverless, Classic.
         * <p>
         * @return {@code this}
         * @param dbInstanceMode Property dbInstanceMode: The db instance mode. This parameter is required.
         */
        public Builder dbInstanceMode(final com.aliyun.ros.cdk.core.IResolvable dbInstanceMode) {
            this.props.dbInstanceMode(dbInstanceMode);
            return this;
        }

        /**
         * Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
         * <p>
         * Otherwise, leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. This parameter is required.
         */
        public Builder encryptionKey(final java.lang.String encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }
        /**
         * Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
         * <p>
         * Otherwise, leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. This parameter is required.
         */
        public Builder encryptionKey(final com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }

        /**
         * Property encryptionType: The type of the encryption.
         * <p>
         * Default value: NULL. Valid values:
         * NULL: Encryption is disabled.
         * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
         * Note: Disk encryption cannot be disabled after it is enabled.
         * <p>
         * @return {@code this}
         * @param encryptionType Property encryptionType: The type of the encryption. This parameter is required.
         */
        public Builder encryptionType(final java.lang.String encryptionType) {
            this.props.encryptionType(encryptionType);
            return this;
        }
        /**
         * Property encryptionType: The type of the encryption.
         * <p>
         * Default value: NULL. Valid values:
         * NULL: Encryption is disabled.
         * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
         * Note: Disk encryption cannot be disabled after it is enabled.
         * <p>
         * @return {@code this}
         * @param encryptionType Property encryptionType: The type of the encryption. This parameter is required.
         */
        public Builder encryptionType(final com.aliyun.ros.cdk.core.IResolvable encryptionType) {
            this.props.encryptionType(encryptionType);
            return this;
        }

        /**
         * Property masterNodeNum: The number of master nodes.
         * <p>
         * Minimum is 1, max is 2.
         * <p>
         * @return {@code this}
         * @param masterNodeNum Property masterNodeNum: The number of master nodes. This parameter is required.
         */
        public Builder masterNodeNum(final java.lang.Number masterNodeNum) {
            this.props.masterNodeNum(masterNodeNum);
            return this;
        }
        /**
         * Property masterNodeNum: The number of master nodes.
         * <p>
         * Minimum is 1, max is 2.
         * <p>
         * @return {@code this}
         * @param masterNodeNum Property masterNodeNum: The number of master nodes. This parameter is required.
         */
        public Builder masterNodeNum(final com.aliyun.ros.cdk.core.IResolvable masterNodeNum) {
            this.props.masterNodeNum(masterNodeNum);
            return this;
        }

        /**
         * Property payType: The billing method of the instance.
         * <p>
         * Default value: Postpaid. Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instance. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the instance.
         * <p>
         * Default value: Postpaid. Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instance. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The subscription period.
         * <p>
         * While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period.
         * <p>
         * While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Unit of subscription period, it could be Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of subscription period, it could be Month/Year. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Unit of subscription period, it could be Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of subscription period, it could be Month/Year. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property privateIpAddress: Private IP address.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: Private IP address. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: Private IP address.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: Private IP address. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.
         * <p>
         * Default value:
         * 127.0.0.1.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.
         * <p>
         * Default value:
         * 127.0.0.1.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property tags: The list of instance tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags for instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of instance tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.gpdb.RosElasticDBInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpcId: The VPC ID of the instance.
         * <p>
         * If you set the InstanceNetworkType parameter to VPC, you
         * must also specify the VPCId parameter. The specified region of the VPC must be the
         * same as the RegionId value.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC ID of the instance.
         * <p>
         * If you set the InstanceNetworkType parameter to VPC, you
         * must also specify the VPCId parameter. The specified region of the VPC must be the
         * same as the RegionId value.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gpdb.ElasticDBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.gpdb.ElasticDBInstance build() {
            return new com.aliyun.ros.cdk.gpdb.ElasticDBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
