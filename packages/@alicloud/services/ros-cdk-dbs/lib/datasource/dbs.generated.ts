// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosBackupPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosBackupPlanProps`
 *
 * @returns the result of the validation.
 */
function RosBackupPlanPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backupPlanId', ros.requiredValidator)(properties.backupPlanId));
    errors.collect(ros.propertyValidator('backupPlanId', ros.validateString)(properties.backupPlanId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosBackupPlanProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DBS::BackupPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosBackupPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DBS::BackupPlan` resource.
 */
// @ts-ignore TS6133
function rosBackupPlanPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackupPlanPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupPlanId': ros.stringToRosTemplate(properties.backupPlanId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DBS::BackupPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
 */
export class RosBackupPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DBS::BackupPlan";

    /**
     * @Attribute BackupGatewayId: The ID of the backup gateway.
     */
    public readonly attrBackupGatewayId: ros.IResolvable;

    /**
     * @Attribute BackupMethod: Backup method.
     */
    public readonly attrBackupMethod: ros.IResolvable;

    /**
     * @Attribute BackupObjects: The backup object.
     */
    public readonly attrBackupObjects: ros.IResolvable;

    /**
     * @Attribute BackupPeriod: Full backup cycle.
     */
    public readonly attrBackupPeriod: ros.IResolvable;

    /**
     * @Attribute BackupPlanId: The ID of the backup plan.
     */
    public readonly attrBackupPlanId: ros.IResolvable;

    /**
     * @Attribute BackupPlanName: The name of the backup plan.
     */
    public readonly attrBackupPlanName: ros.IResolvable;

    /**
     * @Attribute BackupRetentionPeriod: The retention time of backup data. Valid values: 0 to 1825. Default value: 730 days.
     */
    public readonly attrBackupRetentionPeriod: ros.IResolvable;

    /**
     * @Attribute BackupStartTime: The start time of full Backup.
     */
    public readonly attrBackupStartTime: ros.IResolvable;

    /**
     * @Attribute BackupStorageType: Built-in storage type:.
     */
    public readonly attrBackupStorageType: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the backup plans.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
     */
    public readonly attrCrossAliyunId: ros.IResolvable;

    /**
     * @Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
     */
    public readonly attrCrossRoleName: ros.IResolvable;

    /**
     * @Attribute DatabaseType: Database type.
     */
    public readonly attrDatabaseType: ros.IResolvable;

    /**
     * @Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
     */
    public readonly attrDuplicationArchivePeriod: ros.IResolvable;

    /**
     * @Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access. The default time is 180 days.
     */
    public readonly attrDuplicationInfrequentAccessPeriod: ros.IResolvable;

    /**
     * @Attribute EnableBackupLog: Whether to enable incremental log Backup.
     */
    public readonly attrEnableBackupLog: ros.IResolvable;

    /**
     * @Attribute InstanceClass: Instance class.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * @Attribute OssBucketName: OSS Bucket name.
     */
    public readonly attrOssBucketName: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SourceEndpointDatabaseName: The name of the database.
     */
    public readonly attrSourceEndpointDatabaseName: ros.IResolvable;

    /**
     * @Attribute SourceEndpointInstanceId: The ID of the database instance.
     */
    public readonly attrSourceEndpointInstanceId: ros.IResolvable;

    /**
     * @Attribute SourceEndpointInstanceType: The location of the database.
     */
    public readonly attrSourceEndpointInstanceType: ros.IResolvable;

    /**
     * @Attribute SourceEndpointRegion: The region of the database.
     */
    public readonly attrSourceEndpointRegion: ros.IResolvable;

    /**
     * @Attribute SourceEndpointSid: Oracle SID name.
     */
    public readonly attrSourceEndpointSid: ros.IResolvable;

    /**
     * @Attribute SourceEndpointUserName: Database account.
     */
    public readonly attrSourceEndpointUserName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    public backupPlanId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupPlanProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackupPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupGatewayId = this.getAtt('BackupGatewayId');
        this.attrBackupMethod = this.getAtt('BackupMethod');
        this.attrBackupObjects = this.getAtt('BackupObjects');
        this.attrBackupPeriod = this.getAtt('BackupPeriod');
        this.attrBackupPlanId = this.getAtt('BackupPlanId');
        this.attrBackupPlanName = this.getAtt('BackupPlanName');
        this.attrBackupRetentionPeriod = this.getAtt('BackupRetentionPeriod');
        this.attrBackupStartTime = this.getAtt('BackupStartTime');
        this.attrBackupStorageType = this.getAtt('BackupStorageType');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCrossAliyunId = this.getAtt('CrossAliyunId');
        this.attrCrossRoleName = this.getAtt('CrossRoleName');
        this.attrDatabaseType = this.getAtt('DatabaseType');
        this.attrDuplicationArchivePeriod = this.getAtt('DuplicationArchivePeriod');
        this.attrDuplicationInfrequentAccessPeriod = this.getAtt('DuplicationInfrequentAccessPeriod');
        this.attrEnableBackupLog = this.getAtt('EnableBackupLog');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrOssBucketName = this.getAtt('OssBucketName');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSourceEndpointDatabaseName = this.getAtt('SourceEndpointDatabaseName');
        this.attrSourceEndpointInstanceId = this.getAtt('SourceEndpointInstanceId');
        this.attrSourceEndpointInstanceType = this.getAtt('SourceEndpointInstanceType');
        this.attrSourceEndpointRegion = this.getAtt('SourceEndpointRegion');
        this.attrSourceEndpointSid = this.getAtt('SourceEndpointSid');
        this.attrSourceEndpointUserName = this.getAtt('SourceEndpointUserName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupPlanId = props.backupPlanId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPlanId: this.backupPlanId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackupPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosBackupPlansProps`
 *
 * @param properties - the TypeScript properties of a `RosBackupPlansProps`
 *
 * @returns the result of the validation.
 */
function RosBackupPlansPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backupPlanName', ros.validateString)(properties.backupPlanName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('backupPlanId', ros.validateString)(properties.backupPlanId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosBackupPlansProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DBS::BackupPlans` resource
 *
 * @param properties - the TypeScript properties of a `RosBackupPlansProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DBS::BackupPlans` resource.
 */
// @ts-ignore TS6133
function rosBackupPlansPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackupPlansPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupPlanId': ros.stringToRosTemplate(properties.backupPlanId),
      'BackupPlanName': ros.stringToRosTemplate(properties.backupPlanName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DBS::BackupPlans`, which is used to query the information about backup schedules.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupPlans` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
 */
export class RosBackupPlans extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DBS::BackupPlans";

    /**
     * @Attribute BackupPlanIds: The list of backup plan IDs.
     */
    public readonly attrBackupPlanIds: ros.IResolvable;

    /**
     * @Attribute BackupPlans: The list of backup plans.
     */
    public readonly attrBackupPlans: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupPlanId: The ID of the backup schedule.
     */
    public backupPlanId: string | ros.IResolvable | undefined;

    /**
     * @Property backupPlanName: The name of the backup schedule.
     */
    public backupPlanName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupPlansProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackupPlans.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupPlanIds = this.getAtt('BackupPlanIds');
        this.attrBackupPlans = this.getAtt('BackupPlans');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupPlanId = props.backupPlanId;
        this.backupPlanName = props.backupPlanName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPlanId: this.backupPlanId,
            backupPlanName: this.backupPlanName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackupPlansPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
