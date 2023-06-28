package com.aliyun.ros.cdk.mongodb;

/**
 * A ROS resource type:  <code>ALIYUN::MONGODB::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:29.384Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::MONGODB::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::MONGODB::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionURI: Connection uri.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionUri() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionUri", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: Order Id of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReplicaSetName: Name of replica set.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplicaSetName() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaSetName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.Instance> {
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
        private final com.aliyun.ros.cdk.mongodb.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.InstanceProps.Builder();
        }

        /**
         * Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct. This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct. This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }

        /**
         * Property dbInstanceStorage: Database instance storage size.
         * <p>
         * MongoDB is [5,3000], increased every 10 GB, Unit in GB
         * <p>
         * @return {@code this}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size. This parameter is required.
         */
        public Builder dbInstanceStorage(final java.lang.Number dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }
        /**
         * Property dbInstanceStorage: Database instance storage size.
         * <p>
         * MongoDB is [5,3000], increased every 10 GB, Unit in GB
         * <p>
         * @return {@code this}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size. This parameter is required.
         */
        public Builder dbInstanceStorage(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }

        /**
         * Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         * <p>
         * Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         * <p>
         * Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property backupId: Specific backup set Id.
         * <p>
         * @return {@code this}
         * @param backupId Property backupId: Specific backup set Id. This parameter is required.
         */
        public Builder backupId(final java.lang.String backupId) {
            this.props.backupId(backupId);
            return this;
        }
        /**
         * Property backupId: Specific backup set Id.
         * <p>
         * @return {@code this}
         * @param backupId Property backupId: Specific backup set Id. This parameter is required.
         */
        public Builder backupId(final com.aliyun.ros.cdk.core.IResolvable backupId) {
            this.props.backupId(backupId);
            return this;
        }

        /**
         * Property businessInfo: The business information.
         * <p>
         * It is an additional parameter.
         * <p>
         * @return {@code this}
         * @param businessInfo Property businessInfo: The business information. This parameter is required.
         */
        public Builder businessInfo(final java.lang.String businessInfo) {
            this.props.businessInfo(businessInfo);
            return this;
        }
        /**
         * Property businessInfo: The business information.
         * <p>
         * It is an additional parameter.
         * <p>
         * @return {@code this}
         * @param businessInfo Property businessInfo: The business information. This parameter is required.
         */
        public Builder businessInfo(final com.aliyun.ros.cdk.core.IResolvable businessInfo) {
            this.props.businessInfo(businessInfo);
            return this;
        }

        /**
         * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property couponNo: The coupon code.
         * <p>
         * Default value:youhuiquan_promotion_option_id_for_blank.
         * <p>
         * @return {@code this}
         * @param couponNo Property couponNo: The coupon code. This parameter is required.
         */
        public Builder couponNo(final java.lang.String couponNo) {
            this.props.couponNo(couponNo);
            return this;
        }
        /**
         * Property couponNo: The coupon code.
         * <p>
         * Default value:youhuiquan_promotion_option_id_for_blank.
         * <p>
         * @return {@code this}
         * @param couponNo Property couponNo: The coupon code. This parameter is required.
         */
        public Builder couponNo(final com.aliyun.ros.cdk.core.IResolvable couponNo) {
            this.props.couponNo(couponNo);
            return this;
        }

        /**
         * Property databaseNames: The name of the database.
         * <p>
         * @return {@code this}
         * @param databaseNames Property databaseNames: The name of the database. This parameter is required.
         */
        public Builder databaseNames(final java.lang.String databaseNames) {
            this.props.databaseNames(databaseNames);
            return this;
        }
        /**
         * Property databaseNames: The name of the database.
         * <p>
         * @return {@code this}
         * @param databaseNames Property databaseNames: The name of the database. This parameter is required.
         */
        public Builder databaseNames(final com.aliyun.ros.cdk.core.IResolvable databaseNames) {
            this.props.databaseNames(databaseNames);
            return this;
        }

        /**
         * Property dbInstanceDescription: Description of created database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: Description of created database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property engineVersion: Database instance version.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database instance version. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: Database instance version.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database instance version. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
         * <p>
         * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
         * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
         * <p>
         * @return {@code this}
         * @param hiddenZoneId Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment. This parameter is required.
         */
        public Builder hiddenZoneId(final java.lang.String hiddenZoneId) {
            this.props.hiddenZoneId(hiddenZoneId);
            return this;
        }
        /**
         * Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
         * <p>
         * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
         * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
         * <p>
         * @return {@code this}
         * @param hiddenZoneId Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment. This parameter is required.
         */
        public Builder hiddenZoneId(final com.aliyun.ros.cdk.core.IResolvable hiddenZoneId) {
            this.props.hiddenZoneId(hiddenZoneId);
            return this;
        }

        /**
         * Property networkType: The instance network type.
         * <p>
         * Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The instance network type. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The instance network type.
         * <p>
         * Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The instance network type. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
         * <p>
         * @return {@code this}
         * @param readonlyReplicas Property readonlyReplicas: Number of read-only nodes, in the range of 1-5. This parameter is required.
         */
        public Builder readonlyReplicas(final java.lang.Number readonlyReplicas) {
            this.props.readonlyReplicas(readonlyReplicas);
            return this;
        }
        /**
         * Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
         * <p>
         * @return {@code this}
         * @param readonlyReplicas Property readonlyReplicas: Number of read-only nodes, in the range of 1-5. This parameter is required.
         */
        public Builder readonlyReplicas(final com.aliyun.ros.cdk.core.IResolvable readonlyReplicas) {
            this.props.readonlyReplicas(readonlyReplicas);
            return this;
        }

        /**
         * Property replicationFactor: The number of nodes in the replica set.
         * <p>
         * Allowed values: [3, 5, 7], default to 3.
         * <p>
         * @return {@code this}
         * @param replicationFactor Property replicationFactor: The number of nodes in the replica set. This parameter is required.
         */
        public Builder replicationFactor(final java.lang.Number replicationFactor) {
            this.props.replicationFactor(replicationFactor);
            return this;
        }
        /**
         * Property replicationFactor: The number of nodes in the replica set.
         * <p>
         * Allowed values: [3, 5, 7], default to 3.
         * <p>
         * @return {@code this}
         * @param replicationFactor Property replicationFactor: The number of nodes in the replica set. This parameter is required.
         */
        public Builder replicationFactor(final com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.props.replicationFactor(replicationFactor);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property restoreTime: The time to restore the cloned instance to.
         * <p>
         * The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
         * <p>
         * @return {@code this}
         * @param restoreTime Property restoreTime: The time to restore the cloned instance to. This parameter is required.
         */
        public Builder restoreTime(final java.lang.String restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }
        /**
         * Property restoreTime: The time to restore the cloned instance to.
         * <p>
         * The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
         * <p>
         * @return {@code this}
         * @param restoreTime Property restoreTime: The time to restore the cloned instance to. This parameter is required.
         */
        public Builder restoreTime(final com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }

        /**
         * Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
         * <p>
         * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
         * <p>
         * @return {@code this}
         * @param secondaryZoneId Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment. This parameter is required.
         */
        public Builder secondaryZoneId(final java.lang.String secondaryZoneId) {
            this.props.secondaryZoneId(secondaryZoneId);
            return this;
        }
        /**
         * Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
         * <p>
         * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
         * <p>
         * @return {@code this}
         * @param secondaryZoneId Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment. This parameter is required.
         */
        public Builder secondaryZoneId(final com.aliyun.ros.cdk.core.IResolvable secondaryZoneId) {
            this.props.secondaryZoneId(secondaryZoneId);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the ECS security group.
         * <p>
         * Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
         * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security group. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the ECS security group.
         * <p>
         * Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
         * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security group. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityIpArray: Security ips to add or remove.
         * <p>
         * @return {@code this}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove. This parameter is required.
         */
        public Builder securityIpArray(final java.lang.String securityIpArray) {
            this.props.securityIpArray(securityIpArray);
            return this;
        }
        /**
         * Property securityIpArray: Security ips to add or remove.
         * <p>
         * @return {@code this}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove. This parameter is required.
         */
        public Builder securityIpArray(final com.aliyun.ros.cdk.core.IResolvable securityIpArray) {
            this.props.securityIpArray(securityIpArray);
            return this;
        }

        /**
         * Property srcDbInstanceId: Create an instance of the backup set based on an instance.
         * <p>
         * @return {@code this}
         * @param srcDbInstanceId Property srcDbInstanceId: Create an instance of the backup set based on an instance. This parameter is required.
         */
        public Builder srcDbInstanceId(final java.lang.String srcDbInstanceId) {
            this.props.srcDbInstanceId(srcDbInstanceId);
            return this;
        }
        /**
         * Property srcDbInstanceId: Create an instance of the backup set based on an instance.
         * <p>
         * @return {@code this}
         * @param srcDbInstanceId Property srcDbInstanceId: Create an instance of the backup set based on an instance. This parameter is required.
         */
        public Builder srcDbInstanceId(final com.aliyun.ros.cdk.core.IResolvable srcDbInstanceId) {
            this.props.srcDbInstanceId(srcDbInstanceId);
            return this;
        }

        /**
         * Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
         * <p>
         * @return {@code this}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB. This parameter is required.
         */
        public Builder storageEngine(final java.lang.String storageEngine) {
            this.props.storageEngine(storageEngine);
            return this;
        }
        /**
         * Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
         * <p>
         * @return {@code this}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB. This parameter is required.
         */
        public Builder storageEngine(final com.aliyun.ros.cdk.core.IResolvable storageEngine) {
            this.props.storageEngine(storageEngine);
            return this;
        }

        /**
         * Property storageType: The storage type of the instance.
         * <p>
         * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
         * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The storage type of the instance. This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * Property storageType: The storage type of the instance.
         * <p>
         * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
         * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The storage type of the instance. This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         * <p>
         * Valid values:
         * true: enable TDE
         * false: disable TDE (default)
         * Note: You cannot disable TDE after it is enabled.
         * <p>
         * @return {@code this}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). This parameter is required.
         */
        public Builder tdeStatus(final java.lang.Boolean tdeStatus) {
            this.props.tdeStatus(tdeStatus);
            return this;
        }
        /**
         * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         * <p>
         * Valid values:
         * true: enable TDE
         * false: disable TDE (default)
         * Note: You cannot disable TDE after it is enabled.
         * <p>
         * @return {@code this}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). This parameter is required.
         */
        public Builder tdeStatus(final com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.props.tdeStatus(tdeStatus);
            return this;
        }

        /**
         * Property vpcId: The VPC id to create mongodb instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC id to create mongodb instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final java.lang.Boolean vpcPasswordFree) {
            this.props.vpcPasswordFree(vpcPasswordFree);
            return this;
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
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.props.vpcPasswordFree(vpcPasswordFree);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch Id to create mongodb instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch Id to create mongodb instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: On which zone to create the instance.
         * <p>
         * If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: On which zone to create the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: On which zone to create the instance.
         * <p>
         * If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: On which zone to create the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.Instance build() {
            return new com.aliyun.ros.cdk.mongodb.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
