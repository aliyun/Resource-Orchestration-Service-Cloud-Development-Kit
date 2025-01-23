import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupPlan } from './dbs.generated';
export { RosBackupPlan as BackupPlanProperty };
/**
 * Properties for defining a `BackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
 */
export interface BackupPlanProps {
    /**
     * Property backupPlanId: The ID of the backup plan.
     */
    readonly backupPlanId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `BackupPlan`.
 */
export interface IBackupPlan extends ros.IResource {
    readonly props: BackupPlanProps;
    /**
     * Attribute BackupGatewayId: The ID of the backup gateway.
     */
    readonly attrBackupGatewayId: ros.IResolvable | string;
    /**
     * Attribute BackupMethod: Backup method.
     */
    readonly attrBackupMethod: ros.IResolvable | string;
    /**
     * Attribute BackupObjects: The backup object.
     */
    readonly attrBackupObjects: ros.IResolvable | string;
    /**
     * Attribute BackupPeriod: Full backup cycle.
     */
    readonly attrBackupPeriod: ros.IResolvable | string;
    /**
     * Attribute BackupPlanId: The ID of the backup plan.
     */
    readonly attrBackupPlanId: ros.IResolvable | string;
    /**
     * Attribute BackupPlanName: The name of the backup plan.
     */
    readonly attrBackupPlanName: ros.IResolvable | string;
    /**
     * Attribute BackupRetentionPeriod: The retention time of backup data. Valid values: 0 to 1825. Default value: 730 days.
     */
    readonly attrBackupRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute BackupStartTime: The start time of full Backup.
     */
    readonly attrBackupStartTime: ros.IResolvable | string;
    /**
     * Attribute BackupStorageType: Built-in storage type:.
     */
    readonly attrBackupStorageType: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the backup plans.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
     */
    readonly attrCrossAliyunId: ros.IResolvable | string;
    /**
     * Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
     */
    readonly attrCrossRoleName: ros.IResolvable | string;
    /**
     * Attribute DatabaseType: Database type.
     */
    readonly attrDatabaseType: ros.IResolvable | string;
    /**
     * Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
     */
    readonly attrDuplicationArchivePeriod: ros.IResolvable | string;
    /**
     * Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access. The default time is 180 days.
     */
    readonly attrDuplicationInfrequentAccessPeriod: ros.IResolvable | string;
    /**
     * Attribute EnableBackupLog: Whether to enable incremental log Backup.
     */
    readonly attrEnableBackupLog: ros.IResolvable | string;
    /**
     * Attribute InstanceClass: Instance class.
     */
    readonly attrInstanceClass: ros.IResolvable | string;
    /**
     * Attribute OssBucketName: OSS Bucket name.
     */
    readonly attrOssBucketName: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointDatabaseName: The name of the database.
     */
    readonly attrSourceEndpointDatabaseName: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointInstanceId: The ID of the database instance.
     */
    readonly attrSourceEndpointInstanceId: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointInstanceType: The location of the database.
     */
    readonly attrSourceEndpointInstanceType: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointRegion: The region of the database.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointSid: Oracle SID name.
     */
    readonly attrSourceEndpointSid: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointUserName: Database account.
     */
    readonly attrSourceEndpointUserName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DBS::BackupPlan`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackupPlan`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
 */
export declare class BackupPlan extends ros.Resource implements IBackupPlan {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BackupPlanProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BackupGatewayId: The ID of the backup gateway.
     */
    readonly attrBackupGatewayId: ros.IResolvable | string;
    /**
     * Attribute BackupMethod: Backup method.
     */
    readonly attrBackupMethod: ros.IResolvable | string;
    /**
     * Attribute BackupObjects: The backup object.
     */
    readonly attrBackupObjects: ros.IResolvable | string;
    /**
     * Attribute BackupPeriod: Full backup cycle.
     */
    readonly attrBackupPeriod: ros.IResolvable | string;
    /**
     * Attribute BackupPlanId: The ID of the backup plan.
     */
    readonly attrBackupPlanId: ros.IResolvable | string;
    /**
     * Attribute BackupPlanName: The name of the backup plan.
     */
    readonly attrBackupPlanName: ros.IResolvable | string;
    /**
     * Attribute BackupRetentionPeriod: The retention time of backup data. Valid values: 0 to 1825. Default value: 730 days.
     */
    readonly attrBackupRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute BackupStartTime: The start time of full Backup.
     */
    readonly attrBackupStartTime: ros.IResolvable | string;
    /**
     * Attribute BackupStorageType: Built-in storage type:.
     */
    readonly attrBackupStorageType: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the backup plans.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
     */
    readonly attrCrossAliyunId: ros.IResolvable | string;
    /**
     * Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
     */
    readonly attrCrossRoleName: ros.IResolvable | string;
    /**
     * Attribute DatabaseType: Database type.
     */
    readonly attrDatabaseType: ros.IResolvable | string;
    /**
     * Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
     */
    readonly attrDuplicationArchivePeriod: ros.IResolvable | string;
    /**
     * Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access. The default time is 180 days.
     */
    readonly attrDuplicationInfrequentAccessPeriod: ros.IResolvable | string;
    /**
     * Attribute EnableBackupLog: Whether to enable incremental log Backup.
     */
    readonly attrEnableBackupLog: ros.IResolvable | string;
    /**
     * Attribute InstanceClass: Instance class.
     */
    readonly attrInstanceClass: ros.IResolvable | string;
    /**
     * Attribute OssBucketName: OSS Bucket name.
     */
    readonly attrOssBucketName: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointDatabaseName: The name of the database.
     */
    readonly attrSourceEndpointDatabaseName: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointInstanceId: The ID of the database instance.
     */
    readonly attrSourceEndpointInstanceId: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointInstanceType: The location of the database.
     */
    readonly attrSourceEndpointInstanceType: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointRegion: The region of the database.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointSid: Oracle SID name.
     */
    readonly attrSourceEndpointSid: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointUserName: Database account.
     */
    readonly attrSourceEndpointUserName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupPlanProps, enableResourcePropertyConstraint?: boolean);
}
