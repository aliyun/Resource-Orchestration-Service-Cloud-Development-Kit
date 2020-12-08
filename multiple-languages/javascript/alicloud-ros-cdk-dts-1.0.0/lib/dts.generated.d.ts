import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DTS::MigrationJob`
 */
export interface RosMigrationJobProps {
    /**
     * @Property migrationJobClass: Migrating instance specifications, which can be:
     * small, medium, large and so on.
     * Various specifications of the reference data migration test performance specifications
     */
    readonly migrationJobClass: string;
    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    readonly destinationEndpoint?: RosMigrationJob.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property migrationJobName: Migrating job name
     */
    readonly migrationJobName?: string;
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
    readonly attrMigrationJobId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property migrationJobClass: Migrating instance specifications, which can be:
     * small, medium, large and so on.
     * Various specifications of the reference data migration test performance specifications
     */
    migrationJobClass: string;
    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    destinationEndpoint: RosMigrationJob.DestinationEndpointProperty | ros.IResolvable | undefined;
    /**
     * @Property migrationJobName: Migrating job name
     */
    migrationJobName: string | undefined;
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
        readonly columnName?: string;
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
        readonly newColumnName?: string;
        /**
         * @Property columnName: The column name to be migrated in the table to be migrated
         */
        readonly columnName?: string;
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
        readonly role?: string;
        /**
         * @Property userName: Target instance access account
         */
        readonly userName: string;
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
        readonly instanceId?: string;
        /**
         * @Property ip: The connection address of the target instance. Required when the source instance is a self-built database.
         */
        readonly ip?: string;
        /**
         * @Property port: The listening port of the target instance, which is required when the source instance is a self-built database.
         */
        readonly port?: string;
        /**
         * @Property databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
         */
        readonly databaseName?: string;
        /**
         * @Property region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
         */
        readonly region: string;
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
        readonly instanceType: string;
        /**
         * @Property engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
     * MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
         */
        readonly engineName?: string;
        /**
         * @Property password: Target instance password
         */
        readonly password: string;
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
        readonly dbName?: string;
        /**
         * @Property tableExcludes: Table excludes configuration
         */
        readonly tableExcludes?: Array<RosMigrationJob.TableExcludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property schemaName: Schema name to be migrated
         */
        readonly schemaName?: string;
        /**
         * @Property newSchemaName: Schema name to be migrated by Schema in the target instance
         */
        readonly newSchemaName?: string;
        /**
         * @Property newDbName: The name of the db to be migrated in the target instance.
         */
        readonly newDbName?: string;
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
        readonly role?: string;
        /**
         * @Property oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
         */
        readonly oracleSid?: string;
        /**
         * @Property userName: Source instance access account
         */
        readonly userName: string;
        /**
         * @Property ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
         */
        readonly ownerId?: string;
        /**
         * @Property instanceId: Source instance ID.
     * When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
     * When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
     * When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
     * When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
     * When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
         */
        readonly instanceId?: string;
        /**
         * @Property ip: The connection address of the source instance. Required when the source instance is a self-built database.
         */
        readonly ip?: string;
        /**
         * @Property port: The listening port of the source instance, which is required when the source instance is a self-built database.
         */
        readonly port?: string;
        /**
         * @Property databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
         */
        readonly databaseName?: string;
        /**
         * @Property region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
         */
        readonly region: string;
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
        readonly instanceType: string;
        /**
         * @Property engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
     * MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
         */
        readonly engineName?: string;
        /**
         * @Property password: Source instance password
         */
        readonly password: string;
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
        readonly tableName?: string;
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
        readonly tableName?: string;
        /**
         * @Property filterCondition: Where condition
         */
        readonly filterCondition?: string;
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
        readonly newTableName?: string;
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
    readonly destRegion: string;
    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    readonly sourceEndpoint: RosSynchronizationJob.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property sourceRegion: Region where the synchronization source instance is located.
     */
    readonly sourceRegion: string;
    /**
     * @Property synchronizationJobClass: Synchronous instance specifications, which can be:
     * micro, small, medium, large and so on. The default value is: small
     */
    readonly synchronizationJobClass: string;
    /**
     * @Property dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
     * false: no full data initialization
     * The default value is: true
     */
    readonly dataInitialization?: boolean | ros.IResolvable;
    /**
     * @Property networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
     */
    readonly networkType?: string;
    /**
     * @Property payType: Payment type, which include:
     * Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
     */
    readonly payType?: string;
    /**
     * @Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
     * Year: Annual, Month: monthly
     */
    readonly period?: string;
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
    readonly topology?: string;
    /**
     * @Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
     */
    readonly usedTime?: number;
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
    readonly attrSynchronizationJobId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    destinationEndpoint: RosSynchronizationJob.DestinationEndpointProperty | ros.IResolvable;
    /**
     * @Property destRegion: Region where the synchronization target instance is located.
     */
    destRegion: string;
    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    sourceEndpoint: RosSynchronizationJob.SourceEndpointProperty | ros.IResolvable;
    /**
     * @Property sourceRegion: Region where the synchronization source instance is located.
     */
    sourceRegion: string;
    /**
     * @Property synchronizationJobClass: Synchronous instance specifications, which can be:
     * micro, small, medium, large and so on. The default value is: small
     */
    synchronizationJobClass: string;
    /**
     * @Property dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
     * false: no full data initialization
     * The default value is: true
     */
    dataInitialization: boolean | ros.IResolvable | undefined;
    /**
     * @Property networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
     */
    networkType: string | undefined;
    /**
     * @Property payType: Payment type, which include:
     * Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
     */
    payType: string | undefined;
    /**
     * @Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
     * Year: Annual, Month: monthly
     */
    period: string | undefined;
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
    topology: string | undefined;
    /**
     * @Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
     */
    usedTime: number | undefined;
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
        readonly columnName?: string;
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
        readonly newColumnName?: string;
        /**
         * @Property columnName: The column name to be synchronized in the table to be synchronized
         */
        readonly columnName?: string;
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
        readonly userName?: string;
        /**
         * @Property instanceId: Target instance ID.
         */
        readonly instanceId?: string;
        /**
         * @Property ip: The connection address of the target instance. Required if the target instance is a local DB accessed through a dedicated line.
         */
        readonly ip?: string;
        /**
         * @Property port: Listening port of the target instance. Required when the target instance is ECS or a local DB accessed through a dedicated line.
         */
        readonly port?: string;
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
        readonly instanceType: string;
        /**
         * @Property instanceTypeForCreation: The instance type of the synchronization target instance for creation, including:
     * MySQL: Alibaba Cloud MySQL instance
     * PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
     * MaxCompute: Alibaba Cloud MaxCompute instance.
     * If this property is not specified, it will be same with InstanceType
         */
        readonly instanceTypeForCreation?: string;
        /**
         * @Property password: Target instance password
         */
        readonly password?: string;
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
        readonly role?: string;
        /**
         * @Property userName: Source instance access account
         */
        readonly userName?: string;
        /**
         * @Property ownerId: When the source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the UID of the Alibaba Cloud account to which the source instance belongs.
         */
        readonly ownerId?: string;
        /**
         * @Property instanceId: Source instance ID.
         */
        readonly instanceId?: string;
        /**
         * @Property ip: The connection address of the source instance. Required if the source instance is a local DB accessed through a dedicated line.
         */
        readonly ip?: string;
        /**
         * @Property port: Listening port of the source instance. Required when the source instance is ECS or a local DB accessed through a dedicated line.
         */
        readonly port?: string;
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
        readonly instanceType: string;
        /**
         * @Property instanceTypeForCreation: The instance type of the synchronization source instance for creation, including:
     * MySQL: Alibaba Cloud MySQL instance
     * PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
     * Redis: Alibaba Cloud Redis instance.
     * If this property is not specified, it will be same with InstanceType.
         */
        readonly instanceTypeForCreation?: string;
        /**
         * @Property password: Source instance password
         */
        readonly password?: string;
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
        readonly dbName?: string;
        /**
         * @Property tableExcludes: Table excludes configuration
         */
        readonly tableExcludes?: Array<RosSynchronizationJob.TableExcludesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property schemaName: Schema name to be synchronized
         */
        readonly schemaName?: string;
        /**
         * @Property newSchemaName: Schema name to be synchronized by Schema in the target instance
         */
        readonly newSchemaName?: string;
        /**
         * @Property newDbName: The name of the db to be synchronized in the target instance.
         */
        readonly newDbName?: string;
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
        readonly tableName?: string;
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
        readonly tableName?: string;
        /**
         * @Property filterCondition: Where condition
         */
        readonly filterCondition?: string;
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
        readonly newTableName?: string;
    }
}
