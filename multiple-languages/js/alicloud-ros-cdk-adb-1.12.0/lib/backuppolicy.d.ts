import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupPolicy } from './adb.generated';
export { RosBackupPolicy as BackupPolicyProperty };
/**
 * Properties for defining a `BackupPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
 */
export interface BackupPolicyProps {
    /**
     * Property dbClusterId: The ID of the ADB cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property preferredBackupPeriod: The preferred backup period. Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
     */
    readonly preferredBackupPeriod: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property preferredBackupTime: The preferred backup time. Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
     */
    readonly preferredBackupTime: string | ros.IResolvable;
    /**
     * Property backupRetentionPeriod: The number of days for which backup files are retained. Valid values: 7 to 730.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;
    /**
     * Property enableBackupLog: Whether to enable log backup. Valid values: Enable, Disable.
     */
    readonly enableBackupLog?: string | ros.IResolvable;
    /**
     * Property logBackupRetentionPeriod: The number of days for which log backup files are retained. Valid values: 7 to 730.
     */
    readonly logBackupRetentionPeriod?: number | ros.IResolvable;
}
/**
 * Represents a `BackupPolicy`.
 */
export interface IBackupPolicy extends ros.IResource {
    readonly props: BackupPolicyProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADB::BackupPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackupPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
 */
export declare class BackupPolicy extends ros.Resource implements IBackupPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BackupPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupPolicyProps, enableResourcePropertyConstraint?: boolean);
}
