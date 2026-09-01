import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupPolicy } from './adb.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property preferredBackupTime: The start time of the full backup within a time range. Specify the time range in
     * the HH:mmZ-HH:mmZ format. The time must be in UTC.
     * >  The time range is 1 hour.
     */
    readonly preferredBackupTime: string | ros.IResolvable;

    /**
     * Property backupRetentionPeriod: The number of days for which to retain full backup files. Valid values: 7 to 730.
     * >  If you do not specify this parameter, the default value 7 is used.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;

    /**
     * Property enableBackupLog: Specifies whether to enable real-time log backup. Valid values:
     * *   Enable
     * *   Disable
     * > If you leave this parameter empty, the default value Enable is used.
     */
    readonly enableBackupLog?: string | ros.IResolvable;

    /**
     * Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730.
     * >  If you do not specify this parameter, the default value 7 is used.
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
export class BackupPolicy extends ros.Resource implements IBackupPolicy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BackupPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBackupPolicy = new RosBackupPolicy(this, id,  {
            preferredBackupPeriod: props.preferredBackupPeriod,
            logBackupRetentionPeriod: props.logBackupRetentionPeriod,
            preferredBackupTime: props.preferredBackupTime,
            dbClusterId: props.dbClusterId,
            enableBackupLog: props.enableBackupLog,
            backupRetentionPeriod: props.backupRetentionPeriod,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupPolicy;
    }
}
