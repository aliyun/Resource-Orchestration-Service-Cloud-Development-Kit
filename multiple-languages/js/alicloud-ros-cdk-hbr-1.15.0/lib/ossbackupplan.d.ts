import * as ros from '@alicloud/ros-cdk-core';
import { RosOssBackupPlan } from './hbr.generated';
export { RosOssBackupPlan as OssBackupPlanProperty };
/**
 * Properties for defining a `OssBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
 */
export interface OssBackupPlanProps {
    /**
     * Property backupType: Backup type. Valid values: COMPLETE.
     */
    readonly backupType: string | ros.IResolvable;
    /**
     * Property bucket: The name of OSS bucket.
     */
    readonly bucket: string | ros.IResolvable;
    /**
     * Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    readonly planName: string | ros.IResolvable;
    /**
     * Property retention: Backup retention days, the minimum is 1.
     */
    readonly retention: number | ros.IResolvable;
    /**
     * Property schedule: The backup policy. The format is `I|{startTime}|{interval}`. This specifies that
     * a backup job runs at an interval of `{interval}`, starting from `{startTime}`.
     * Overdue backup jobs are not retried. If the previous backup job is not complete,
     * the next backup job is not triggered. For example, `I|1631685600|P1D` indicates
     * that a backup job runs daily starting from 14:00:00 on September 15, 2021.
     * - startTime: The start time for the backup, specified as a UNIX timestamp in
     * seconds.
     * - interval: The backup interval, specified in the ISO 8601 duration format. For
     * example, `PT1H` represents one hour and `P1D` represents one day.
     */
    readonly schedule: string | ros.IResolvable;
    /**
     * Property vaultId: The ID of backup vault.
     */
    readonly vaultId: string | ros.IResolvable;
    /**
     * Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;
    /**
     * Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    readonly crossAccountType?: string | ros.IResolvable;
    /**
     * Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    readonly crossAccountUserId?: string | ros.IResolvable;
    /**
     * Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    readonly disabled?: boolean | ros.IResolvable;
    /**
     * Property prefix: Backup prefix. Once specified, only objects with matching prefixes will be backed up.
     */
    readonly prefix?: string | ros.IResolvable;
}
/**
 * Represents a `OssBackupPlan`.
 */
export interface IOssBackupPlan extends ros.IResource {
    readonly props: OssBackupPlanProps;
    /**
     * Attribute PlanId: The ID of the backup plan.
     */
    readonly attrPlanId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::OssBackupPlan`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOssBackupPlan`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
 */
export declare class OssBackupPlan extends ros.Resource implements IOssBackupPlan {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: OssBackupPlanProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PlanId: The ID of the backup plan.
     */
    readonly attrPlanId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OssBackupPlanProps, enableResourcePropertyConstraint?: boolean);
}
