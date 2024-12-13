import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupPlan } from './dbs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DBS::BackupPlan`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackupPlan`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
 */
export class BackupPlan extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BackupPlanProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BackupGatewayId: The ID of the backup gateway.
     */
    public readonly attrBackupGatewayId: ros.IResolvable;

    /**
     * Attribute BackupMethod: Backup method.
     */
    public readonly attrBackupMethod: ros.IResolvable;

    /**
     * Attribute BackupObjects: The backup object.
     */
    public readonly attrBackupObjects: ros.IResolvable;

    /**
     * Attribute BackupPeriod: Full backup cycle.
     */
    public readonly attrBackupPeriod: ros.IResolvable;

    /**
     * Attribute BackupPlanId: The ID of the backup plan.
     */
    public readonly attrBackupPlanId: ros.IResolvable;

    /**
     * Attribute BackupPlanName: The name of the backup plan.
     */
    public readonly attrBackupPlanName: ros.IResolvable;

    /**
     * Attribute BackupRetentionPeriod: The retention time of backup data. Valid values: 0 to 1825. Default value: 730 days.
     */
    public readonly attrBackupRetentionPeriod: ros.IResolvable;

    /**
     * Attribute BackupStartTime: The start time of full Backup.
     */
    public readonly attrBackupStartTime: ros.IResolvable;

    /**
     * Attribute BackupStorageType: Built-in storage type:.
     */
    public readonly attrBackupStorageType: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the backup plans.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
     */
    public readonly attrCrossAliyunId: ros.IResolvable;

    /**
     * Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
     */
    public readonly attrCrossRoleName: ros.IResolvable;

    /**
     * Attribute DatabaseType: Database type.
     */
    public readonly attrDatabaseType: ros.IResolvable;

    /**
     * Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
     */
    public readonly attrDuplicationArchivePeriod: ros.IResolvable;

    /**
     * Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access. The default time is 180 days.
     */
    public readonly attrDuplicationInfrequentAccessPeriod: ros.IResolvable;

    /**
     * Attribute EnableBackupLog: Whether to enable incremental log Backup.
     */
    public readonly attrEnableBackupLog: ros.IResolvable;

    /**
     * Attribute InstanceClass: Instance class.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * Attribute OssBucketName: OSS Bucket name.
     */
    public readonly attrOssBucketName: ros.IResolvable;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SourceEndpointDatabaseName: The name of the database.
     */
    public readonly attrSourceEndpointDatabaseName: ros.IResolvable;

    /**
     * Attribute SourceEndpointInstanceId: The ID of the database instance.
     */
    public readonly attrSourceEndpointInstanceId: ros.IResolvable;

    /**
     * Attribute SourceEndpointInstanceType: The location of the database.
     */
    public readonly attrSourceEndpointInstanceType: ros.IResolvable;

    /**
     * Attribute SourceEndpointRegion: The region of the database.
     */
    public readonly attrSourceEndpointRegion: ros.IResolvable;

    /**
     * Attribute SourceEndpointSid: Oracle SID name.
     */
    public readonly attrSourceEndpointSid: ros.IResolvable;

    /**
     * Attribute SourceEndpointUserName: Database account.
     */
    public readonly attrSourceEndpointUserName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupPlanProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBackupPlan = new RosBackupPlan(this, id,  {
            backupPlanId: props.backupPlanId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupPlan;
        this.attrBackupGatewayId = rosBackupPlan.attrBackupGatewayId;
        this.attrBackupMethod = rosBackupPlan.attrBackupMethod;
        this.attrBackupObjects = rosBackupPlan.attrBackupObjects;
        this.attrBackupPeriod = rosBackupPlan.attrBackupPeriod;
        this.attrBackupPlanId = rosBackupPlan.attrBackupPlanId;
        this.attrBackupPlanName = rosBackupPlan.attrBackupPlanName;
        this.attrBackupRetentionPeriod = rosBackupPlan.attrBackupRetentionPeriod;
        this.attrBackupStartTime = rosBackupPlan.attrBackupStartTime;
        this.attrBackupStorageType = rosBackupPlan.attrBackupStorageType;
        this.attrCreateTime = rosBackupPlan.attrCreateTime;
        this.attrCrossAliyunId = rosBackupPlan.attrCrossAliyunId;
        this.attrCrossRoleName = rosBackupPlan.attrCrossRoleName;
        this.attrDatabaseType = rosBackupPlan.attrDatabaseType;
        this.attrDuplicationArchivePeriod = rosBackupPlan.attrDuplicationArchivePeriod;
        this.attrDuplicationInfrequentAccessPeriod = rosBackupPlan.attrDuplicationInfrequentAccessPeriod;
        this.attrEnableBackupLog = rosBackupPlan.attrEnableBackupLog;
        this.attrInstanceClass = rosBackupPlan.attrInstanceClass;
        this.attrOssBucketName = rosBackupPlan.attrOssBucketName;
        this.attrPaymentType = rosBackupPlan.attrPaymentType;
        this.attrResourceGroupId = rosBackupPlan.attrResourceGroupId;
        this.attrSourceEndpointDatabaseName = rosBackupPlan.attrSourceEndpointDatabaseName;
        this.attrSourceEndpointInstanceId = rosBackupPlan.attrSourceEndpointInstanceId;
        this.attrSourceEndpointInstanceType = rosBackupPlan.attrSourceEndpointInstanceType;
        this.attrSourceEndpointRegion = rosBackupPlan.attrSourceEndpointRegion;
        this.attrSourceEndpointSid = rosBackupPlan.attrSourceEndpointSid;
        this.attrSourceEndpointUserName = rosBackupPlan.attrSourceEndpointUserName;
    }
}
