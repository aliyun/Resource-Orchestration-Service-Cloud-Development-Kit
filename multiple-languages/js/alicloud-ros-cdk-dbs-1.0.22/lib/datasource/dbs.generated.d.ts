import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosBackupPlans`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
 */
export interface RosBackupPlansProps {
    /**
     * @Property backupPlanId: The ID of the backup schedule.
     */
    readonly backupPlanId?: string | ros.IResolvable;
    /**
     * @Property backupPlanName: The name of the backup schedule.
     */
    readonly backupPlanName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DBS::BackupPlans`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupPlans` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
 */
export declare class RosBackupPlans extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DBS::BackupPlans";
    /**
     * @Attribute BackupPlanIds: The list of backup plan IDs.
     */
    readonly attrBackupPlanIds: ros.IResolvable;
    /**
     * @Attribute BackupPlans: The list of backup plans.
     */
    readonly attrBackupPlans: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupPlanId: The ID of the backup schedule.
     */
    backupPlanId: string | ros.IResolvable | undefined;
    /**
     * @Property backupPlanName: The name of the backup schedule.
     */
    backupPlanName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupPlansProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
