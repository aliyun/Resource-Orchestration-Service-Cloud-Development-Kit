import * as ros from '@alicloud/ros-cdk-core';
import { RosRestoreTask } from './dbs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRestoreTask as RestoreTaskProperty };

/**
 * Properties for defining a `RestoreTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
 */
export interface RestoreTaskProps {

    /**
     * Property backupPlanId: The ID of the backup plan.
     */
    readonly backupPlanId: string | ros.IResolvable;

    /**
     * Property destinationEndpointInstanceType: The type of the destination endpoint. Valid values:
     * - RDS: an ApsaraDB RDS instance.
     * - ECS: a self-managed database hosted on an ECS instance.
     * - Express: a database connected over a leased line, VPN Gateway, or Smart Access
     * Gateway.
     * - Agent: a database connected via a backup gateway.
     * - DDS: an ApsaraDB for MongoDB (DDS) instance.
     * - Other: a database connected over the internet by using a public IP address and
     * port.
     * - dg: a self-managed database without a public endpoint, connected via Database
     * Gateway.
     */
    readonly destinationEndpointInstanceType: string | ros.IResolvable;

    /**
     * Property restoreTaskName: The name of the restoration task.
     */
    readonly restoreTaskName: string | ros.IResolvable;

    /**
     * Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    readonly backupGatewayId?: number | ros.IResolvable;

    /**
     * Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    readonly destinationEndpointDatabaseName?: string | ros.IResolvable;

    /**
     * Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    readonly destinationEndpointInstanceId?: string | ros.IResolvable;

    /**
     * Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    readonly destinationEndpointIp?: string | ros.IResolvable;

    /**
     * Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    readonly destinationEndpointOracleSid?: string | ros.IResolvable;

    /**
     * Property destinationEndpointPassword: The password for the destination database account.
     * > This parameter is optional if the database engine is Redis, or if
     * `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
     * MSSQL. In other scenarios, this parameter is required.
     */
    readonly destinationEndpointPassword?: string | ros.IResolvable;

    /**
     * Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    readonly destinationEndpointPort?: number | ros.IResolvable;

    /**
     * Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    readonly destinationEndpointRegion?: string | ros.IResolvable;

    /**
     * Property destinationEndpointUserName: The username for the destination database account.
     * > This parameter is optional if the database engine is Redis, or if
     * `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
     * MSSQL. In other scenarios, this parameter is required.
     */
    readonly destinationEndpointUserName?: string | ros.IResolvable;

    /**
     * Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    readonly duplicateConflict?: string | ros.IResolvable;

    /**
     * Property restoreDir: The restore directory. This parameter is required if
     * DestinationEndpointInstanceType is set to `Agent` and the database type is MySQL.
     */
    readonly restoreDir?: string | ros.IResolvable;

    /**
     * Property restoreHome: Database Program Directory.
     */
    readonly restoreHome?: string | ros.IResolvable;

    /**
     * Property restoreObjects: The objects to restore.
     * - This parameter is optional if `DestinationEndpointInstanceType` is set to
     * `Agent`. In other scenarios, this parameter is required.
     * - The value must be a JSON string in the following format: `[{ "DBName":
     * "source_database_name", "NewDBName": "destination_database_name" }]`
     * > You can use this API operation to restore data only at the database level. To
     * restore data at the table level, log on to the console.
     */
    readonly restoreObjects?: string | ros.IResolvable;

    /**
     * Property restoreTime: The point-in-time for the restore, specified as a UNIX timestamp in milliseconds.
     */
    readonly restoreTime?: number | ros.IResolvable;

    /**
     * Property startTask: Start restore task after creating a recovery task.
     */
    readonly startTask?: boolean | ros.IResolvable;
}

/**
 * Represents a `RestoreTask`.
 */
export interface IRestoreTask extends ros.IResource {
    readonly props: RestoreTaskProps;

    /**
     * Attribute RestoreTaskId: The ID of the restoration task.
     */
    readonly attrRestoreTaskId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DBS::RestoreTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRestoreTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
 */
export class RestoreTask extends ros.Resource implements IRestoreTask {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RestoreTaskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RestoreTaskId: The ID of the restoration task.
     */
    public readonly attrRestoreTaskId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RestoreTaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRestoreTask = new RosRestoreTask(this, id,  {
            restoreDir: props.restoreDir,
            startTask: props.startTask === undefined || props.startTask === null ? true : props.startTask,
            duplicateConflict: props.duplicateConflict,
            restoreHome: props.restoreHome,
            destinationEndpointPassword: props.destinationEndpointPassword,
            destinationEndpointIp: props.destinationEndpointIp,
            destinationEndpointPort: props.destinationEndpointPort,
            destinationEndpointOracleSid: props.destinationEndpointOracleSid,
            backupSetId: props.backupSetId,
            destinationEndpointInstanceType: props.destinationEndpointInstanceType,
            restoreTime: props.restoreTime,
            destinationEndpointRegion: props.destinationEndpointRegion,
            destinationEndpointDatabaseName: props.destinationEndpointDatabaseName,
            destinationEndpointUserName: props.destinationEndpointUserName,
            restoreObjects: props.restoreObjects,
            restoreTaskName: props.restoreTaskName,
            backupPlanId: props.backupPlanId,
            backupGatewayId: props.backupGatewayId,
            destinationEndpointInstanceId: props.destinationEndpointInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRestoreTask;
        this.attrRestoreTaskId = rosRestoreTask.attrRestoreTaskId;
    }
}
