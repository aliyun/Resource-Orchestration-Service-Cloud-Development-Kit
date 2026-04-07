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
     * Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
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
