import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export interface RosInstanceProps {
    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property backupId: Specific backup set Id.
     */
    readonly backupId?: string | ros.IResolvable;
    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string | ros.IResolvable;
    /**
     * @Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number | ros.IResolvable;
    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string | ros.IResolvable;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    readonly storageType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::Instance`, which is used to create or clone an ApsaraDB for MongoDB replica set instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::Instance";
    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    readonly attrConnectionUri: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute ReplicaSetName: Name of replica set
     */
    readonly attrReplicaSetName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    accountPassword: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupId: Specific backup set Id.
     */
    backupId: string | ros.IResolvable | undefined;
    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    businessInfo: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    couponNo: string | ros.IResolvable | undefined;
    /**
     * @Property databaseNames: The name of the database.
     */
    databaseNames: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: Database instance version.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    hiddenZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonlyReplicas: number | ros.IResolvable | undefined;
    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    replicationFactor: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    restoreTime: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    secondaryZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    securityIpArray: string | ros.IResolvable | undefined;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    srcDbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    storageEngine: string | ros.IResolvable | undefined;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    storageType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    tdeStatus: boolean | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosShardingInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export interface RosShardingInstanceProps {
    /**
     * @Property configServer:
     */
    readonly configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property mongos:
     */
    readonly mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property replicaSet:
     */
    readonly replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string | ros.IResolvable;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    readonly storageType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosShardingInstance.TagsProperty[];
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::ShardingInstance`, which is used to create or clone an ApsaraDB for MongoDB sharded cluster instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ShardingInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export declare class RosShardingInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingInstance";
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configServer:
     */
    configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property mongos:
     */
    mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property replicaSet:
     */
    replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    accountPassword: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: Database instance version.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    hiddenZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    protocolType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    restoreTime: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    secondaryZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    securityIpArray: string | ros.IResolvable | undefined;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    srcDbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    storageEngine: string | ros.IResolvable | undefined;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    storageType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosShardingInstance.TagsProperty[] | undefined;
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    tdeStatus: boolean | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface ConfigServerProperty {
        /**
         * @Property storage: The storage space of config server. Valid value: 20. Unit: GB.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property class: The specification of config server.
         */
        readonly class: string | ros.IResolvable;
    }
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface MongosProperty {
        /**
         * @Property class: The specification of mongo.
         */
        readonly class: string | ros.IResolvable;
    }
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface ReplicaSetProperty {
        /**
         * @Property storage: The storage space of shard.
     * Valid values: 10 to 2000. Unit: GB.
     * You can only specify this value in 10 GB increments.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property readonlyReplicas: The number of read-only nodes in shard node.
         */
        readonly readonlyReplicas?: number | ros.IResolvable;
        /**
         * @Property class: The specification of shard.
         */
        readonly class: string | ros.IResolvable;
    }
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
