import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::MONGODB::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string;
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property backupId: Specific backup set Id.
     */
    readonly backupId?: string;
    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;
    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string;
    /**
     * @Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;
    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    readonly engineVersion?: string;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;
    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number;
    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::MONGODB::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    readonly attrConnectionUri: any;
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: any;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute ReplicaSetName: Name of replica set
     */
    readonly attrReplicaSetName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    dbInstanceClass: string;
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    dbInstanceStorage: number;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    accountPassword: string | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupId: Specific backup set Id.
     */
    backupId: string | undefined;
    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    businessInfo: string | undefined;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    chargeType: string | undefined;
    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    couponNo: string | undefined;
    /**
     * @Property databaseNames: The name of the database.
     */
    databaseNames: string | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | undefined;
    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    engineVersion: string | undefined;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    networkType: string | undefined;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | undefined;
    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonlyReplicas: number | undefined;
    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    replicationFactor: number | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    restoreTime: string | undefined;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    securityIpArray: string | undefined;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    srcDbInstanceId: string | undefined;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    storageEngine: string | undefined;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::MONGODB::Instance`.
     *
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
/**
 * Properties for defining a `ALIYUN::MONGODB::ServerlessInstance`
 */
export interface RosServerlessInstanceProps {
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;
    /**
     * @Property engineVersion: Database instance version.Support 4.2
     */
    readonly engineVersion?: string;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;
    /**
     * @Property periodPriceType: Charge period for created instance.
     */
    readonly periodPriceType?: string;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger
     */
    readonly storageEngine?: string;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::MONGODB::ServerlessInstance`
 */
export declare class RosServerlessInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ServerlessInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    readonly attrConnectionUri: any;
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: any;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
     */
    dbInstanceStorage: number;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    accountPassword: string | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    chargeType: string | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | undefined;
    /**
     * @Property engineVersion: Database instance version.Support 4.2
     */
    engineVersion: string | undefined;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    networkType: string | undefined;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | undefined;
    /**
     * @Property periodPriceType: Charge period for created instance.
     */
    periodPriceType: string | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    securityIpArray: string | undefined;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger
     */
    storageEngine: string | undefined;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::MONGODB::ServerlessInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerlessInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::MONGODB::ShardingInstance`
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
    readonly accountPassword?: string;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;
    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    readonly engineVersion?: string;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;
    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::MONGODB::ShardingInstance`
 */
export declare class RosShardingInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: any;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: any;
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
    accountPassword: string | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    chargeType: string | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | undefined;
    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    engineVersion: string | undefined;
    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    networkType: string | undefined;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | undefined;
    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    protocolType: string | undefined;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    restoreTime: string | undefined;
    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    securityIpArray: string | undefined;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    srcDbInstanceId: string | undefined;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    storageEngine: string | undefined;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::MONGODB::ShardingInstance`.
     *
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
        readonly storage: number;
        /**
         * @Property class: The specification of config server.
         */
        readonly class: string;
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
        readonly class: string;
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
        readonly storage: number;
        /**
         * @Property class: The specification of shard.
         */
        readonly class: string;
    }
}
