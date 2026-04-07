import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupPlans } from './dbs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackupPlans as BackupPlansProperty };

/**
 * Properties for defining a `BackupPlans`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
 */
export interface BackupPlansProps {

    /**
     * Property backupPlanId: The ID of the backup schedule.
     */
    readonly backupPlanId?: string | ros.IResolvable;

    /**
     * Property backupPlanName: The name of the backup schedule.
     */
    readonly backupPlanName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `BackupPlans`.
 */
export interface IBackupPlans extends ros.IResource {
    readonly props: BackupPlansProps;

    /**
     * Attribute BackupPlanIds: The list of backup plan IDs.
     */
    readonly attrBackupPlanIds: ros.IResolvable | string;

    /**
     * Attribute BackupPlans: The list of backup plans.
     */
    readonly attrBackupPlans: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DBS::BackupPlans`, which is used to query the information about backup schedules.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackupPlans`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
 */
export class BackupPlans extends ros.Resource implements IBackupPlans {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BackupPlansProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BackupPlanIds: The list of backup plan IDs.
     */
    public readonly attrBackupPlanIds: ros.IResolvable | string;

    /**
     * Attribute BackupPlans: The list of backup plans.
     */
    public readonly attrBackupPlans: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupPlansProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBackupPlans = new RosBackupPlans(this, id,  {
            backupPlanName: props.backupPlanName,
            resourceGroupId: props.resourceGroupId,
            backupPlanId: props.backupPlanId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupPlans;
        this.attrBackupPlanIds = rosBackupPlans.attrBackupPlanIds;
        this.attrBackupPlans = rosBackupPlans.attrBackupPlans;
    }
}
