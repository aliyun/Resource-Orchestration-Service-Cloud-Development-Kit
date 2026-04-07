import * as ros from '@alicloud/ros-cdk-core';
import { RosNasBackupPlan } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNasBackupPlan as NasBackupPlanProperty };

/**
 * Properties for defining a `NasBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
 */
export interface NasBackupPlanProps {

    /**
     * Property backupType: Backup type. Valid values: COMPLETE.
     */
    readonly backupType: string | ros.IResolvable;

    /**
     * Property fileSystemId: The ID of the file system.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * Property paths: The paths of the backup plan.
     */
    readonly paths: Array<string | ros.IResolvable> | ros.IResolvable;

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
     * Property options: This parameter specifies whether to use Windows VSS to define a backup path.
     */
    readonly options?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `NasBackupPlan`.
 */
export interface INasBackupPlan extends ros.IResource {
    readonly props: NasBackupPlanProps;

    /**
     * Attribute PlanId: The ID of the backup plan.
     */
    readonly attrPlanId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::NasBackupPlan`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNasBackupPlan`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
 */
export class NasBackupPlan extends ros.Resource implements INasBackupPlan {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NasBackupPlanProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PlanId: The ID of the backup plan.
     */
    public readonly attrPlanId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NasBackupPlanProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNasBackupPlan = new RosNasBackupPlan(this, id,  {
            options: props.options,
            crossAccountUserId: props.crossAccountUserId,
            crossAccountRoleName: props.crossAccountRoleName,
            schedule: props.schedule,
            crossAccountType: props.crossAccountType,
            backupType: props.backupType,
            fileSystemId: props.fileSystemId,
            paths: props.paths,
            planName: props.planName,
            vaultId: props.vaultId,
            retention: props.retention,
            disabled: props.disabled,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNasBackupPlan;
        this.attrPlanId = rosNasBackupPlan.attrPlanId;
    }
}
