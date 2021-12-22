// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::HBR::BackupClients`
 */
export interface RosBackupClientsProps {

    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBackupClientsProps`
 *
 * @param properties - the TypeScript properties of a `RosBackupClientsProps`
 *
 * @returns the result of the validation.
 */
function RosBackupClientsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosBackupClientsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients` resource
 *
 * @param properties - the TypeScript properties of a `RosBackupClientsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients` resource.
 */
// @ts-ignore TS6133
function rosBackupClientsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackupClientsPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
    };
}

/**
 * A ROS template type:  `ALIYUN::HBR::BackupClients`
 */
export class RosBackupClients extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::BackupClients";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClientIds: ID list of clients installed in instances
     */
    public readonly attrClientIds: ros.IResolvable;

    /**
     * @Attribute InstanceIds: ID list of instances to install backup client
     */
    public readonly attrInstanceIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupClientsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackupClients.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClientIds = this.getAtt('ClientIds');
        this.attrInstanceIds = this.getAtt('InstanceIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackupClientsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::HBR::DbAgent`
 */
export interface RosDbAgentProps {

    /**
     * @Property instanceInfo: Instance infos
     */
    readonly instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDbAgentProps`
 *
 * @param properties - the TypeScript properties of a `RosDbAgentProps`
 *
 * @returns the result of the validation.
 */
function RosDbAgentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceInfo', ros.requiredValidator)(properties.instanceInfo));
    if(properties.instanceInfo && (Array.isArray(properties.instanceInfo) || (typeof properties.instanceInfo) === 'string')) {
        errors.collect(ros.propertyValidator('instanceInfo', ros.validateLength)({
            data: properties.instanceInfo.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceInfo', ros.listValidator(RosDbAgent_InstanceInfoPropertyValidator))(properties.instanceInfo));
    return errors.wrap('supplied properties not correct for "RosDbAgentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent` resource
 *
 * @param properties - the TypeScript properties of a `RosDbAgentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent` resource.
 */
// @ts-ignore TS6133
function rosDbAgentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDbAgentPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceInfo: ros.listMapper(rosDbAgentInstanceInfoPropertyToRosTemplate)(properties.instanceInfo),
    };
}

/**
 * A ROS template type:  `ALIYUN::HBR::DbAgent`
 */
export class RosDbAgent extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbAgent";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceIds: Uni backup agent instance ids
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute TaskId: Uni backup agent install task id.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * @Attribute UniBackupInstanceDetails: Uni backup agent instance info details
     */
    public readonly attrUniBackupInstanceDetails: ros.IResolvable;

    /**
     * @Attribute UniBackupInstances: Uni backup agent instance info
     */
    public readonly attrUniBackupInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceInfo: Instance infos
     */
    public instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::HBR::DbAgent`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbAgentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDbAgent.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrUniBackupInstanceDetails = this.getAtt('UniBackupInstanceDetails');
        this.attrUniBackupInstances = this.getAtt('UniBackupInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceInfo = props.instanceInfo;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceInfo: this.instanceInfo,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDbAgentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDbAgent {
    /**
     * @stability external
     */
    export interface InstanceInfoProperty {
        /**
         * @Property userName: Database backup account username
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: ECS instance id
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property sourceType: Data source type, valid value: MYSQL, ORACLE, MSSQL
         */
        readonly sourceType: string | ros.IResolvable;
        /**
         * @Property password: Database backup account password
         */
        readonly password?: string | ros.IResolvable;
        /**
         * @Property authenticationType: verification method, valid value: INSTANCE, ACCESS_KEY
         */
        readonly authenticationType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceInfoProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosDbAgent_InstanceInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["MYSQL","ORACLE","MSSQL"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if(properties.authenticationType && (typeof properties.authenticationType) !== 'object') {
        errors.collect(ros.propertyValidator('authenticationType', ros.validateAllowedValues)({
          data: properties.authenticationType,
          allowedValues: ["INSTANCE","ACCESS_KEY"],
        }));
    }
    errors.collect(ros.propertyValidator('authenticationType', ros.validateString)(properties.authenticationType));
    return errors.wrap('supplied properties not correct for "InstanceInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent.InstanceInfo` resource
 *
 * @param properties - the TypeScript properties of a `InstanceInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent.InstanceInfo` resource.
 */
// @ts-ignore TS6133
function rosDbAgentInstanceInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDbAgent_InstanceInfoPropertyValidator(properties).assertSuccess();
    return {
      UserName: ros.stringToRosTemplate(properties.userName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      SourceType: ros.stringToRosTemplate(properties.sourceType),
      Password: ros.stringToRosTemplate(properties.password),
      AuthenticationType: ros.stringToRosTemplate(properties.authenticationType),
    };
}

/**
 * Properties for defining a `ALIYUN::HBR::DbPlan`
 */
export interface RosDbPlanProps {

    /**
     * @Property dbPlanName: Display name of the backup plan.
     */
    readonly dbPlanName: string | ros.IResolvable;

    /**
     * @Property hostUuid: Uuid of the host of the database instance.
     */
    readonly hostUuid: string | ros.IResolvable;

    /**
     * @Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * @Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    readonly vaultId: string | ros.IResolvable;

    /**
     * @Property continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    readonly continuousPlan?: string | ros.IResolvable;

    /**
     * @Property cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    readonly cumulativePlan?: string | ros.IResolvable;

    /**
     * @Property fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    readonly fullPlan?: string | ros.IResolvable;

    /**
     * @Property incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    readonly incPlan?: string | ros.IResolvable;

    /**
     * @Property instanceUuid: Uuid of database instance.
     */
    readonly instanceUuid?: string | ros.IResolvable;

    /**
     * @Property logPlan: Log backup plan schedule.More details see FullPlan.
     */
    readonly logPlan?: string | ros.IResolvable;

    /**
     * @Property maxRateLimit: Max rate limit for backup job,
     */
    readonly maxRateLimit?: number | ros.IResolvable;

    /**
     * @Property maxRetrySeconds: Max retry seconds on network failure.
     */
    readonly maxRetrySeconds?: number | ros.IResolvable;

    /**
     * @Property options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    readonly options?: string | ros.IResolvable;

    /**
     * @Property source: Which database instance or database will be backup.
     */
    readonly source?: RosDbPlan.SourceProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDbPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosDbPlanProps`
 *
 * @returns the result of the validation.
 */
function RosDbPlanPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('options', ros.validateString)(properties.options));
    errors.collect(ros.propertyValidator('instanceUuid', ros.validateString)(properties.instanceUuid));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('source', RosDbPlan_SourcePropertyValidator)(properties.source));
    errors.collect(ros.propertyValidator('continuousPlan', ros.validateString)(properties.continuousPlan));
    errors.collect(ros.propertyValidator('incPlan', ros.validateString)(properties.incPlan));
    errors.collect(ros.propertyValidator('maxRetrySeconds', ros.validateNumber)(properties.maxRetrySeconds));
    errors.collect(ros.propertyValidator('hostUuid', ros.requiredValidator)(properties.hostUuid));
    errors.collect(ros.propertyValidator('hostUuid', ros.validateString)(properties.hostUuid));
    errors.collect(ros.propertyValidator('cumulativePlan', ros.validateString)(properties.cumulativePlan));
    errors.collect(ros.propertyValidator('fullPlan', ros.validateString)(properties.fullPlan));
    errors.collect(ros.propertyValidator('logPlan', ros.validateString)(properties.logPlan));
    errors.collect(ros.propertyValidator('maxRateLimit', ros.validateNumber)(properties.maxRateLimit));
    errors.collect(ros.propertyValidator('dbPlanName', ros.requiredValidator)(properties.dbPlanName));
    errors.collect(ros.propertyValidator('dbPlanName', ros.validateString)(properties.dbPlanName));
    return errors.wrap('supplied properties not correct for "RosDbPlanProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosDbPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan` resource.
 */
// @ts-ignore TS6133
function rosDbPlanPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDbPlanPropsValidator(properties).assertSuccess();
    }
    return {
      DbPlanName: ros.stringToRosTemplate(properties.dbPlanName),
      HostUuid: ros.stringToRosTemplate(properties.hostUuid),
      SourceType: ros.stringToRosTemplate(properties.sourceType),
      VaultId: ros.stringToRosTemplate(properties.vaultId),
      ContinuousPlan: ros.stringToRosTemplate(properties.continuousPlan),
      CumulativePlan: ros.stringToRosTemplate(properties.cumulativePlan),
      FullPlan: ros.stringToRosTemplate(properties.fullPlan),
      IncPlan: ros.stringToRosTemplate(properties.incPlan),
      InstanceUuid: ros.stringToRosTemplate(properties.instanceUuid),
      LogPlan: ros.stringToRosTemplate(properties.logPlan),
      MaxRateLimit: ros.numberToRosTemplate(properties.maxRateLimit),
      MaxRetrySeconds: ros.numberToRosTemplate(properties.maxRetrySeconds),
      Options: ros.stringToRosTemplate(properties.options),
      Source: rosDbPlanSourcePropertyToRosTemplate(properties.source),
    };
}

/**
 * A ROS template type:  `ALIYUN::HBR::DbPlan`
 */
export class RosDbPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbPlan";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContinuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    public readonly attrContinuousPlan: ros.IResolvable;

    /**
     * @Attribute ContinuousUuid: Uuid of continuous backup plan.
     */
    public readonly attrContinuousUuid: ros.IResolvable;

    /**
     * @Attribute CumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    public readonly attrCumulativePlan: ros.IResolvable;

    /**
     * @Attribute CumulativeUuid: Uuid of cumulative plan.
     */
    public readonly attrCumulativeUuid: ros.IResolvable;

    /**
     * @Attribute DbPlanName: Display name of the backup plan.
     */
    public readonly attrDbPlanName: ros.IResolvable;

    /**
     * @Attribute FullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    public readonly attrFullPlan: ros.IResolvable;

    /**
     * @Attribute FullUuid: Uuid of full backup plan.
     */
    public readonly attrFullUuid: ros.IResolvable;

    /**
     * @Attribute HostUuid: Uuid of the host of the database instance.
     */
    public readonly attrHostUuid: ros.IResolvable;

    /**
     * @Attribute IncPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    public readonly attrIncPlan: ros.IResolvable;

    /**
     * @Attribute IncUuid: Uuid of the incremental bakcup plan.
     */
    public readonly attrIncUuid: ros.IResolvable;

    /**
     * @Attribute InstanceUuid: Uuid of database instance.
     */
    public readonly attrInstanceUuid: ros.IResolvable;

    /**
     * @Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
     */
    public readonly attrLogPlan: ros.IResolvable;

    /**
     * @Attribute LogUuid: Uuid of the log backup plan.
     */
    public readonly attrLogUuid: ros.IResolvable;

    /**
     * @Attribute MaxRateLimit: Max rate limit for backup job,
     */
    public readonly attrMaxRateLimit: ros.IResolvable;

    /**
     * @Attribute MaxRetrySeconds: Max retry seconds on network failure.
     */
    public readonly attrMaxRetrySeconds: ros.IResolvable;

    /**
     * @Attribute Options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    public readonly attrOptions: ros.IResolvable;

    /**
     * @Attribute PlanId: Id of the backup plan.
     */
    public readonly attrPlanId: ros.IResolvable;

    /**
     * @Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * @Attribute Target: Target vault to backup.
     */
    public readonly attrTarget: ros.IResolvable;

    /**
     * @Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    public readonly attrVaultId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbPlanName: Display name of the backup plan.
     */
    public dbPlanName: string | ros.IResolvable;

    /**
     * @Property hostUuid: Uuid of the host of the database instance.
     */
    public hostUuid: string | ros.IResolvable;

    /**
     * @Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    public vaultId: string | ros.IResolvable;

    /**
     * @Property continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    public continuousPlan: string | ros.IResolvable | undefined;

    /**
     * @Property cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    public cumulativePlan: string | ros.IResolvable | undefined;

    /**
     * @Property fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    public fullPlan: string | ros.IResolvable | undefined;

    /**
     * @Property incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    public incPlan: string | ros.IResolvable | undefined;

    /**
     * @Property instanceUuid: Uuid of database instance.
     */
    public instanceUuid: string | ros.IResolvable | undefined;

    /**
     * @Property logPlan: Log backup plan schedule.More details see FullPlan.
     */
    public logPlan: string | ros.IResolvable | undefined;

    /**
     * @Property maxRateLimit: Max rate limit for backup job,
     */
    public maxRateLimit: number | ros.IResolvable | undefined;

    /**
     * @Property maxRetrySeconds: Max retry seconds on network failure.
     */
    public maxRetrySeconds: number | ros.IResolvable | undefined;

    /**
     * @Property options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    public options: string | ros.IResolvable | undefined;

    /**
     * @Property source: Which database instance or database will be backup.
     */
    public source: RosDbPlan.SourceProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::HBR::DbPlan`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbPlanProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDbPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContinuousPlan = this.getAtt('ContinuousPlan');
        this.attrContinuousUuid = this.getAtt('ContinuousUuid');
        this.attrCumulativePlan = this.getAtt('CumulativePlan');
        this.attrCumulativeUuid = this.getAtt('CumulativeUuid');
        this.attrDbPlanName = this.getAtt('DbPlanName');
        this.attrFullPlan = this.getAtt('FullPlan');
        this.attrFullUuid = this.getAtt('FullUuid');
        this.attrHostUuid = this.getAtt('HostUuid');
        this.attrIncPlan = this.getAtt('IncPlan');
        this.attrIncUuid = this.getAtt('IncUuid');
        this.attrInstanceUuid = this.getAtt('InstanceUuid');
        this.attrLogPlan = this.getAtt('LogPlan');
        this.attrLogUuid = this.getAtt('LogUuid');
        this.attrMaxRateLimit = this.getAtt('MaxRateLimit');
        this.attrMaxRetrySeconds = this.getAtt('MaxRetrySeconds');
        this.attrOptions = this.getAtt('Options');
        this.attrPlanId = this.getAtt('PlanId');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrTarget = this.getAtt('Target');
        this.attrVaultId = this.getAtt('VaultId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbPlanName = props.dbPlanName;
        this.hostUuid = props.hostUuid;
        this.sourceType = props.sourceType;
        this.vaultId = props.vaultId;
        this.continuousPlan = props.continuousPlan;
        this.cumulativePlan = props.cumulativePlan;
        this.fullPlan = props.fullPlan;
        this.incPlan = props.incPlan;
        this.instanceUuid = props.instanceUuid;
        this.logPlan = props.logPlan;
        this.maxRateLimit = props.maxRateLimit;
        this.maxRetrySeconds = props.maxRetrySeconds;
        this.options = props.options;
        this.source = props.source;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbPlanName: this.dbPlanName,
            hostUuid: this.hostUuid,
            sourceType: this.sourceType,
            vaultId: this.vaultId,
            continuousPlan: this.continuousPlan,
            cumulativePlan: this.cumulativePlan,
            fullPlan: this.fullPlan,
            incPlan: this.incPlan,
            instanceUuid: this.instanceUuid,
            logPlan: this.logPlan,
            maxRateLimit: this.maxRateLimit,
            maxRetrySeconds: this.maxRetrySeconds,
            options: this.options,
            source: this.source,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDbPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDbPlan {
    /**
     * @stability external
     */
    export interface SourceProperty {
        /**
         * @Property entries: Backup database instance or databases or tables. For Oracle, use ["oracle://${instanceName}", "oracle://${instanceName}/archivelog"], ${instanceName} is the name of the oracle database instance, which can be get from dbAgent resource. For Mysql, use "mysql://${instanceName}". For SQL Server,  use ["mssql://${instanceName}/${databse1}", "mssql://${instanceName}/${databse2}"], ${databse} can be get from dbAgent resource(MSSQL)
         */
        readonly entries?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceProperty`
 *
 * @param properties - the TypeScript properties of a `SourceProperty`
 *
 * @returns the result of the validation.
 */
function RosDbPlan_SourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entries', ros.listValidator(ros.validateString))(properties.entries));
    return errors.wrap('supplied properties not correct for "SourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan.Source` resource
 *
 * @param properties - the TypeScript properties of a `SourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan.Source` resource.
 */
// @ts-ignore TS6133
function rosDbPlanSourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDbPlan_SourcePropertyValidator(properties).assertSuccess();
    return {
      Entries: ros.listMapper(ros.stringToRosTemplate)(properties.entries),
    };
}

/**
 * Properties for defining a `ALIYUN::HBR::DbVault`
 */
export interface RosDbVaultProps {

    /**
     * @Property retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    readonly retentionDays: number | ros.IResolvable;

    /**
     * @Property vaultName: Display name of the vault.
     */
    readonly vaultName: string | ros.IResolvable;

    /**
     * @Property vaultRegionId: The region ID to create the vault.
     */
    readonly vaultRegionId: string | ros.IResolvable;

    /**
     * @Property description: Description of the vault.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDbVaultProps`
 *
 * @param properties - the TypeScript properties of a `RosDbVaultProps`
 *
 * @returns the result of the validation.
 */
function RosDbVaultPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vaultName', ros.requiredValidator)(properties.vaultName));
    errors.collect(ros.propertyValidator('vaultName', ros.validateString)(properties.vaultName));
    errors.collect(ros.propertyValidator('retentionDays', ros.requiredValidator)(properties.retentionDays));
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('vaultRegionId', ros.requiredValidator)(properties.vaultRegionId));
    errors.collect(ros.propertyValidator('vaultRegionId', ros.validateString)(properties.vaultRegionId));
    return errors.wrap('supplied properties not correct for "RosDbVaultProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault` resource
 *
 * @param properties - the TypeScript properties of a `RosDbVaultProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault` resource.
 */
// @ts-ignore TS6133
function rosDbVaultPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDbVaultPropsValidator(properties).assertSuccess();
    }
    return {
      RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
      VaultName: ros.stringToRosTemplate(properties.vaultName),
      VaultRegionId: ros.stringToRosTemplate(properties.vaultRegionId),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::HBR::DbVault`
 */
export class RosDbVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbVault";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Description: Description of the vault.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute RetentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    public readonly attrRetentionDays: ros.IResolvable;

    /**
     * @Attribute VaultId: Vault ID.
     */
    public readonly attrVaultId: ros.IResolvable;

    /**
     * @Attribute VaultName: Display name of the vault.
     */
    public readonly attrVaultName: ros.IResolvable;

    /**
     * @Attribute VaultRegionId: The region ID to create the vault.
     */
    public readonly attrVaultRegionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    public retentionDays: number | ros.IResolvable;

    /**
     * @Property vaultName: Display name of the vault.
     */
    public vaultName: string | ros.IResolvable;

    /**
     * @Property vaultRegionId: The region ID to create the vault.
     */
    public vaultRegionId: string | ros.IResolvable;

    /**
     * @Property description: Description of the vault.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::HBR::DbVault`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbVaultProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDbVault.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrRetentionDays = this.getAtt('RetentionDays');
        this.attrVaultId = this.getAtt('VaultId');
        this.attrVaultName = this.getAtt('VaultName');
        this.attrVaultRegionId = this.getAtt('VaultRegionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.retentionDays = props.retentionDays;
        this.vaultName = props.vaultName;
        this.vaultRegionId = props.vaultRegionId;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            retentionDays: this.retentionDays,
            vaultName: this.vaultName,
            vaultRegionId: this.vaultRegionId,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDbVaultPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::HBR::RestoreJob`
 */
export interface RosRestoreJobProps {

    /**
     * @Property restoreType: Restore type
     */
    readonly restoreType: string | ros.IResolvable;

    /**
     * @Property snapshotId: Snapshot ID
     */
    readonly snapshotId: string | ros.IResolvable;

    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    readonly sourceClientId: string | ros.IResolvable;

    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    readonly sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property sourceType: Source type
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    readonly targetClientId: string | ros.IResolvable;

    /**
     * @Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
     */
    readonly targetInstanceId: string | ros.IResolvable;

    /**
     * @Property targetPath: Target path. For instance, "/".
     */
    readonly targetPath: string | ros.IResolvable;

    /**
     * @Property vaultId: Vault ID
     */
    readonly vaultId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRestoreJobProps`
 *
 * @param properties - the TypeScript properties of a `RosRestoreJobProps`
 *
 * @returns the result of the validation.
 */
function RosRestoreJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.requiredValidator)(properties.snapshotId));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('targetClientId', ros.requiredValidator)(properties.targetClientId));
    errors.collect(ros.propertyValidator('targetClientId', ros.validateString)(properties.targetClientId));
    errors.collect(ros.propertyValidator('targetPath', ros.requiredValidator)(properties.targetPath));
    errors.collect(ros.propertyValidator('targetPath', ros.validateString)(properties.targetPath));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["FILE","ECS_FILE"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('sourceClientId', ros.requiredValidator)(properties.sourceClientId));
    errors.collect(ros.propertyValidator('sourceClientId', ros.validateString)(properties.sourceClientId));
    errors.collect(ros.propertyValidator('targetInstanceId', ros.requiredValidator)(properties.targetInstanceId));
    errors.collect(ros.propertyValidator('targetInstanceId', ros.validateString)(properties.targetInstanceId));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('restoreType', ros.requiredValidator)(properties.restoreType));
    if(properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
          data: properties.restoreType,
          allowedValues: ["FILE","ECS_FILE"],
        }));
    }
    errors.collect(ros.propertyValidator('restoreType', ros.validateString)(properties.restoreType));
    return errors.wrap('supplied properties not correct for "RosRestoreJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::RestoreJob` resource
 *
 * @param properties - the TypeScript properties of a `RosRestoreJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::RestoreJob` resource.
 */
// @ts-ignore TS6133
function rosRestoreJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRestoreJobPropsValidator(properties).assertSuccess();
    }
    return {
      RestoreType: ros.stringToRosTemplate(properties.restoreType),
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      SourceClientId: ros.stringToRosTemplate(properties.sourceClientId),
      SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
      SourceType: ros.stringToRosTemplate(properties.sourceType),
      TargetClientId: ros.stringToRosTemplate(properties.targetClientId),
      TargetInstanceId: ros.stringToRosTemplate(properties.targetInstanceId),
      TargetPath: ros.stringToRosTemplate(properties.targetPath),
      VaultId: ros.stringToRosTemplate(properties.vaultId),
    };
}

/**
 * A ROS template type:  `ALIYUN::HBR::RestoreJob`
 */
export class RosRestoreJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::RestoreJob";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ErrorMessage: Error message of restore job
     */
    public readonly attrErrorMessage: ros.IResolvable;

    /**
     * @Attribute RestoreId: Restore job ID
     */
    public readonly attrRestoreId: ros.IResolvable;

    /**
     * @Attribute RestoreType: Restore type
     */
    public readonly attrRestoreType: ros.IResolvable;

    /**
     * @Attribute SourceType: Source type
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * @Attribute Status: Restore job status
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property restoreType: Restore type
     */
    public restoreType: string | ros.IResolvable;

    /**
     * @Property snapshotId: Snapshot ID
     */
    public snapshotId: string | ros.IResolvable;

    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    public sourceClientId: string | ros.IResolvable;

    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    public sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property sourceType: Source type
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    public targetClientId: string | ros.IResolvable;

    /**
     * @Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
     */
    public targetInstanceId: string | ros.IResolvable;

    /**
     * @Property targetPath: Target path. For instance, "/".
     */
    public targetPath: string | ros.IResolvable;

    /**
     * @Property vaultId: Vault ID
     */
    public vaultId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRestoreJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrErrorMessage = this.getAtt('ErrorMessage');
        this.attrRestoreId = this.getAtt('RestoreId');
        this.attrRestoreType = this.getAtt('RestoreType');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.restoreType = props.restoreType;
        this.snapshotId = props.snapshotId;
        this.sourceClientId = props.sourceClientId;
        this.sourceInstanceId = props.sourceInstanceId;
        this.sourceType = props.sourceType;
        this.targetClientId = props.targetClientId;
        this.targetInstanceId = props.targetInstanceId;
        this.targetPath = props.targetPath;
        this.vaultId = props.vaultId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            restoreType: this.restoreType,
            snapshotId: this.snapshotId,
            sourceClientId: this.sourceClientId,
            sourceInstanceId: this.sourceInstanceId,
            sourceType: this.sourceType,
            targetClientId: this.targetClientId,
            targetInstanceId: this.targetInstanceId,
            targetPath: this.targetPath,
            vaultId: this.vaultId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRestoreJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
