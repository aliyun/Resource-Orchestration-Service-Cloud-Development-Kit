import * as ros from '@alicloud/ros-cdk-core';
import { RosEnterpriseDBClusterBackupPolicy } from './clickhouse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEnterpriseDBClusterBackupPolicy as EnterpriseDBClusterBackupPolicyProperty };

/**
 * Properties for defining a `EnterpriseDBClusterBackupPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
 */
export interface EnterpriseDBClusterBackupPolicyProps {

    /**
     * Property backupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    readonly backupRetentionPeriod: number | ros.IResolvable;

    /**
     * Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
     */
    readonly preferredBackupPeriod: string | ros.IResolvable;

    /**
     * Property preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
     */
    readonly preferredBackupTime: string | ros.IResolvable;
}

/**
 * Represents a `EnterpriseDBClusterBackupPolicy`.
 */
export interface IEnterpriseDBClusterBackupPolicy extends ros.IResource {
    readonly props: EnterpriseDBClusterBackupPolicyProps;

    /**
     * Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    readonly attrBackupRetentionPeriod: ros.IResolvable | string;

    /**
     * Attribute BackupState: Backup switch.
     */
    readonly attrBackupState: ros.IResolvable | string;

    /**
     * Attribute PreferredBackupPeriod: The backup cycle.
     */
    readonly attrPreferredBackupPeriod: ros.IResolvable | string;

    /**
     * Attribute PreferredBackupTime: The backup time window within which the backup task is performed.
     */
    readonly attrPreferredBackupTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnterpriseDBClusterBackupPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
 */
export class EnterpriseDBClusterBackupPolicy extends ros.Resource implements IEnterpriseDBClusterBackupPolicy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EnterpriseDBClusterBackupPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    public readonly attrBackupRetentionPeriod: ros.IResolvable | string;

    /**
     * Attribute BackupState: Backup switch.
     */
    public readonly attrBackupState: ros.IResolvable | string;

    /**
     * Attribute PreferredBackupPeriod: The backup cycle.
     */
    public readonly attrPreferredBackupPeriod: ros.IResolvable | string;

    /**
     * Attribute PreferredBackupTime: The backup time window within which the backup task is performed.
     */
    public readonly attrPreferredBackupTime: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnterpriseDBClusterBackupPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEnterpriseDBClusterBackupPolicy = new RosEnterpriseDBClusterBackupPolicy(this, id,  {
            preferredBackupPeriod: props.preferredBackupPeriod,
            preferredBackupTime: props.preferredBackupTime,
            backupRetentionPeriod: props.backupRetentionPeriod,
            dbInstanceId: props.dbInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEnterpriseDBClusterBackupPolicy;
        this.attrBackupRetentionPeriod = rosEnterpriseDBClusterBackupPolicy.attrBackupRetentionPeriod;
        this.attrBackupState = rosEnterpriseDBClusterBackupPolicy.attrBackupState;
        this.attrPreferredBackupPeriod = rosEnterpriseDBClusterBackupPolicy.attrPreferredBackupPeriod;
        this.attrPreferredBackupTime = rosEnterpriseDBClusterBackupPolicy.attrPreferredBackupTime;
    }
}
