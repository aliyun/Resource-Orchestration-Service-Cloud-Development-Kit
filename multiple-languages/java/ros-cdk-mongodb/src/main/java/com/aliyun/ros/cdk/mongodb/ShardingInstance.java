package com.aliyun.ros.cdk.mongodb;

/**
 * A ROS resource type:  `ALIYUN::MONGODB::ShardingInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:04.878Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.ShardingInstance")
public class ShardingInstance extends com.aliyun.ros.cdk.core.Resource {

    protected ShardingInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ShardingInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::MONGODB::ShardingInstance`.
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
    public ShardingInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.ShardingInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::MONGODB::ShardingInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ShardingInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.ShardingInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.ShardingInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.ShardingInstance> {
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
        private final com.aliyun.ros.cdk.mongodb.ShardingInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.ShardingInstanceProps.Builder();
        }

        /**
         * Property configServer:.
         * <p>
         * @return {@code this}
         * @param configServer Property configServer:. This parameter is required.
         */
        public Builder configServer(final com.aliyun.ros.cdk.core.IResolvable configServer) {
            this.props.configServer(configServer);
            return this;
        }
        /**
         * Property configServer:.
         * <p>
         * @return {@code this}
         * @param configServer Property configServer:. This parameter is required.
         */
        public Builder configServer(final java.util.List<? extends java.lang.Object> configServer) {
            this.props.configServer(configServer);
            return this;
        }

        /**
         * Property mongos:.
         * <p>
         * @return {@code this}
         * @param mongos Property mongos:. This parameter is required.
         */
        public Builder mongos(final com.aliyun.ros.cdk.core.IResolvable mongos) {
            this.props.mongos(mongos);
            return this;
        }
        /**
         * Property mongos:.
         * <p>
         * @return {@code this}
         * @param mongos Property mongos:. This parameter is required.
         */
        public Builder mongos(final java.util.List<? extends java.lang.Object> mongos) {
            this.props.mongos(mongos);
            return this;
        }

        /**
         * Property replicaSet:.
         * <p>
         * @return {@code this}
         * @param replicaSet Property replicaSet:. This parameter is required.
         */
        public Builder replicaSet(final com.aliyun.ros.cdk.core.IResolvable replicaSet) {
            this.props.replicaSet(replicaSet);
            return this;
        }
        /**
         * Property replicaSet:.
         * <p>
         * @return {@code this}
         * @param replicaSet Property replicaSet:. This parameter is required.
         */
        public Builder replicaSet(final java.util.List<? extends java.lang.Object> replicaSet) {
            this.props.replicaSet(replicaSet);
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
         * Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
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
         * Property protocolType: Protocol type.
         * <p>
         * Valid value: mongodb or dynamodb.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: Protocol type. This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * Property protocolType: Protocol type.
         * <p>
         * Valid value: mongodb or dynamodb.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: Protocol type. This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
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
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.mongodb.RosShardingInstance.TagsProperty> tags) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mongodb.ShardingInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.ShardingInstance build() {
            return new com.aliyun.ros.cdk.mongodb.ShardingInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
