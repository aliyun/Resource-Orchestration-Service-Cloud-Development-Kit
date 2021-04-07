// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::DBS::RestoreTask`
 */
export interface RosRestoreTaskProps {

    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    readonly backupPlanId: string | ros.IResolvable;

    /**
     * @Property destinationEndpointInstanceType: The location of the database. Valid values: 
     * - rds 
     * - ecs 
     * - express: a database connected over express connect, VPN Gateway, or smart gateway. 
     * - agent: The database connected through the backup Gateway 
     * - dds: apsaradb for MongoDB 
     * - kvstore 
     * - polardb 
     * - drds 
     * - dg: the database is directly connected through IP Address: Port.
     */
    readonly destinationEndpointInstanceType: string | ros.IResolvable;

    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    readonly restoreTaskName: string | ros.IResolvable;

    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    readonly backupGatewayId?: number | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    readonly destinationEndpointDatabaseName?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    readonly destinationEndpointInstanceId?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    readonly destinationEndpointIp?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    readonly destinationEndpointOracleSid?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    readonly destinationEndpointPassword?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    readonly destinationEndpointPort?: number | ros.IResolvable;

    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    readonly destinationEndpointRegion?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointUserName: The database account.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    readonly destinationEndpointUserName?: string | ros.IResolvable;

    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    readonly duplicateConflict?: string | ros.IResolvable;

    /**
     * @Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    readonly restoreDir?: string | ros.IResolvable;

    /**
     * @Property restoreHome: Database Program Directory.
     */
    readonly restoreHome?: string | ros.IResolvable;

    /**
     * @Property restoreObjects: Restore an object.
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    readonly restoreObjects?: string | ros.IResolvable;

    /**
     * @Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
     */
    readonly restoreTime?: number | ros.IResolvable;

    /**
     * @Property startTask: Start restore task after creating a recovery task.
     */
    readonly startTask?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRestoreTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosRestoreTaskProps`
 *
 * @returns the result of the validation.
 */
function RosRestoreTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('startTask', ros.validateBoolean)(properties.startTask));
    errors.collect(ros.propertyValidator('restoreDir', ros.validateString)(properties.restoreDir));
    if(properties.duplicateConflict && (typeof properties.duplicateConflict) !== 'object') {
        errors.collect(ros.propertyValidator('duplicateConflict', ros.validateAllowedValues)({
          data: properties.duplicateConflict,
          allowedValues: ["failure","renamenew"],
        }));
    }
    errors.collect(ros.propertyValidator('duplicateConflict', ros.validateString)(properties.duplicateConflict));
    errors.collect(ros.propertyValidator('restoreHome', ros.validateString)(properties.restoreHome));
    errors.collect(ros.propertyValidator('destinationEndpointPassword', ros.validateString)(properties.destinationEndpointPassword));
    errors.collect(ros.propertyValidator('destinationEndpointIp', ros.validateString)(properties.destinationEndpointIp));
    errors.collect(ros.propertyValidator('destinationEndpointPort', ros.validateNumber)(properties.destinationEndpointPort));
    errors.collect(ros.propertyValidator('destinationEndpointOracleSid', ros.validateString)(properties.destinationEndpointOracleSid));
    errors.collect(ros.propertyValidator('backupSetId', ros.validateString)(properties.backupSetId));
    errors.collect(ros.propertyValidator('destinationEndpointInstanceType', ros.requiredValidator)(properties.destinationEndpointInstanceType));
    errors.collect(ros.propertyValidator('destinationEndpointInstanceType', ros.validateString)(properties.destinationEndpointInstanceType));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateNumber)(properties.restoreTime));
    errors.collect(ros.propertyValidator('destinationEndpointRegion', ros.validateString)(properties.destinationEndpointRegion));
    errors.collect(ros.propertyValidator('destinationEndpointDatabaseName', ros.validateString)(properties.destinationEndpointDatabaseName));
    errors.collect(ros.propertyValidator('destinationEndpointUserName', ros.validateString)(properties.destinationEndpointUserName));
    errors.collect(ros.propertyValidator('restoreObjects', ros.validateString)(properties.restoreObjects));
    errors.collect(ros.propertyValidator('restoreTaskName', ros.requiredValidator)(properties.restoreTaskName));
    errors.collect(ros.propertyValidator('restoreTaskName', ros.validateString)(properties.restoreTaskName));
    errors.collect(ros.propertyValidator('backupPlanId', ros.requiredValidator)(properties.backupPlanId));
    errors.collect(ros.propertyValidator('backupPlanId', ros.validateString)(properties.backupPlanId));
    errors.collect(ros.propertyValidator('backupGatewayId', ros.validateNumber)(properties.backupGatewayId));
    errors.collect(ros.propertyValidator('destinationEndpointInstanceId', ros.validateString)(properties.destinationEndpointInstanceId));
    return errors.wrap('supplied properties not correct for "RosRestoreTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DBS::RestoreTask` resource
 *
 * @param properties - the TypeScript properties of a `RosRestoreTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DBS::RestoreTask` resource.
 */
// @ts-ignore TS6133
function rosRestoreTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRestoreTaskPropsValidator(properties).assertSuccess();
    }
    return {
      BackupPlanId: ros.stringToRosTemplate(properties.backupPlanId),
      DestinationEndpointInstanceType: ros.stringToRosTemplate(properties.destinationEndpointInstanceType),
      RestoreTaskName: ros.stringToRosTemplate(properties.restoreTaskName),
      BackupGatewayId: ros.numberToRosTemplate(properties.backupGatewayId),
      BackupSetId: ros.stringToRosTemplate(properties.backupSetId),
      DestinationEndpointDatabaseName: ros.stringToRosTemplate(properties.destinationEndpointDatabaseName),
      DestinationEndpointInstanceID: ros.stringToRosTemplate(properties.destinationEndpointInstanceId),
      DestinationEndpointIP: ros.stringToRosTemplate(properties.destinationEndpointIp),
      DestinationEndpointOracleSID: ros.stringToRosTemplate(properties.destinationEndpointOracleSid),
      DestinationEndpointPassword: ros.stringToRosTemplate(properties.destinationEndpointPassword),
      DestinationEndpointPort: ros.numberToRosTemplate(properties.destinationEndpointPort),
      DestinationEndpointRegion: ros.stringToRosTemplate(properties.destinationEndpointRegion),
      DestinationEndpointUserName: ros.stringToRosTemplate(properties.destinationEndpointUserName),
      DuplicateConflict: ros.stringToRosTemplate(properties.duplicateConflict),
      RestoreDir: ros.stringToRosTemplate(properties.restoreDir),
      RestoreHome: ros.stringToRosTemplate(properties.restoreHome),
      RestoreObjects: ros.stringToRosTemplate(properties.restoreObjects),
      RestoreTime: ros.numberToRosTemplate(properties.restoreTime),
      StartTask: ros.booleanToRosTemplate(properties.startTask),
    };
}

/**
 * A ROS template type:  `ALIYUN::DBS::RestoreTask`
 */
export class RosRestoreTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DBS::RestoreTask";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RestoreTaskId: The ID of the restoration task.
     */
    public readonly attrRestoreTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    public backupPlanId: string | ros.IResolvable;

    /**
     * @Property destinationEndpointInstanceType: The location of the database. Valid values: 
     * - rds 
     * - ecs 
     * - express: a database connected over express connect, VPN Gateway, or smart gateway. 
     * - agent: The database connected through the backup Gateway 
     * - dds: apsaradb for MongoDB 
     * - kvstore 
     * - polardb 
     * - drds 
     * - dg: the database is directly connected through IP Address: Port.
     */
    public destinationEndpointInstanceType: string | ros.IResolvable;

    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    public restoreTaskName: string | ros.IResolvable;

    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    public backupGatewayId: number | ros.IResolvable | undefined;

    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    public backupSetId: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    public destinationEndpointDatabaseName: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    public destinationEndpointInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    public destinationEndpointIp: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    public destinationEndpointOracleSid: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    public destinationEndpointPassword: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    public destinationEndpointPort: number | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    public destinationEndpointRegion: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointUserName: The database account.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    public destinationEndpointUserName: string | ros.IResolvable | undefined;

    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    public duplicateConflict: string | ros.IResolvable | undefined;

    /**
     * @Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    public restoreDir: string | ros.IResolvable | undefined;

    /**
     * @Property restoreHome: Database Program Directory.
     */
    public restoreHome: string | ros.IResolvable | undefined;

    /**
     * @Property restoreObjects: Restore an object.
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    public restoreObjects: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
     */
    public restoreTime: number | ros.IResolvable | undefined;

    /**
     * @Property startTask: Start restore task after creating a recovery task.
     */
    public startTask: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::DBS::RestoreTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRestoreTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRestoreTaskId = this.getAtt('RestoreTaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupPlanId = props.backupPlanId;
        this.destinationEndpointInstanceType = props.destinationEndpointInstanceType;
        this.restoreTaskName = props.restoreTaskName;
        this.backupGatewayId = props.backupGatewayId;
        this.backupSetId = props.backupSetId;
        this.destinationEndpointDatabaseName = props.destinationEndpointDatabaseName;
        this.destinationEndpointInstanceId = props.destinationEndpointInstanceId;
        this.destinationEndpointIp = props.destinationEndpointIp;
        this.destinationEndpointOracleSid = props.destinationEndpointOracleSid;
        this.destinationEndpointPassword = props.destinationEndpointPassword;
        this.destinationEndpointPort = props.destinationEndpointPort;
        this.destinationEndpointRegion = props.destinationEndpointRegion;
        this.destinationEndpointUserName = props.destinationEndpointUserName;
        this.duplicateConflict = props.duplicateConflict;
        this.restoreDir = props.restoreDir;
        this.restoreHome = props.restoreHome;
        this.restoreObjects = props.restoreObjects;
        this.restoreTime = props.restoreTime;
        this.startTask = props.startTask;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPlanId: this.backupPlanId,
            destinationEndpointInstanceType: this.destinationEndpointInstanceType,
            restoreTaskName: this.restoreTaskName,
            backupGatewayId: this.backupGatewayId,
            backupSetId: this.backupSetId,
            destinationEndpointDatabaseName: this.destinationEndpointDatabaseName,
            destinationEndpointInstanceId: this.destinationEndpointInstanceId,
            destinationEndpointIp: this.destinationEndpointIp,
            destinationEndpointOracleSid: this.destinationEndpointOracleSid,
            destinationEndpointPassword: this.destinationEndpointPassword,
            destinationEndpointPort: this.destinationEndpointPort,
            destinationEndpointRegion: this.destinationEndpointRegion,
            destinationEndpointUserName: this.destinationEndpointUserName,
            duplicateConflict: this.duplicateConflict,
            restoreDir: this.restoreDir,
            restoreHome: this.restoreHome,
            restoreObjects: this.restoreObjects,
            restoreTime: this.restoreTime,
            startTask: this.startTask,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRestoreTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
