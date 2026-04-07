import * as ros from '@alicloud/ros-cdk-core';
import { RosEcsBackupPlan } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEcsBackupPlan as EcsBackupPlanProperty };

/**
 * Properties for defining a `EcsBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
 */
export interface EcsBackupPlanProps {

    /**
     * Property backupType: Backup type. Valid values: COMPLETE.
     */
    readonly backupType: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of ECS instance. The ecs backup client must have been installed on the host.
     */
    readonly instanceId: string | ros.IResolvable;

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
     * Property detail: The detail of the backup plan.
     */
    readonly detail?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    readonly disabled?: boolean | ros.IResolvable;

    /**
     * Property exclude: The exclude paths of the backup plan.
     */
    readonly exclude?: string | ros.IResolvable;

    /**
     * Property include: The include paths of the backup plan.
     */
    readonly include?: string | ros.IResolvable;

    /**
     * Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
     */
    readonly options?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property paths: The paths of the backup plan.
     */
    readonly paths?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property speedLimit: The speed limit of the backup plan.
     */
    readonly speedLimit?: string | ros.IResolvable;
}

/**
 * Represents a `EcsBackupPlan`.
 */
export interface IEcsBackupPlan extends ros.IResource {
    readonly props: EcsBackupPlanProps;

    /**
     * Attribute PlanId: The ID of the backup plan.
     */
    readonly attrPlanId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::EcsBackupPlan`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEcsBackupPlan`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
 */
export class EcsBackupPlan extends ros.Resource implements IEcsBackupPlan {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EcsBackupPlanProps;
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
    constructor(scope: ros.Construct, id: string, props: EcsBackupPlanProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEcsBackupPlan = new RosEcsBackupPlan(this, id,  {
            options: props.options,
            crossAccountUserId: props.crossAccountUserId,
            exclude: props.exclude,
            instanceId: props.instanceId,
            speedLimit: props.speedLimit,
            crossAccountRoleName: props.crossAccountRoleName,
            crossAccountType: props.crossAccountType,
            include: props.include,
            planName: props.planName,
            vaultId: props.vaultId,
            retention: props.retention,
            schedule: props.schedule,
            backupType: props.backupType,
            paths: props.paths,
            disabled: props.disabled,
            detail: props.detail,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEcsBackupPlan;
        this.attrPlanId = rosEcsBackupPlan.attrPlanId;
    }
}
