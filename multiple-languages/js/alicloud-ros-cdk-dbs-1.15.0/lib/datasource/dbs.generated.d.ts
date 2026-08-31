import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
 */
export interface RosBackupPlanProps {
    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    readonly backupPlanId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DBS::BackupPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
 */
export declare class RosBackupPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DBS::BackupPlan";
    /**
     * @Attribute BackupGatewayId: The ID of the backup gateway.
     */
    readonly attrBackupGatewayId: ros.IResolvable;
    /**
     * @Attribute BackupMethod: Backup method.
     */
    readonly attrBackupMethod: ros.IResolvable;
    /**
     * @Attribute BackupObjects: The backup object.
     */
    readonly attrBackupObjects: ros.IResolvable;
    /**
     * @Attribute BackupPeriod: Full backup cycle.
     */
    readonly attrBackupPeriod: ros.IResolvable;
    /**
     * @Attribute BackupPlanId: The ID of the backup plan.
     */
    readonly attrBackupPlanId: ros.IResolvable;
    /**
     * @Attribute BackupPlanName: The name of the backup plan.
     */
    readonly attrBackupPlanName: ros.IResolvable;
    /**
     * @Attribute BackupRetentionPeriod: The retention time of backup data. Valid values: 0 to 1825. Default value: 730 days.
     */
    readonly attrBackupRetentionPeriod: ros.IResolvable;
    /**
     * @Attribute BackupStartTime: The start time of full Backup.
     */
    readonly attrBackupStartTime: ros.IResolvable;
    /**
     * @Attribute BackupStorageType: Built-in storage type:.
     */
    readonly attrBackupStorageType: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the backup plans.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
     */
    readonly attrCrossAliyunId: ros.IResolvable;
    /**
     * @Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
     */
    readonly attrCrossRoleName: ros.IResolvable;
    /**
     * @Attribute DatabaseType: Database type.
     */
    readonly attrDatabaseType: ros.IResolvable;
    /**
     * @Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
     */
    readonly attrDuplicationArchivePeriod: ros.IResolvable;
    /**
     * @Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access. The default time is 180 days.
     */
    readonly attrDuplicationInfrequentAccessPeriod: ros.IResolvable;
    /**
     * @Attribute EnableBackupLog: Whether to enable incremental log Backup.
     */
    readonly attrEnableBackupLog: ros.IResolvable;
    /**
     * @Attribute InstanceClass: Instance class.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * @Attribute OssBucketName: OSS Bucket name.
     */
    readonly attrOssBucketName: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SourceEndpointDatabaseName: The name of the database.
     */
    readonly attrSourceEndpointDatabaseName: ros.IResolvable;
    /**
     * @Attribute SourceEndpointInstanceId: The ID of the database instance.
     */
    readonly attrSourceEndpointInstanceId: ros.IResolvable;
    /**
     * @Attribute SourceEndpointInstanceType: The location of the database.
     */
    readonly attrSourceEndpointInstanceType: ros.IResolvable;
    /**
     * @Attribute SourceEndpointRegion: The region of the database.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable;
    /**
     * @Attribute SourceEndpointSid: Oracle SID name.
     */
    readonly attrSourceEndpointSid: ros.IResolvable;
    /**
     * @Attribute SourceEndpointUserName: Database account.
     */
    readonly attrSourceEndpointUserName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    backupPlanId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupPlanProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
