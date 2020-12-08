import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::DBS::RestoreTask`
 */
export interface RosRestoreTaskProps {
    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    readonly backupPlanId: string;
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
    readonly destinationEndpointInstanceType: string;
    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    readonly restoreTaskName: string;
    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    readonly backupGatewayId?: number;
    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    readonly backupSetId?: string;
    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    readonly destinationEndpointDatabaseName?: string;
    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    readonly destinationEndpointInstanceId?: string;
    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    readonly destinationEndpointIp?: string;
    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    readonly destinationEndpointOracleSid?: string;
    /**
     * @Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    readonly destinationEndpointPassword?: string;
    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    readonly destinationEndpointPort?: number;
    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    readonly destinationEndpointRegion?: string;
    /**
     * @Property destinationEndpointUserName: The database account.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    readonly destinationEndpointUserName?: string;
    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    readonly duplicateConflict?: string;
    /**
     * @Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    readonly restoreDir?: string;
    /**
     * @Property restoreHome: Database Program Directory.
     */
    readonly restoreHome?: string;
    /**
     * @Property restoreObjects: Restore an object.
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    readonly restoreObjects?: string;
    /**
     * @Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
     */
    readonly restoreTime?: number;
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
    readonly attrRestoreTaskId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    backupPlanId: string;
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
    destinationEndpointInstanceType: string;
    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    restoreTaskName: string;
    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    backupGatewayId: number | undefined;
    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    backupSetId: string | undefined;
    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    destinationEndpointDatabaseName: string | undefined;
    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    destinationEndpointInstanceId: string | undefined;
    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    destinationEndpointIp: string | undefined;
    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    destinationEndpointOracleSid: string | undefined;
    /**
     * @Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    destinationEndpointPassword: string | undefined;
    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    destinationEndpointPort: number | undefined;
    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    destinationEndpointRegion: string | undefined;
    /**
     * @Property destinationEndpointUserName: The database account.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    destinationEndpointUserName: string | undefined;
    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    duplicateConflict: string | undefined;
    /**
     * @Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    restoreDir: string | undefined;
    /**
     * @Property restoreHome: Database Program Directory.
     */
    restoreHome: string | undefined;
    /**
     * @Property restoreObjects: Restore an object.
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    restoreObjects: string | undefined;
    /**
     * @Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
     */
    restoreTime: number | undefined;
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
