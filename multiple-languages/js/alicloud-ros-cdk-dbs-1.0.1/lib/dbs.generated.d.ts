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
 * A ROS template type:  `ALIYUN::DBS::RestoreTask`
 */
export declare class RosRestoreTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DBS::RestoreTask";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RestoreTaskId: The ID of the restoration task.
     */
    readonly attrRestoreTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    backupPlanId: string | ros.IResolvable;
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
    destinationEndpointInstanceType: string | ros.IResolvable;
    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    restoreTaskName: string | ros.IResolvable;
    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    backupGatewayId: number | ros.IResolvable | undefined;
    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    backupSetId: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    destinationEndpointDatabaseName: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    destinationEndpointInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    destinationEndpointIp: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    destinationEndpointOracleSid: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    destinationEndpointPassword: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    destinationEndpointPort: number | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    destinationEndpointRegion: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointUserName: The database account.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    destinationEndpointUserName: string | ros.IResolvable | undefined;
    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    duplicateConflict: string | ros.IResolvable | undefined;
    /**
     * @Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    restoreDir: string | ros.IResolvable | undefined;
    /**
     * @Property restoreHome: Database Program Directory.
     */
    restoreHome: string | ros.IResolvable | undefined;
    /**
     * @Property restoreObjects: Restore an object.
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    restoreObjects: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
     */
    restoreTime: number | ros.IResolvable | undefined;
    /**
     * @Property startTask: Start restore task after creating a recovery task.
     */
    startTask: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::DBS::RestoreTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
