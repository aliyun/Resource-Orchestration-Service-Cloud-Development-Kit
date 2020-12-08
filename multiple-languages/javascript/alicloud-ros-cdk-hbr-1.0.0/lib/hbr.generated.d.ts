import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::HBR::BackupClients`
 */
export interface RosBackupClientsProps {
    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: string[];
}
/**
 * A ROS template type:  `ALIYUN::HBR::BackupClients`
 */
export declare class RosBackupClients extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::BackupClients";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClientIds: ID list of clients installed in instances
     */
    readonly attrClientIds: any;
    /**
     * @Attribute InstanceIds: ID list of instances to install backup client
     */
    readonly attrInstanceIds: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    instanceIds: string[];
    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupClientsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::HBR::RestoreJob`
 */
export interface RosRestoreJobProps {
    /**
     * @Property restoreType: Restore type
     */
    readonly restoreType: string;
    /**
     * @Property snapshotId: Snapshot ID
     */
    readonly snapshotId: string;
    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    readonly sourceClientId: string;
    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    readonly sourceInstanceId: string;
    /**
     * @Property sourceType: Source type
     */
    readonly sourceType: string;
    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    readonly targetClientId: string;
    /**
     * @Property targetInstanceId: Source client ID. It should be provided when RestoreType=ECS_FILE.
     */
    readonly targetInstanceId: string;
    /**
     * @Property targetPath: Target path. For instance, "/".
     */
    readonly targetPath: string;
    /**
     * @Property vaultId: Vault ID
     */
    readonly vaultId: string;
}
/**
 * A ROS template type:  `ALIYUN::HBR::RestoreJob`
 */
export declare class RosRestoreJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::RestoreJob";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ErrorMessage: Error message of restore job
     */
    readonly attrErrorMessage: any;
    /**
     * @Attribute RestoreId: Restore job ID
     */
    readonly attrRestoreId: any;
    /**
     * @Attribute RestoreType: Restore type
     */
    readonly attrRestoreType: any;
    /**
     * @Attribute SourceType: Source type
     */
    readonly attrSourceType: any;
    /**
     * @Attribute Status: Restore job status
     */
    readonly attrStatus: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property restoreType: Restore type
     */
    restoreType: string;
    /**
     * @Property snapshotId: Snapshot ID
     */
    snapshotId: string;
    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    sourceClientId: string;
    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    sourceInstanceId: string;
    /**
     * @Property sourceType: Source type
     */
    sourceType: string;
    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    targetClientId: string;
    /**
     * @Property targetInstanceId: Source client ID. It should be provided when RestoreType=ECS_FILE.
     */
    targetInstanceId: string;
    /**
     * @Property targetPath: Target path. For instance, "/".
     */
    targetPath: string;
    /**
     * @Property vaultId: Vault ID
     */
    vaultId: string;
    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
