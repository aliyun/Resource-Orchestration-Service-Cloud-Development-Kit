import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DTS::ConsumerGroup`
 */
export interface RosConsumerGroupProps {
    /**
     * @Property consumerGroupName: Consumer group name.
     */
    readonly consumerGroupName: string | ros.IResolvable;
    /**
     * @Property consumerGroupPassword: Password of consumer group.
     */
    readonly consumerGroupPassword: string | ros.IResolvable;
    /**
     * @Property consumerGroupUserName: User name of consumer group.
     */
    readonly consumerGroupUserName: string | ros.IResolvable;
    /**
     * @Property subscriptionInstanceId: Subscription instance ID.
     */
    readonly subscriptionInstanceId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::DTS::ConsumerGroup`
 */
export declare class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::ConsumerGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConsumerGroupID: Consumer group ID
     */
    readonly attrConsumerGroupId: ros.IResolvable;
    /**
     * @Attribute ConsumerGroupName: Consumer group name
     */
    readonly attrConsumerGroupName: ros.IResolvable;
    /**
     * @Attribute SubscriptionInstanceId: Subscription instance ID
     */
    readonly attrSubscriptionInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property consumerGroupName: Consumer group name.
     */
    consumerGroupName: string | ros.IResolvable;
    /**
     * @Property consumerGroupPassword: Password of consumer group.
     */
    consumerGroupPassword: string | ros.IResolvable;
    /**
     * @Property consumerGroupUserName: User name of consumer group.
     */
    consumerGroupUserName: string | ros.IResolvable;
    /**
     * @Property subscriptionInstanceId: Subscription instance ID.
     */
    subscriptionInstanceId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::DTS::ConsumerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::DTS::MigrationJob`
 */
export interface RosMigrationJobProps {
    /**
     * @Property migrationJobClass: Migrating instance specifications, which can be:
     * small, medium, large and so on.
     * Various specifications of the reference data migration test performance specifications
     */
    readonly migrationJobClass: string | ros.IResolvable;
    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    readonly destinationEndpoint?: RosMigrationJob.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property migrationJobName: Migrating job name
     */
    readonly migrationJobName?: string | ros.IResolvable;
    /**
     * @Property migrationMode: Migration mode
     */
    readonly migrationMode?: RosMigrationJob.MigrationModeProperty | ros.IResolvable;
    /**
     * @Property migrationObject: Objects that need to be migrated
     */
    readonly migrationObject?: Array<RosMigrationJob.MigrationObjectProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    readonly sourceEndpoint?: RosMigrationJob.SourceEndpointProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::DTS::MigrationJob`
 */
export declare class RosMigrationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::MigrationJob";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute MigrationJobId: Migration tasks task ID
     */
    readonly attrMigrationJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property migrationJobClass: Migrating instance specifications, which can be:
     * small, medium, large and so on.
     * Various specifications of the reference data migration test performance specifications
     */
    migrationJobClass: string | ros.IResolvable;
    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    destinationEndpoint: RosMigrationJob.DestinationEndpointProperty | ros.IResolvable | undefined;
    /**
     * @Property migrationJobName: Migrating job name
     */
    migrationJobName: string | ros.IResolvable | undefined;
    /**
     * @Property migrationMode: Migration mode
     */
    migrationMode: RosMigrationJob.MigrationModeProperty | ros.IResolvable | undefined;
    /**
     * @Property migrationObject: Objects that need to be migrated
     */
    migrationObject: Array<RosMigrationJob.MigrationObjectProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    sourceEndpoint: RosMigrationJob.SourceEndpointProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::DTS::MigrationJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface ColumnExcludesProperty {
        /**
         * @Property columnName: Column names are not migrated in the table to be migrated
         */
        readonly columnName?: string | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface ColumnIncludesProperty {
        /**
         * @Property newColumnName: The name of the column to be migrated to be mapped in the target instance
         */
        readonly newColumnName?: string | ros.IResolvable;
        /**
         * @Property columnName: The column name to be migrated in the table to be migrated
         */
        readonly columnName?: string | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface DestinationEndpointProperty {
        /**
         * @Property role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property userName: Target instance access account
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property instanceId: Target instance ID
     * When the DestinationEndpoint.InstanceType value is RDS, this parameter needs to be passed to the RDS instance ID.
     * When the DestinationEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
     * When the DestinationEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
     * When the DestinationEndpoint.InstanceType value is Redis, this parameter needs to be passed in the Redis instance ID.
     * When the DestinationEndpoint.InstanceType value is DRDS, this parameter needs to be passed to the DRDS instance ID.
     * When the DestinationEndpoint.InstanceType value is PetaData, this parameter needs to pass in the PetaData instance ID.
     * When the DestinationEndpoint.InstanceType value is OceanBase, this parameter needs to be passed to the OceanBase instance ID.
     * When the DestinationEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to the POLARDB for MySQL cluster ID.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The connection address of the target instance. Required when the source instance is a self-built database.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The listening port of the target instance, which is required when the source instance is a self-built database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
         */
        readonly region: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the target instance, including:
     * RDS: Alibaba Cloud RDS instance
     * ECS: Self-built database on ECS
     * LocalInstance: Self-built database of local IDC
     * MongoDB: Alibaba Cloud MongoDB instance
     * Redis: Alibaba Cloud Redis instance
     * DRDS: Alibaba Cloud DRDS instance
     * PetaData: Alibaba Cloud PetaData instance
     * OceanBase: Alibaba Cloud OceanBase instance
     * POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
     * MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property password: Target instance password
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface MigrationModeProperty {
        /**
         * @Property structureIntialization: Whether the migration task performs structural migration, and the values include:
     * true: indicates that a structure migration is required.
     * false: indicates no structural migration
         */
        readonly structureIntialization?: boolean | ros.IResolvable;
        /**
         * @Property dataSynchronization: Whether the migration task synchronizes incremental data, including:
     * true: Indicates that incremental data synchronization is required.
     * false: Indicates that incremental data synchronization is not performed.
         */
        readonly dataSynchronization?: boolean | ros.IResolvable;
        /**
         * @Property dataIntialization: Whether the migration task performs full data migration, and the values include:
     * true: indicates that full data migration is required.
     * false: indicates no structural migration
         */
        readonly dataIntialization?: boolean | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface MigrationObjectProperty {
        /**
         * @Property tableIncludes: Table configuration
         */
        readonly tableIncludes?: Array<RosMigrationJob.TableIncludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dbName: db name to be migrated
         */
        readonly dbName?: string | ros.IResolvable;
        /**
         * @Property tableExcludes: Table excludes configuration
         */
        readonly tableExcludes?: Array<RosMigrationJob.TableExcludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property schemaName: Schema name to be migrated
         */
        readonly schemaName?: string | ros.IResolvable;
        /**
         * @Property newSchemaName: Schema name to be migrated by Schema in the target instance
         */
        readonly newSchemaName?: string | ros.IResolvable;
        /**
         * @Property newDbName: The name of the db to be migrated in the target instance.
         */
        readonly newDbName?: string | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface SourceEndpointProperty {
        /**
         * @Property role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: Source instance access account
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property instanceId: Source instance ID.
     * When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
     * When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
     * When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
     * When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
     * When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The connection address of the source instance. Required when the source instance is a self-built database.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The listening port of the source instance, which is required when the source instance is a self-built database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
         */
        readonly region: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the migration source instance, including:
     * RDS: Alibaba Cloud RDS instance
     * ECS: Self-built database on ECS
     * LocalInstance: Self-built database with public IP address
     * Express: self-built database accessed via dedicated line
     * MongoDB: Ali cloud MongoDB instance
     * POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
     *
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
     * MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property password: Source instance password
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface TableExcludesProperty {
        /**
         * @Property tableName: The name of the table to be migrated does not require the table name of the migration table.
         */
        readonly tableName?: string | ros.IResolvable;
    }
}
export declare namespace RosMigrationJob {
    /**
     * @stability external
     */
    interface TableIncludesProperty {
        /**
         * @Property tableName: Table name to be migrated
         */
        readonly tableName?: string | ros.IResolvable;
        /**
         * @Property filterCondition: Where condition
         */
        readonly filterCondition?: string | ros.IResolvable;
        /**
         * @Property columnExcludes: Column excludes configuration
         */
        readonly columnExcludes?: Array<RosMigrationJob.ColumnExcludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property columnIncludes: Column includes configuration
         */
        readonly columnIncludes?: Array<RosMigrationJob.ColumnIncludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property newTableName: The name of the table to be migrated in the target instance mapping
         */
        readonly newTableName?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::DTS::SubscriptionInstance`
 */
export interface RosSubscriptionInstanceProps {
    /**
     * @Property configuration: Subscription configuration.
     */
    readonly configuration?: RosSubscriptionInstance.ConfigurationProperty | ros.IResolvable;
    /**
     * @Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. Default: MySQL.
     */
    readonly sourceEndpointInstanceType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::DTS::SubscriptionInstance`
 */
export declare class RosSubscriptionInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SubscriptionInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute PrivateHost: Private host.
     */
    readonly attrPrivateHost: ros.IResolvable;
    /**
     * @Attribute PublicHost: Public host.
     */
    readonly attrPublicHost: ros.IResolvable;
    /**
     * @Attribute SubscriptionInstanceId: The ID of Data subscription instance.
     */
    readonly attrSubscriptionInstanceId: ros.IResolvable;
    /**
     * @Attribute VPCHost: VPC host.
     */
    readonly attrVpcHost: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configuration: Subscription configuration.
     */
    configuration: RosSubscriptionInstance.ConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. Default: MySQL.
     */
    sourceEndpointInstanceType: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    interface ConfigurationProperty {
        /**
         * @Property subscriptionObject: Objects that need to be migrated.
         */
        readonly subscriptionObject: Array<RosSubscriptionInstance.SubscriptionObjectProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property subscriptionDataType: undefined
         */
        readonly subscriptionDataType: RosSubscriptionInstance.SubscriptionDataTypeProperty | ros.IResolvable;
        /**
         * @Property subscriptionInstanceName: Subscription instance name.
         */
        readonly subscriptionInstanceName?: string | ros.IResolvable;
        /**
         * @Property subscriptionInstance: undefined
         */
        readonly subscriptionInstance?: RosSubscriptionInstance.SubscriptionInstanceProperty | ros.IResolvable;
        /**
         * @Property sourceEndpoint: Migration source configuration.
         */
        readonly sourceEndpoint: RosSubscriptionInstance.SourceEndpointProperty | ros.IResolvable;
        /**
         * @Property subscriptionInstanceNetworkType: Network type: classic or vpc.
         */
        readonly subscriptionInstanceNetworkType?: string | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    interface SourceEndpointProperty {
        /**
         * @Property role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: Source instance access account
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property instanceId: Source instance ID.
     * When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
     * When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The connection address of the source instance. Required when the source instance is a self-built database.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The listening port of the source instance, which is required when the source instance is a self-built database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property databaseName: The database library name used when creating the connection.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the subscription source instance, including:
     * RDS: Alibaba Cloud RDS instance
     * ECS: Self-built database on ECS
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property password: Source instance password
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    interface SubscriptionDataTypeProperty {
        /**
         * @Property dml: Whether to subscribe to DML type data.
         */
        readonly dml: boolean | ros.IResolvable;
        /**
         * @Property ddl: Whether to subscribe to DDL type data.
         */
        readonly ddl: boolean | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    interface SubscriptionInstanceProperty {
        /**
         * @Property vpcId: undefined
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: undefined
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    interface SubscriptionObjectProperty {
        /**
         * @Property tableIncludes: Table configuration.
         */
        readonly tableIncludes?: Array<RosSubscriptionInstance.TableIncludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dbName: db name to be subscribed.
         */
        readonly dbName?: string | ros.IResolvable;
        /**
         * @Property tableExcludes: Table excludes configuration.
         */
        readonly tableExcludes?: Array<RosSubscriptionInstance.TableExcludesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    interface TableExcludesProperty {
        /**
         * @Property tableName: Table name not to be subscribed.
         */
        readonly tableName?: string | ros.IResolvable;
    }
}
export declare namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    interface TableIncludesProperty {
        /**
         * @Property tableName: Table name to be subscribed.
         */
        readonly tableName?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::DTS::SynchronizationJob`
 */
export interface RosSynchronizationJobProps {
    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    readonly destinationEndpoint: RosSynchronizationJob.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property destRegion: Region where the synchronization target instance is located.
     */
    readonly destRegion: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    readonly sourceEndpoint: RosSynchronizationJob.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property sourceRegion: Region where the synchronization source instance is located.
     */
    readonly sourceRegion: string | ros.IResolvable;
    /**
     * @Property synchronizationJobClass: Synchronous instance specifications, which can be:
     * micro, small, medium, large and so on. The default value is: small
     */
    readonly synchronizationJobClass: string | ros.IResolvable;
    /**
     * @Property dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
     * false: no full data initialization
     * The default value is: true
     */
    readonly dataInitialization?: boolean | ros.IResolvable;
    /**
     * @Property networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property payType: Payment type, which include:
     * Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
     * Year: Annual, Month: monthly
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
     * false: no result object initialization
     * The default value is: true
     */
    readonly structureInitialization?: boolean | ros.IResolvable;
    /**
     * @Property synchronizationObjects: Objects that need to be synchronized
     */
    readonly synchronizationObjects?: Array<RosSynchronizationJob.SynchronizationObjectsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
     */
    readonly topology?: string | ros.IResolvable;
    /**
     * @Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
     */
    readonly usedTime?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::DTS::SynchronizationJob`
 */
export declare class RosSynchronizationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SynchronizationJob";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SynchronizationJobId: Synchronization instance ID
     */
    readonly attrSynchronizationJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    destinationEndpoint: RosSynchronizationJob.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property destRegion: Region where the synchronization target instance is located.
     */
    destRegion: string | ros.IResolvable;
    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    sourceEndpoint: RosSynchronizationJob.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property sourceRegion: Region where the synchronization source instance is located.
     */
    sourceRegion: string | ros.IResolvable;
    /**
     * @Property synchronizationJobClass: Synchronous instance specifications, which can be:
     * micro, small, medium, large and so on. The default value is: small
     */
    synchronizationJobClass: string | ros.IResolvable;
    /**
     * @Property dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
     * false: no full data initialization
     * The default value is: true
     */
    dataInitialization: boolean | ros.IResolvable | undefined;
    /**
     * @Property networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property payType: Payment type, which include:
     * Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
     * Year: Annual, Month: monthly
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
     * false: no result object initialization
     * The default value is: true
     */
    structureInitialization: boolean | ros.IResolvable | undefined;
    /**
     * @Property synchronizationObjects: Objects that need to be synchronized
     */
    synchronizationObjects: Array<RosSynchronizationJob.SynchronizationObjectsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
     */
    topology: string | ros.IResolvable | undefined;
    /**
     * @Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
     */
    usedTime: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    interface ColumnExcludesProperty {
        /**
         * @Property columnName: Column names are not synchronized in the table to be synchronized
         */
        readonly columnName?: string | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    interface ColumnIncludesProperty {
        /**
         * @Property newColumnName: The name of the column to be synchronized to be mapped in the target instance
         */
        readonly newColumnName?: string | ros.IResolvable;
        /**
         * @Property columnName: The column name to be synchronized in the table to be synchronized
         */
        readonly columnName?: string | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    interface DestinationEndpointProperty {
        /**
         * @Property userName: Target instance access account
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: Target instance ID.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The connection address of the target instance. Required if the target instance is a local DB accessed through a dedicated line.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: Listening port of the target instance. Required when the target instance is ECS or a local DB accessed through a dedicated line.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the synchronization target instance for configuration, including:
     * Redis: Alibaba Cloud Redis instance
     * RDS: Alibaba Cloud RDS instance
     * POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
     * ECS: Self-built database on ECS
     * Express: self-built database accessed via dedicated line
     * MaxCompute: Alibaba Cloud MaxCompute instance
     * DataHub: Alibaba Cloud DataHub instance
     * AnalyticDB: Alibaba Cloud Analytic Database MySQL Version (2.0)
     * AnalyticDB30: Alibaba Cloud Analytic Database MySQL Version (3.0)
     * Greenplum: Cloud-native data warehouse ADB PostgreSQL version (formerly analytical database PostgreSQL version).
     * The default value is RDS
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property instanceTypeForCreation: The instance type of the synchronization target instance for creation, including:
     * MySQL: Alibaba Cloud MySQL instance
     * PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
     * MaxCompute: Alibaba Cloud MaxCompute instance.
     * If this property is not specified, it will be same with InstanceType
         */
        readonly instanceTypeForCreation?: string | ros.IResolvable;
        /**
         * @Property password: Target instance password
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    interface SourceEndpointProperty {
        /**
         * @Property role: When the synchronization source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the authorized role of the account to which the source instance belongs to the Alibaba Cloud account to which the target instance belongs, and the relevant permissions and authorization steps of the reference.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property userName: Source instance access account
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property ownerId: When the source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the UID of the Alibaba Cloud account to which the source instance belongs.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property instanceId: Source instance ID.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The connection address of the source instance. Required if the source instance is a local DB accessed through a dedicated line.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: Listening port of the source instance. Required when the source instance is ECS or a local DB accessed through a dedicated line.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the synchronization source instance for configuration, including:
     * Redis: Alibaba Cloud Redis instance
     * RDS: Alibaba Cloud RDS instance
     * POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
     * ECS: Self-built database on ECS
     * Express: Self-built database accessed via dedicated line
     * dg: Self-built database accessed via the database gateway DG
     * cen: Self-built database accessed via the cloud enterprise network CEN.
     * The default value is RDS.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property instanceTypeForCreation: The instance type of the synchronization source instance for creation, including:
     * MySQL: Alibaba Cloud MySQL instance
     * PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
     * Redis: Alibaba Cloud Redis instance.
     * If this property is not specified, it will be same with InstanceType.
         */
        readonly instanceTypeForCreation?: string | ros.IResolvable;
        /**
         * @Property password: Source instance password
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    interface SynchronizationObjectsProperty {
        /**
         * @Property tableIncludes: Table configuration
         */
        readonly tableIncludes?: Array<RosSynchronizationJob.TableIncludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dbName: db name to be synchronized
         */
        readonly dbName?: string | ros.IResolvable;
        /**
         * @Property tableExcludes: Table excludes configuration
         */
        readonly tableExcludes?: Array<RosSynchronizationJob.TableExcludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property schemaName: Schema name to be synchronized
         */
        readonly schemaName?: string | ros.IResolvable;
        /**
         * @Property newSchemaName: Schema name to be synchronized by Schema in the target instance
         */
        readonly newSchemaName?: string | ros.IResolvable;
        /**
         * @Property newDbName: The name of the db to be synchronized in the target instance.
         */
        readonly newDbName?: string | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    interface TableExcludesProperty {
        /**
         * @Property tableName: The name of the table to be synchronized does not require the table name of the migration table.
         */
        readonly tableName?: string | ros.IResolvable;
    }
}
export declare namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    interface TableIncludesProperty {
        /**
         * @Property tableName: Table name to be synchronized
         */
        readonly tableName?: string | ros.IResolvable;
        /**
         * @Property filterCondition: Where condition
         */
        readonly filterCondition?: string | ros.IResolvable;
        /**
         * @Property columnExcludes: Column excludes configuration
         */
        readonly columnExcludes?: Array<RosSynchronizationJob.ColumnExcludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property columnIncludes: Column includes configuration
         */
        readonly columnIncludes?: Array<RosSynchronizationJob.ColumnIncludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property newTableName: The name of the table to be synchronized in the target instance mapping
         */
        readonly newTableName?: string | ros.IResolvable;
    }
}
