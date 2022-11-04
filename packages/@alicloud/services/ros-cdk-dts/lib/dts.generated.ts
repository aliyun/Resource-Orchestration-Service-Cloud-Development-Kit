// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosConsumerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('consumerGroupPassword', ros.requiredValidator)(properties.consumerGroupPassword));
    errors.collect(ros.propertyValidator('consumerGroupPassword', ros.validateString)(properties.consumerGroupPassword));
    errors.collect(ros.propertyValidator('consumerGroupUserName', ros.requiredValidator)(properties.consumerGroupUserName));
    errors.collect(ros.propertyValidator('consumerGroupUserName', ros.validateString)(properties.consumerGroupUserName));
    errors.collect(ros.propertyValidator('consumerGroupName', ros.requiredValidator)(properties.consumerGroupName));
    errors.collect(ros.propertyValidator('consumerGroupName', ros.validateString)(properties.consumerGroupName));
    errors.collect(ros.propertyValidator('subscriptionInstanceId', ros.requiredValidator)(properties.subscriptionInstanceId));
    errors.collect(ros.propertyValidator('subscriptionInstanceId', ros.validateString)(properties.subscriptionInstanceId));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::ConsumerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::ConsumerGroup` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ConsumerGroupName: ros.stringToRosTemplate(properties.consumerGroupName),
      ConsumerGroupPassword: ros.stringToRosTemplate(properties.consumerGroupPassword),
      ConsumerGroupUserName: ros.stringToRosTemplate(properties.consumerGroupUserName),
      SubscriptionInstanceId: ros.stringToRosTemplate(properties.subscriptionInstanceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::DTS::ConsumerGroup`
 */
export class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::ConsumerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConsumerGroupID: Consumer group ID
     */
    public readonly attrConsumerGroupId: ros.IResolvable;

    /**
     * @Attribute ConsumerGroupName: Consumer group name
     */
    public readonly attrConsumerGroupName: ros.IResolvable;

    /**
     * @Attribute SubscriptionInstanceId: Subscription instance ID
     */
    public readonly attrSubscriptionInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property consumerGroupName: Consumer group name.
     */
    public consumerGroupName: string | ros.IResolvable;

    /**
     * @Property consumerGroupPassword: Password of consumer group.
     */
    public consumerGroupPassword: string | ros.IResolvable;

    /**
     * @Property consumerGroupUserName: User name of consumer group.
     */
    public consumerGroupUserName: string | ros.IResolvable;

    /**
     * @Property subscriptionInstanceId: Subscription instance ID.
     */
    public subscriptionInstanceId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::DTS::ConsumerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerGroupId = this.getAtt('ConsumerGroupID');
        this.attrConsumerGroupName = this.getAtt('ConsumerGroupName');
        this.attrSubscriptionInstanceId = this.getAtt('SubscriptionInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.consumerGroupName = props.consumerGroupName;
        this.consumerGroupPassword = props.consumerGroupPassword;
        this.consumerGroupUserName = props.consumerGroupUserName;
        this.subscriptionInstanceId = props.subscriptionInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            consumerGroupName: this.consumerGroupName,
            consumerGroupPassword: this.consumerGroupPassword,
            consumerGroupUserName: this.consumerGroupUserName,
            subscriptionInstanceId: this.subscriptionInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosMigrationJobProps`
 *
 * @param properties - the TypeScript properties of a `RosMigrationJobProps`
 *
 * @returns the result of the validation.
 */
function RosMigrationJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('migrationObject', ros.listValidator(RosMigrationJob_MigrationObjectPropertyValidator))(properties.migrationObject));
    errors.collect(ros.propertyValidator('destinationEndpoint', RosMigrationJob_DestinationEndpointPropertyValidator)(properties.destinationEndpoint));
    errors.collect(ros.propertyValidator('migrationJobClass', ros.requiredValidator)(properties.migrationJobClass));
    errors.collect(ros.propertyValidator('migrationJobClass', ros.validateString)(properties.migrationJobClass));
    errors.collect(ros.propertyValidator('sourceEndpoint', RosMigrationJob_SourceEndpointPropertyValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('migrationJobName', ros.validateString)(properties.migrationJobName));
    errors.collect(ros.propertyValidator('migrationMode', RosMigrationJob_MigrationModePropertyValidator)(properties.migrationMode));
    return errors.wrap('supplied properties not correct for "RosMigrationJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob` resource
 *
 * @param properties - the TypeScript properties of a `RosMigrationJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMigrationJobPropsValidator(properties).assertSuccess();
    }
    return {
      MigrationJobClass: ros.stringToRosTemplate(properties.migrationJobClass),
      DestinationEndpoint: rosMigrationJobDestinationEndpointPropertyToRosTemplate(properties.destinationEndpoint),
      MigrationJobName: ros.stringToRosTemplate(properties.migrationJobName),
      MigrationMode: rosMigrationJobMigrationModePropertyToRosTemplate(properties.migrationMode),
      MigrationObject: ros.listMapper(rosMigrationJobMigrationObjectPropertyToRosTemplate)(properties.migrationObject),
      SourceEndpoint: rosMigrationJobSourceEndpointPropertyToRosTemplate(properties.sourceEndpoint),
    };
}

/**
 * A ROS template type:  `ALIYUN::DTS::MigrationJob`
 */
export class RosMigrationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::MigrationJob";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute MigrationJobId: Migration tasks task ID
     */
    public readonly attrMigrationJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property migrationJobClass: Migrating instance specifications, which can be:
     * small, medium, large and so on.
     * Various specifications of the reference data migration test performance specifications
     */
    public migrationJobClass: string | ros.IResolvable;

    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    public destinationEndpoint: RosMigrationJob.DestinationEndpointProperty | ros.IResolvable | undefined;

    /**
     * @Property migrationJobName: Migrating job name
     */
    public migrationJobName: string | ros.IResolvable | undefined;

    /**
     * @Property migrationMode: Migration mode
     */
    public migrationMode: RosMigrationJob.MigrationModeProperty | ros.IResolvable | undefined;

    /**
     * @Property migrationObject: Objects that need to be migrated
     */
    public migrationObject: Array<RosMigrationJob.MigrationObjectProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    public sourceEndpoint: RosMigrationJob.SourceEndpointProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::DTS::MigrationJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMigrationJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMigrationJobId = this.getAtt('MigrationJobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.migrationJobClass = props.migrationJobClass;
        this.destinationEndpoint = props.destinationEndpoint;
        this.migrationJobName = props.migrationJobName;
        this.migrationMode = props.migrationMode;
        this.migrationObject = props.migrationObject;
        this.sourceEndpoint = props.sourceEndpoint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            migrationJobClass: this.migrationJobClass,
            destinationEndpoint: this.destinationEndpoint,
            migrationJobName: this.migrationJobName,
            migrationMode: this.migrationMode,
            migrationObject: this.migrationObject,
            sourceEndpoint: this.sourceEndpoint,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMigrationJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface ColumnExcludesProperty {
        /**
         * @Property columnName: Column names are not migrated in the table to be migrated
         */
        readonly columnName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ColumnExcludesProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnExcludesProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_ColumnExcludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('columnName', ros.validateString)(properties.columnName));
    return errors.wrap('supplied properties not correct for "ColumnExcludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.ColumnExcludes` resource
 *
 * @param properties - the TypeScript properties of a `ColumnExcludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.ColumnExcludes` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobColumnExcludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_ColumnExcludesPropertyValidator(properties).assertSuccess();
    return {
      ColumnName: ros.stringToRosTemplate(properties.columnName),
    };
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface ColumnIncludesProperty {
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
/**
 * Determine whether the given properties match those of a `ColumnIncludesProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnIncludesProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_ColumnIncludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('newColumnName', ros.validateString)(properties.newColumnName));
    errors.collect(ros.propertyValidator('columnName', ros.validateString)(properties.columnName));
    return errors.wrap('supplied properties not correct for "ColumnIncludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.ColumnIncludes` resource
 *
 * @param properties - the TypeScript properties of a `ColumnIncludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.ColumnIncludes` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobColumnIncludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_ColumnIncludesPropertyValidator(properties).assertSuccess();
    return {
      NewColumnName: ros.stringToRosTemplate(properties.newColumnName),
      ColumnName: ros.stringToRosTemplate(properties.columnName),
    };
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface DestinationEndpointProperty {
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
/**
 * Determine whether the given properties match those of a `DestinationEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_DestinationEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('region', ros.requiredValidator)(properties.region));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["RDS","ECS","LocalInstance","MongoDB","Redis","DRDS","PetaData","OceanBase","POLARDB"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.engineName && (typeof properties.engineName) !== 'object') {
        errors.collect(ros.propertyValidator('engineName', ros.validateAllowedValues)({
          data: properties.engineName,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","PPAS","MongoDB","Redis"],
        }));
    }
    errors.collect(ros.propertyValidator('engineName', ros.validateString)(properties.engineName));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "DestinationEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.DestinationEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.DestinationEndpoint` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobDestinationEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_DestinationEndpointPropertyValidator(properties).assertSuccess();
    return {
      Role: ros.stringToRosTemplate(properties.role),
      UserName: ros.stringToRosTemplate(properties.userName),
      InstanceID: ros.stringToRosTemplate(properties.instanceId),
      IP: ros.stringToRosTemplate(properties.ip),
      Port: ros.stringToRosTemplate(properties.port),
      DatabaseName: ros.stringToRosTemplate(properties.databaseName),
      Region: ros.stringToRosTemplate(properties.region),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      EngineName: ros.stringToRosTemplate(properties.engineName),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface MigrationModeProperty {
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
/**
 * Determine whether the given properties match those of a `MigrationModeProperty`
 *
 * @param properties - the TypeScript properties of a `MigrationModeProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_MigrationModePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('structureIntialization', ros.validateBoolean)(properties.structureIntialization));
    errors.collect(ros.propertyValidator('dataSynchronization', ros.validateBoolean)(properties.dataSynchronization));
    errors.collect(ros.propertyValidator('dataIntialization', ros.validateBoolean)(properties.dataIntialization));
    return errors.wrap('supplied properties not correct for "MigrationModeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.MigrationMode` resource
 *
 * @param properties - the TypeScript properties of a `MigrationModeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.MigrationMode` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobMigrationModePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_MigrationModePropertyValidator(properties).assertSuccess();
    return {
      StructureIntialization: ros.booleanToRosTemplate(properties.structureIntialization),
      DataSynchronization: ros.booleanToRosTemplate(properties.dataSynchronization),
      DataIntialization: ros.booleanToRosTemplate(properties.dataIntialization),
    };
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface MigrationObjectProperty {
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
/**
 * Determine whether the given properties match those of a `MigrationObjectProperty`
 *
 * @param properties - the TypeScript properties of a `MigrationObjectProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_MigrationObjectPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tableIncludes', ros.listValidator(RosMigrationJob_TableIncludesPropertyValidator))(properties.tableIncludes));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('tableExcludes', ros.listValidator(RosMigrationJob_TableExcludesPropertyValidator))(properties.tableExcludes));
    errors.collect(ros.propertyValidator('schemaName', ros.validateString)(properties.schemaName));
    errors.collect(ros.propertyValidator('newSchemaName', ros.validateString)(properties.newSchemaName));
    errors.collect(ros.propertyValidator('newDbName', ros.validateString)(properties.newDbName));
    return errors.wrap('supplied properties not correct for "MigrationObjectProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.MigrationObject` resource
 *
 * @param properties - the TypeScript properties of a `MigrationObjectProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.MigrationObject` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobMigrationObjectPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_MigrationObjectPropertyValidator(properties).assertSuccess();
    return {
      TableIncludes: ros.listMapper(rosMigrationJobTableIncludesPropertyToRosTemplate)(properties.tableIncludes),
      DBName: ros.stringToRosTemplate(properties.dbName),
      TableExcludes: ros.listMapper(rosMigrationJobTableExcludesPropertyToRosTemplate)(properties.tableExcludes),
      SchemaName: ros.stringToRosTemplate(properties.schemaName),
      NewSchemaName: ros.stringToRosTemplate(properties.newSchemaName),
      NewDBName: ros.stringToRosTemplate(properties.newDbName),
    };
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface SourceEndpointProperty {
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
/**
 * Determine whether the given properties match those of a `SourceEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_SourceEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('oracleSid', ros.validateString)(properties.oracleSid));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('region', ros.requiredValidator)(properties.region));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["RDS","ECS","LocalInstance","Express","MongoDB","POLARDB"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.engineName && (typeof properties.engineName) !== 'object') {
        errors.collect(ros.propertyValidator('engineName', ros.validateAllowedValues)({
          data: properties.engineName,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","Oracle","MongoDB","Redis"],
        }));
    }
    errors.collect(ros.propertyValidator('engineName', ros.validateString)(properties.engineName));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "SourceEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.SourceEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.SourceEndpoint` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobSourceEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_SourceEndpointPropertyValidator(properties).assertSuccess();
    return {
      Role: ros.stringToRosTemplate(properties.role),
      OracleSID: ros.stringToRosTemplate(properties.oracleSid),
      UserName: ros.stringToRosTemplate(properties.userName),
      OwnerID: ros.stringToRosTemplate(properties.ownerId),
      InstanceID: ros.stringToRosTemplate(properties.instanceId),
      IP: ros.stringToRosTemplate(properties.ip),
      Port: ros.stringToRosTemplate(properties.port),
      DatabaseName: ros.stringToRosTemplate(properties.databaseName),
      Region: ros.stringToRosTemplate(properties.region),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      EngineName: ros.stringToRosTemplate(properties.engineName),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface TableExcludesProperty {
        /**
         * @Property tableName: The name of the table to be migrated does not require the table name of the migration table.
         */
        readonly tableName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TableExcludesProperty`
 *
 * @param properties - the TypeScript properties of a `TableExcludesProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_TableExcludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    return errors.wrap('supplied properties not correct for "TableExcludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.TableExcludes` resource
 *
 * @param properties - the TypeScript properties of a `TableExcludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.TableExcludes` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobTableExcludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_TableExcludesPropertyValidator(properties).assertSuccess();
    return {
      TableName: ros.stringToRosTemplate(properties.tableName),
    };
}

export namespace RosMigrationJob {
    /**
     * @stability external
     */
    export interface TableIncludesProperty {
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
 * Determine whether the given properties match those of a `TableIncludesProperty`
 *
 * @param properties - the TypeScript properties of a `TableIncludesProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob_TableIncludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    errors.collect(ros.propertyValidator('filterCondition', ros.validateString)(properties.filterCondition));
    errors.collect(ros.propertyValidator('columnExcludes', ros.listValidator(RosMigrationJob_ColumnExcludesPropertyValidator))(properties.columnExcludes));
    errors.collect(ros.propertyValidator('columnIncludes', ros.listValidator(RosMigrationJob_ColumnIncludesPropertyValidator))(properties.columnIncludes));
    errors.collect(ros.propertyValidator('newTableName', ros.validateString)(properties.newTableName));
    return errors.wrap('supplied properties not correct for "TableIncludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.TableIncludes` resource
 *
 * @param properties - the TypeScript properties of a `TableIncludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob.TableIncludes` resource.
 */
// @ts-ignore TS6133
function rosMigrationJobTableIncludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob_TableIncludesPropertyValidator(properties).assertSuccess();
    return {
      TableName: ros.stringToRosTemplate(properties.tableName),
      FilterCondition: ros.stringToRosTemplate(properties.filterCondition),
      ColumnExcludes: ros.listMapper(rosMigrationJobColumnExcludesPropertyToRosTemplate)(properties.columnExcludes),
      ColumnIncludes: ros.listMapper(rosMigrationJobColumnIncludesPropertyToRosTemplate)(properties.columnIncludes),
      NewTableName: ros.stringToRosTemplate(properties.newTableName),
    };
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
     * @Property payType: Payment type. Valid value:
     * PostPaid: Pay-as-you-go, which is default value.
     * PrePaid: subscription.
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property period: The unit of the subscription length. Valid values: Year and Month.
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
     * PolarDB: PolarDB for MySQL cluster.
     * polardb_o: PolarDB O Edition cluster.
     * polardb_pg: PolarDB for PostgreSQL cluster.
     * DRDS: PolarDB-X instance V1.0 or V2.0.
     * PostgreSQL: self-managed PostgreSQL database.
     * Oracle: self-managed Oracle database.
     */
    readonly sourceEndpointInstanceType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSubscriptionInstance.TagsProperty[];

    /**
     * @Property usedTime: The subscription length.
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     * You can set the Period parameter to specify the unit of the subscription length.
     */
    readonly usedTime?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSubscriptionInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('configuration', RosSubscriptionInstance_ConfigurationPropertyValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('usedTime', ros.validateNumber)(properties.usedTime));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: ["Year","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('sourceEndpointInstanceType', ros.validateString)(properties.sourceEndpointInstanceType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSubscriptionInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosSubscriptionInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSubscriptionInstancePropsValidator(properties).assertSuccess();
    }
    return {
      Configuration: rosSubscriptionInstanceConfigurationPropertyToRosTemplate(properties.configuration),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.stringToRosTemplate(properties.period),
      SourceEndpointInstanceType: ros.stringToRosTemplate(properties.sourceEndpointInstanceType),
      Tags: ros.listMapper(rosSubscriptionInstanceTagsPropertyToRosTemplate)(properties.tags),
      UsedTime: ros.numberToRosTemplate(properties.usedTime),
    };
}

/**
 * A ROS template type:  `ALIYUN::DTS::SubscriptionInstance`
 */
export class RosSubscriptionInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SubscriptionInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute PrivateHost: Private host.
     */
    public readonly attrPrivateHost: ros.IResolvable;

    /**
     * @Attribute PublicHost: Public host.
     */
    public readonly attrPublicHost: ros.IResolvable;

    /**
     * @Attribute SubscribeTopic: The topic of the change tracking instance.
     */
    public readonly attrSubscribeTopic: ros.IResolvable;

    /**
     * @Attribute SubscriptionInstanceId: The ID of Data subscription instance.
     */
    public readonly attrSubscriptionInstanceId: ros.IResolvable;

    /**
     * @Attribute VPCHost: VPC host.
     */
    public readonly attrVpcHost: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configuration: Subscription configuration.
     */
    public configuration: RosSubscriptionInstance.ConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property payType: Payment type. Valid value:
     * PostPaid: Pay-as-you-go, which is default value.
     * PrePaid: subscription.
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The unit of the subscription length. Valid values: Year and Month.
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
     * PolarDB: PolarDB for MySQL cluster.
     * polardb_o: PolarDB O Edition cluster.
     * polardb_pg: PolarDB for PostgreSQL cluster.
     * DRDS: PolarDB-X instance V1.0 or V2.0.
     * PostgreSQL: self-managed PostgreSQL database.
     * Oracle: self-managed Oracle database.
     */
    public sourceEndpointInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosSubscriptionInstance.TagsProperty[] | undefined;

    /**
     * @Property usedTime: The subscription length.
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     * You can set the Period parameter to specify the unit of the subscription length.
     */
    public usedTime: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSubscriptionInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPrivateHost = this.getAtt('PrivateHost');
        this.attrPublicHost = this.getAtt('PublicHost');
        this.attrSubscribeTopic = this.getAtt('SubscribeTopic');
        this.attrSubscriptionInstanceId = this.getAtt('SubscriptionInstanceId');
        this.attrVpcHost = this.getAtt('VPCHost');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configuration = props.configuration;
        this.payType = props.payType;
        this.period = props.period;
        this.sourceEndpointInstanceType = props.sourceEndpointInstanceType;
        this.tags = props.tags;
        this.usedTime = props.usedTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configuration: this.configuration,
            payType: this.payType,
            period: this.period,
            sourceEndpointInstanceType: this.sourceEndpointInstanceType,
            tags: this.tags,
            usedTime: this.usedTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubscriptionInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    export interface ConfigurationProperty {
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
         * @Property dbList: Subscription object, formatted as a JSON string. For detailed definitions, see the description of the migration, synchronization or subscription objects.
         */
        readonly dbList?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property subscriptionInstanceNetworkType: Network type: classic or vpc.
         */
        readonly subscriptionInstanceNetworkType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionInstance_ConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('subscriptionDataType', ros.requiredValidator)(properties.subscriptionDataType));
    errors.collect(ros.propertyValidator('subscriptionDataType', RosSubscriptionInstance_SubscriptionDataTypePropertyValidator)(properties.subscriptionDataType));
    errors.collect(ros.propertyValidator('subscriptionInstanceName', ros.validateString)(properties.subscriptionInstanceName));
    errors.collect(ros.propertyValidator('subscriptionInstance', RosSubscriptionInstance_SubscriptionInstancePropertyValidator)(properties.subscriptionInstance));
    errors.collect(ros.propertyValidator('sourceEndpoint', ros.requiredValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', RosSubscriptionInstance_SourceEndpointPropertyValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('dbList', ros.hashValidator(ros.validateAny))(properties.dbList));
    errors.collect(ros.propertyValidator('subscriptionInstanceNetworkType', ros.validateString)(properties.subscriptionInstanceNetworkType));
    return errors.wrap('supplied properties not correct for "ConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.Configuration` resource
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.Configuration` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionInstanceConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionInstance_ConfigurationPropertyValidator(properties).assertSuccess();
    return {
      SubscriptionDataType: rosSubscriptionInstanceSubscriptionDataTypePropertyToRosTemplate(properties.subscriptionDataType),
      SubscriptionInstanceName: ros.stringToRosTemplate(properties.subscriptionInstanceName),
      SubscriptionInstance: rosSubscriptionInstanceSubscriptionInstancePropertyToRosTemplate(properties.subscriptionInstance),
      SourceEndpoint: rosSubscriptionInstanceSourceEndpointPropertyToRosTemplate(properties.sourceEndpoint),
      DbList: ros.hashMapper(ros.objectToRosTemplate)(properties.dbList),
      SubscriptionInstanceNetworkType: ros.stringToRosTemplate(properties.subscriptionInstanceNetworkType),
    };
}

export namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    export interface SourceEndpointProperty {
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
     * PolarDB: PolarDB for MySQL cluster
     * LocalInstance: self-managed database with a public IP address
     * Express: self-managed database that is connected over Express Connect
     * CEN: self-managed database that is connected over Cloud Enterprise Network (CEN)
     * dg: self-managed database that is connected over Database Gateway
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property password: Source instance password
         */
        readonly password: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionInstance_SourceEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('oracleSid', ros.validateString)(properties.oracleSid));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "SourceEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.SourceEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.SourceEndpoint` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionInstanceSourceEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionInstance_SourceEndpointPropertyValidator(properties).assertSuccess();
    return {
      Role: ros.stringToRosTemplate(properties.role),
      OracleSID: ros.stringToRosTemplate(properties.oracleSid),
      UserName: ros.stringToRosTemplate(properties.userName),
      OwnerID: ros.stringToRosTemplate(properties.ownerId),
      InstanceID: ros.stringToRosTemplate(properties.instanceId),
      IP: ros.stringToRosTemplate(properties.ip),
      Port: ros.stringToRosTemplate(properties.port),
      DatabaseName: ros.stringToRosTemplate(properties.databaseName),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    export interface SubscriptionDataTypeProperty {
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
/**
 * Determine whether the given properties match those of a `SubscriptionDataTypeProperty`
 *
 * @param properties - the TypeScript properties of a `SubscriptionDataTypeProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionInstance_SubscriptionDataTypePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dml', ros.requiredValidator)(properties.dml));
    errors.collect(ros.propertyValidator('dml', ros.validateBoolean)(properties.dml));
    errors.collect(ros.propertyValidator('ddl', ros.requiredValidator)(properties.ddl));
    errors.collect(ros.propertyValidator('ddl', ros.validateBoolean)(properties.ddl));
    return errors.wrap('supplied properties not correct for "SubscriptionDataTypeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.SubscriptionDataType` resource
 *
 * @param properties - the TypeScript properties of a `SubscriptionDataTypeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.SubscriptionDataType` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionInstanceSubscriptionDataTypePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionInstance_SubscriptionDataTypePropertyValidator(properties).assertSuccess();
    return {
      DML: ros.booleanToRosTemplate(properties.dml),
      DDL: ros.booleanToRosTemplate(properties.ddl),
    };
}

export namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    export interface SubscriptionInstanceProperty {
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
/**
 * Determine whether the given properties match those of a `SubscriptionInstanceProperty`
 *
 * @param properties - the TypeScript properties of a `SubscriptionInstanceProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionInstance_SubscriptionInstancePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "SubscriptionInstanceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.SubscriptionInstance` resource
 *
 * @param properties - the TypeScript properties of a `SubscriptionInstanceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.SubscriptionInstance` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionInstanceSubscriptionInstancePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionInstance_SubscriptionInstancePropertyValidator(properties).assertSuccess();
    return {
      VPCId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

export namespace RosSubscriptionInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
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
 * Determine whether the given properties match those of a `RosSynchronizationJobProps`
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJobProps`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('synchronizationObjects', ros.listValidator(RosSynchronizationJob_SynchronizationObjectsPropertyValidator))(properties.synchronizationObjects));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: ["Year","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('topology', ros.validateString)(properties.topology));
    errors.collect(ros.propertyValidator('sourceRegion', ros.requiredValidator)(properties.sourceRegion));
    errors.collect(ros.propertyValidator('sourceRegion', ros.validateString)(properties.sourceRegion));
    errors.collect(ros.propertyValidator('dataInitialization', ros.validateBoolean)(properties.dataInitialization));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('destinationEndpoint', ros.requiredValidator)(properties.destinationEndpoint));
    errors.collect(ros.propertyValidator('destinationEndpoint', RosSynchronizationJob_DestinationEndpointPropertyValidator)(properties.destinationEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', ros.requiredValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', RosSynchronizationJob_SourceEndpointPropertyValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('usedTime', ros.validateNumber)(properties.usedTime));
    errors.collect(ros.propertyValidator('structureInitialization', ros.validateBoolean)(properties.structureInitialization));
    errors.collect(ros.propertyValidator('synchronizationJobClass', ros.requiredValidator)(properties.synchronizationJobClass));
    errors.collect(ros.propertyValidator('synchronizationJobClass', ros.validateString)(properties.synchronizationJobClass));
    errors.collect(ros.propertyValidator('destRegion', ros.requiredValidator)(properties.destRegion));
    errors.collect(ros.propertyValidator('destRegion', ros.validateString)(properties.destRegion));
    return errors.wrap('supplied properties not correct for "RosSynchronizationJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob` resource
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSynchronizationJobPropsValidator(properties).assertSuccess();
    }
    return {
      DestinationEndpoint: rosSynchronizationJobDestinationEndpointPropertyToRosTemplate(properties.destinationEndpoint),
      DestRegion: ros.stringToRosTemplate(properties.destRegion),
      SourceEndpoint: rosSynchronizationJobSourceEndpointPropertyToRosTemplate(properties.sourceEndpoint),
      SourceRegion: ros.stringToRosTemplate(properties.sourceRegion),
      SynchronizationJobClass: ros.stringToRosTemplate(properties.synchronizationJobClass),
      DataInitialization: ros.booleanToRosTemplate(properties.dataInitialization),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.stringToRosTemplate(properties.period),
      StructureInitialization: ros.booleanToRosTemplate(properties.structureInitialization),
      SynchronizationObjects: ros.listMapper(rosSynchronizationJobSynchronizationObjectsPropertyToRosTemplate)(properties.synchronizationObjects),
      Topology: ros.stringToRosTemplate(properties.topology),
      UsedTime: ros.numberToRosTemplate(properties.usedTime),
    };
}

/**
 * A ROS template type:  `ALIYUN::DTS::SynchronizationJob`
 */
export class RosSynchronizationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SynchronizationJob";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SynchronizationJobId: Synchronization instance ID
     */
    public readonly attrSynchronizationJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destinationEndpoint: Migration target configuration
     */
    public destinationEndpoint: RosSynchronizationJob.DestinationEndpointProperty | ros.IResolvable;

    /**
     * @Property destRegion: Region where the synchronization target instance is located.
     */
    public destRegion: string | ros.IResolvable;

    /**
     * @Property sourceEndpoint: Migration source configuration
     */
    public sourceEndpoint: RosSynchronizationJob.SourceEndpointProperty | ros.IResolvable;

    /**
     * @Property sourceRegion: Region where the synchronization source instance is located.
     */
    public sourceRegion: string | ros.IResolvable;

    /**
     * @Property synchronizationJobClass: Synchronous instance specifications, which can be:
     * micro, small, medium, large and so on. The default value is: small
     */
    public synchronizationJobClass: string | ros.IResolvable;

    /**
     * @Property dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
     * false: no full data initialization
     * The default value is: true
     */
    public dataInitialization: boolean | ros.IResolvable | undefined;

    /**
     * @Property networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property payType: Payment type, which include:
     * Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
     * Year: Annual, Month: monthly
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
     * false: no result object initialization
     * The default value is: true
     */
    public structureInitialization: boolean | ros.IResolvable | undefined;

    /**
     * @Property synchronizationObjects: Objects that need to be synchronized
     */
    public synchronizationObjects: Array<RosSynchronizationJob.SynchronizationObjectsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
     */
    public topology: string | ros.IResolvable | undefined;

    /**
     * @Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
     */
    public usedTime: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSynchronizationJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSynchronizationJobId = this.getAtt('SynchronizationJobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destinationEndpoint = props.destinationEndpoint;
        this.destRegion = props.destRegion;
        this.sourceEndpoint = props.sourceEndpoint;
        this.sourceRegion = props.sourceRegion;
        this.synchronizationJobClass = props.synchronizationJobClass;
        this.dataInitialization = props.dataInitialization;
        this.networkType = props.networkType;
        this.payType = props.payType;
        this.period = props.period;
        this.structureInitialization = props.structureInitialization;
        this.synchronizationObjects = props.synchronizationObjects;
        this.topology = props.topology;
        this.usedTime = props.usedTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            destinationEndpoint: this.destinationEndpoint,
            destRegion: this.destRegion,
            sourceEndpoint: this.sourceEndpoint,
            sourceRegion: this.sourceRegion,
            synchronizationJobClass: this.synchronizationJobClass,
            dataInitialization: this.dataInitialization,
            networkType: this.networkType,
            payType: this.payType,
            period: this.period,
            structureInitialization: this.structureInitialization,
            synchronizationObjects: this.synchronizationObjects,
            topology: this.topology,
            usedTime: this.usedTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSynchronizationJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    export interface ColumnExcludesProperty {
        /**
         * @Property columnName: Column names are not synchronized in the table to be synchronized
         */
        readonly columnName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ColumnExcludesProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnExcludesProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob_ColumnExcludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('columnName', ros.validateString)(properties.columnName));
    return errors.wrap('supplied properties not correct for "ColumnExcludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.ColumnExcludes` resource
 *
 * @param properties - the TypeScript properties of a `ColumnExcludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.ColumnExcludes` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobColumnExcludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob_ColumnExcludesPropertyValidator(properties).assertSuccess();
    return {
      ColumnName: ros.stringToRosTemplate(properties.columnName),
    };
}

export namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    export interface ColumnIncludesProperty {
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
/**
 * Determine whether the given properties match those of a `ColumnIncludesProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnIncludesProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob_ColumnIncludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('newColumnName', ros.validateString)(properties.newColumnName));
    errors.collect(ros.propertyValidator('columnName', ros.validateString)(properties.columnName));
    return errors.wrap('supplied properties not correct for "ColumnIncludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.ColumnIncludes` resource
 *
 * @param properties - the TypeScript properties of a `ColumnIncludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.ColumnIncludes` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobColumnIncludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob_ColumnIncludesPropertyValidator(properties).assertSuccess();
    return {
      NewColumnName: ros.stringToRosTemplate(properties.newColumnName),
      ColumnName: ros.stringToRosTemplate(properties.columnName),
    };
}

export namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    export interface DestinationEndpointProperty {
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
/**
 * Determine whether the given properties match those of a `DestinationEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob_DestinationEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceTypeForCreation', ros.validateString)(properties.instanceTypeForCreation));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "DestinationEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.DestinationEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.DestinationEndpoint` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobDestinationEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob_DestinationEndpointPropertyValidator(properties).assertSuccess();
    return {
      UserName: ros.stringToRosTemplate(properties.userName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      IP: ros.stringToRosTemplate(properties.ip),
      Port: ros.stringToRosTemplate(properties.port),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      InstanceTypeForCreation: ros.stringToRosTemplate(properties.instanceTypeForCreation),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    export interface SourceEndpointProperty {
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
/**
 * Determine whether the given properties match those of a `SourceEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob_SourceEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceTypeForCreation', ros.validateString)(properties.instanceTypeForCreation));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "SourceEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.SourceEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.SourceEndpoint` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobSourceEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob_SourceEndpointPropertyValidator(properties).assertSuccess();
    return {
      Role: ros.stringToRosTemplate(properties.role),
      UserName: ros.stringToRosTemplate(properties.userName),
      OwnerID: ros.stringToRosTemplate(properties.ownerId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      IP: ros.stringToRosTemplate(properties.ip),
      Port: ros.stringToRosTemplate(properties.port),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      InstanceTypeForCreation: ros.stringToRosTemplate(properties.instanceTypeForCreation),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    export interface SynchronizationObjectsProperty {
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
/**
 * Determine whether the given properties match those of a `SynchronizationObjectsProperty`
 *
 * @param properties - the TypeScript properties of a `SynchronizationObjectsProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob_SynchronizationObjectsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tableIncludes', ros.listValidator(RosSynchronizationJob_TableIncludesPropertyValidator))(properties.tableIncludes));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('tableExcludes', ros.listValidator(RosSynchronizationJob_TableExcludesPropertyValidator))(properties.tableExcludes));
    errors.collect(ros.propertyValidator('schemaName', ros.validateString)(properties.schemaName));
    errors.collect(ros.propertyValidator('newSchemaName', ros.validateString)(properties.newSchemaName));
    errors.collect(ros.propertyValidator('newDbName', ros.validateString)(properties.newDbName));
    return errors.wrap('supplied properties not correct for "SynchronizationObjectsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.SynchronizationObjects` resource
 *
 * @param properties - the TypeScript properties of a `SynchronizationObjectsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.SynchronizationObjects` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobSynchronizationObjectsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob_SynchronizationObjectsPropertyValidator(properties).assertSuccess();
    return {
      TableIncludes: ros.listMapper(rosSynchronizationJobTableIncludesPropertyToRosTemplate)(properties.tableIncludes),
      DBName: ros.stringToRosTemplate(properties.dbName),
      TableExcludes: ros.listMapper(rosSynchronizationJobTableExcludesPropertyToRosTemplate)(properties.tableExcludes),
      SchemaName: ros.stringToRosTemplate(properties.schemaName),
      NewSchemaName: ros.stringToRosTemplate(properties.newSchemaName),
      NewDBName: ros.stringToRosTemplate(properties.newDbName),
    };
}

export namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    export interface TableExcludesProperty {
        /**
         * @Property tableName: The name of the table to be synchronized does not require the table name of the migration table.
         */
        readonly tableName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TableExcludesProperty`
 *
 * @param properties - the TypeScript properties of a `TableExcludesProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob_TableExcludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    return errors.wrap('supplied properties not correct for "TableExcludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.TableExcludes` resource
 *
 * @param properties - the TypeScript properties of a `TableExcludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.TableExcludes` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobTableExcludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob_TableExcludesPropertyValidator(properties).assertSuccess();
    return {
      TableName: ros.stringToRosTemplate(properties.tableName),
    };
}

export namespace RosSynchronizationJob {
    /**
     * @stability external
     */
    export interface TableIncludesProperty {
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
/**
 * Determine whether the given properties match those of a `TableIncludesProperty`
 *
 * @param properties - the TypeScript properties of a `TableIncludesProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob_TableIncludesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    errors.collect(ros.propertyValidator('filterCondition', ros.validateString)(properties.filterCondition));
    errors.collect(ros.propertyValidator('columnExcludes', ros.listValidator(RosSynchronizationJob_ColumnExcludesPropertyValidator))(properties.columnExcludes));
    errors.collect(ros.propertyValidator('columnIncludes', ros.listValidator(RosSynchronizationJob_ColumnIncludesPropertyValidator))(properties.columnIncludes));
    errors.collect(ros.propertyValidator('newTableName', ros.validateString)(properties.newTableName));
    return errors.wrap('supplied properties not correct for "TableIncludesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.TableIncludes` resource
 *
 * @param properties - the TypeScript properties of a `TableIncludesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob.TableIncludes` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJobTableIncludesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob_TableIncludesPropertyValidator(properties).assertSuccess();
    return {
      TableName: ros.stringToRosTemplate(properties.tableName),
      FilterCondition: ros.stringToRosTemplate(properties.filterCondition),
      ColumnExcludes: ros.listMapper(rosSynchronizationJobColumnExcludesPropertyToRosTemplate)(properties.columnExcludes),
      ColumnIncludes: ros.listMapper(rosSynchronizationJobColumnIncludesPropertyToRosTemplate)(properties.columnIncludes),
      NewTableName: ros.stringToRosTemplate(properties.newTableName),
    };
}
