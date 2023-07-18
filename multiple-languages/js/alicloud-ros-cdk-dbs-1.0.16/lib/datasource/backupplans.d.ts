import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupPlans } from './dbs.generated';
export { RosBackupPlans as BackupPlansProperty };
/**
 * Properties for defining a `DATASOURCE::DBS::BackupPlans`
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
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::DBS::BackupPlans`
 */
export declare class BackupPlans extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BackupPlanIds: The list of backup plan IDs.
     */
    readonly attrBackupPlanIds: ros.IResolvable;
    /**
     * Attribute BackupPlans: The list of backup plans.
     */
    readonly attrBackupPlans: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DBS::BackupPlans`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: BackupPlansProps, enableResourcePropertyConstraint?: boolean);
}
