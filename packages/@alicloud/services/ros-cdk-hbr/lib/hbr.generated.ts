// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosBackupClients`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export interface RosBackupClientsProps {

    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosBackupClients.TagsProperty[];
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosBackupClients_TagsPropertyValidator))(properties.tags));
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
      'InstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      'Tags': ros.listMapper(rosBackupClientsTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::BackupClients`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupClients` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export class RosBackupClients extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::BackupClients";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosBackupClients.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupClientsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackupClients.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrClientIds = this.getAtt('ClientIds');
        this.attrInstanceIds = this.getAtt('InstanceIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackupClientsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosBackupClients {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosBackupClients_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients.Tags` resource.
 */
// @ts-ignore TS6133
function rosBackupClientsTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBackupClients_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosCrossAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
 */
export interface RosCrossAccountProps {

    /**
     * @Property alias: The alias of the cross-account authorization.
     */
    readonly alias?: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;

    /**
     * @Property crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
     */
    readonly crossAccountType?: string | ros.IResolvable;

    /**
     * @Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
     */
    readonly crossAccountUserId?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCrossAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosCrossAccountProps`
 *
 * @returns the result of the validation.
 */
function RosCrossAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateNumber)(properties.crossAccountUserId));
    errors.collect(ros.propertyValidator('crossAccountRoleName', ros.validateString)(properties.crossAccountRoleName));
    errors.collect(ros.propertyValidator('alias', ros.validateString)(properties.alias));
    if(properties.crossAccountType && (typeof properties.crossAccountType) !== 'object') {
        errors.collect(ros.propertyValidator('crossAccountType', ros.validateAllowedValues)({
          data: properties.crossAccountType,
          allowedValues: ["CROSS_ACCOUNT","CROSS_ACCOUNT_BY_RD"],
        }));
    }
    errors.collect(ros.propertyValidator('crossAccountType', ros.validateString)(properties.crossAccountType));
    return errors.wrap('supplied properties not correct for "RosCrossAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::CrossAccount` resource
 *
 * @param properties - the TypeScript properties of a `RosCrossAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::CrossAccount` resource.
 */
// @ts-ignore TS6133
function rosCrossAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCrossAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'Alias': ros.stringToRosTemplate(properties.alias),
      'CrossAccountRoleName': ros.stringToRosTemplate(properties.crossAccountRoleName),
      'CrossAccountType': ros.stringToRosTemplate(properties.crossAccountType),
      'CrossAccountUserId': ros.numberToRosTemplate(properties.crossAccountUserId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::CrossAccount`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CrossAccount` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
 */
export class RosCrossAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::CrossAccount";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property alias: The alias of the cross-account authorization.
     */
    public alias: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
     */
    public crossAccountRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
     */
    public crossAccountType: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
     */
    public crossAccountUserId: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCrossAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCrossAccount.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.alias = props.alias;
        this.crossAccountRoleName = props.crossAccountRoleName;
        this.crossAccountType = props.crossAccountType;
        this.crossAccountUserId = props.crossAccountUserId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            alias: this.alias,
            crossAccountRoleName: this.crossAccountRoleName,
            crossAccountType: this.crossAccountType,
            crossAccountUserId: this.crossAccountUserId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCrossAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDbAgent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
export interface RosDbAgentProps {

    /**
     * @Property instanceInfo: Instance infos
     */
    readonly instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;

    /**
     * @Property crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
     */
    readonly crossAccountType?: string | ros.IResolvable;

    /**
     * @Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
     */
    readonly crossAccountUserId?: number | ros.IResolvable;
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
    if(properties.crossAccountUserId && (typeof properties.crossAccountUserId) !== 'object') {
        errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateRange)({
            data: properties.crossAccountUserId,
            min: undefined,
            max: 9007199254740991,
          }));
    }
    errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateNumber)(properties.crossAccountUserId));
    errors.collect(ros.propertyValidator('crossAccountRoleName', ros.validateString)(properties.crossAccountRoleName));
    if(properties.crossAccountType && (typeof properties.crossAccountType) !== 'object') {
        errors.collect(ros.propertyValidator('crossAccountType', ros.validateAllowedValues)({
          data: properties.crossAccountType,
          allowedValues: ["SELF_ACCOUNT","CROSS_ACCOUNT"],
        }));
    }
    errors.collect(ros.propertyValidator('crossAccountType', ros.validateString)(properties.crossAccountType));
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
      'InstanceInfo': ros.listMapper(rosDbAgentInstanceInfoPropertyToRosTemplate)(properties.instanceInfo),
      'CrossAccountRoleName': ros.stringToRosTemplate(properties.crossAccountRoleName),
      'CrossAccountType': ros.stringToRosTemplate(properties.crossAccountType),
      'CrossAccountUserId': ros.numberToRosTemplate(properties.crossAccountUserId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::DbAgent`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbAgent` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
export class RosDbAgent extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbAgent";

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
     * @Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
     */
    public crossAccountRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
     */
    public crossAccountType: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
     */
    public crossAccountUserId: number | ros.IResolvable | undefined;

    /**
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
        this.crossAccountRoleName = props.crossAccountRoleName;
        this.crossAccountType = props.crossAccountType;
        this.crossAccountUserId = props.crossAccountUserId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceInfo: this.instanceInfo,
            crossAccountRoleName: this.crossAccountRoleName,
            crossAccountType: this.crossAccountType,
            crossAccountUserId: this.crossAccountUserId,
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
         * @Property authenticationType: verification method, valid value: INSTANCE, ACCESS_KEY
         */
        readonly authenticationType?: string | ros.IResolvable;
        /**
         * @Property password: Database backup account password
         */
        readonly password?: string | ros.IResolvable;
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
    if(properties.authenticationType && (typeof properties.authenticationType) !== 'object') {
        errors.collect(ros.propertyValidator('authenticationType', ros.validateAllowedValues)({
          data: properties.authenticationType,
          allowedValues: ["INSTANCE","ACCESS_KEY"],
        }));
    }
    errors.collect(ros.propertyValidator('authenticationType', ros.validateString)(properties.authenticationType));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
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
      'UserName': ros.stringToRosTemplate(properties.userName),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'AuthenticationType': ros.stringToRosTemplate(properties.authenticationType),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

/**
 * Properties for defining a `RosDbPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
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
      'DbPlanName': ros.stringToRosTemplate(properties.dbPlanName),
      'HostUuid': ros.stringToRosTemplate(properties.hostUuid),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'ContinuousPlan': ros.stringToRosTemplate(properties.continuousPlan),
      'CumulativePlan': ros.stringToRosTemplate(properties.cumulativePlan),
      'FullPlan': ros.stringToRosTemplate(properties.fullPlan),
      'IncPlan': ros.stringToRosTemplate(properties.incPlan),
      'InstanceUuid': ros.stringToRosTemplate(properties.instanceUuid),
      'LogPlan': ros.stringToRosTemplate(properties.logPlan),
      'MaxRateLimit': ros.numberToRosTemplate(properties.maxRateLimit),
      'MaxRetrySeconds': ros.numberToRosTemplate(properties.maxRetrySeconds),
      'Options': ros.stringToRosTemplate(properties.options),
      'Source': rosDbPlanSourcePropertyToRosTemplate(properties.source),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::DbPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
 */
export class RosDbPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbPlan";

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
         * @Property entries: Backup database instance or databases or tables. For Oracle, use ["oracle:\/\/${instanceName}", "oracle:\/\/${instanceName}\/archivelog"], ${instanceName} is the name of the oracle database instance, which can be get from dbAgent resource. For Mysql, use "mysql:\/\/${instanceName}". For SQL Server,  use ["mssql:\/\/${instanceName}\/${databse1}", "mssql:\/\/${instanceName}\/${databse2}"], ${databse} can be get from dbAgent resource(MSSQL)
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
      'Entries': ros.listMapper(ros.stringToRosTemplate)(properties.entries),
    };
}

/**
 * Properties for defining a `RosDbVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
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

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDbVault.TagsProperty[];
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDbVault_TagsPropertyValidator))(properties.tags));
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
      'RetentionDays': ros.numberToRosTemplate(properties.retentionDays),
      'VaultName': ros.stringToRosTemplate(properties.vaultName),
      'VaultRegionId': ros.stringToRosTemplate(properties.vaultRegionId),
      'Description': ros.stringToRosTemplate(properties.description),
      'Tags': ros.listMapper(rosDbVaultTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::DbVault`, which is used to create a mirror vault.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbVault` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
 */
export class RosDbVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbVault";

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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDbVault.TagsProperty[] | undefined;

    /**
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
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            retentionDays: this.retentionDays,
            vaultName: this.vaultName,
            vaultRegionId: this.vaultRegionId,
            description: this.description,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDbVaultPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDbVault {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDbVault_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault.Tags` resource.
 */
// @ts-ignore TS6133
function rosDbVaultTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDbVault_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosEcsBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
 */
export interface RosEcsBackupPlanProps {

    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    readonly backupType: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of ECS instance. The ecs backup client must have been installed on the host.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    readonly planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    readonly retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    readonly schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    readonly vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    readonly crossAccountType?: string | ros.IResolvable;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    readonly crossAccountUserId?: string | ros.IResolvable;

    /**
     * @Property detail: The detail of the backup plan.
     */
    readonly detail?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    readonly disabled?: boolean | ros.IResolvable;

    /**
     * @Property exclude: The exclude paths of the backup plan.
     */
    readonly exclude?: string | ros.IResolvable;

    /**
     * @Property include: The include paths of the backup plan.
     */
    readonly include?: string | ros.IResolvable;

    /**
     * @Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
     */
    readonly options?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property paths: The paths of the backup plan.
     */
    readonly paths?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property speedLimit: The speed limit of the backup plan.
     */
    readonly speedLimit?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEcsBackupPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosEcsBackupPlanProps`
 *
 * @returns the result of the validation.
 */
function RosEcsBackupPlanPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('options', ros.hashValidator(ros.validateAny))(properties.options));
    errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateString)(properties.crossAccountUserId));
    if(properties.exclude && (Array.isArray(properties.exclude) || (typeof properties.exclude) === 'string')) {
        errors.collect(ros.propertyValidator('exclude', ros.validateLength)({
            data: properties.exclude.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('exclude', ros.validateString)(properties.exclude));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('speedLimit', ros.validateString)(properties.speedLimit));
    errors.collect(ros.propertyValidator('crossAccountRoleName', ros.validateString)(properties.crossAccountRoleName));
    if(properties.crossAccountType && (typeof properties.crossAccountType) !== 'object') {
        errors.collect(ros.propertyValidator('crossAccountType', ros.validateAllowedValues)({
          data: properties.crossAccountType,
          allowedValues: ["SELF_ACCOUNT","CROSS_ACCOUNT"],
        }));
    }
    errors.collect(ros.propertyValidator('crossAccountType', ros.validateString)(properties.crossAccountType));
    if(properties.include && (Array.isArray(properties.include) || (typeof properties.include) === 'string')) {
        errors.collect(ros.propertyValidator('include', ros.validateLength)({
            data: properties.include.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('include', ros.validateString)(properties.include));
    errors.collect(ros.propertyValidator('planName', ros.requiredValidator)(properties.planName));
    if(properties.planName && (Array.isArray(properties.planName) || (typeof properties.planName) === 'string')) {
        errors.collect(ros.propertyValidator('planName', ros.validateLength)({
            data: properties.planName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('planName', ros.validateString)(properties.planName));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('retention', ros.requiredValidator)(properties.retention));
    if(properties.retention && (typeof properties.retention) !== 'object') {
        errors.collect(ros.propertyValidator('retention', ros.validateRange)({
            data: properties.retention,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', ros.validateString)(properties.schedule));
    errors.collect(ros.propertyValidator('backupType', ros.requiredValidator)(properties.backupType));
    if(properties.backupType && (typeof properties.backupType) !== 'object') {
        errors.collect(ros.propertyValidator('backupType', ros.validateAllowedValues)({
          data: properties.backupType,
          allowedValues: ["COMPLETE"],
        }));
    }
    errors.collect(ros.propertyValidator('backupType', ros.validateString)(properties.backupType));
    if(properties.paths && (Array.isArray(properties.paths) || (typeof properties.paths) === 'string')) {
        errors.collect(ros.propertyValidator('paths', ros.validateLength)({
            data: properties.paths.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('paths', ros.listValidator(ros.validateString))(properties.paths));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('detail', ros.hashValidator(ros.validateAny))(properties.detail));
    return errors.wrap('supplied properties not correct for "RosEcsBackupPlanProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::EcsBackupPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosEcsBackupPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::EcsBackupPlan` resource.
 */
// @ts-ignore TS6133
function rosEcsBackupPlanPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEcsBackupPlanPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupType': ros.stringToRosTemplate(properties.backupType),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'PlanName': ros.stringToRosTemplate(properties.planName),
      'Retention': ros.numberToRosTemplate(properties.retention),
      'Schedule': ros.stringToRosTemplate(properties.schedule),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'CrossAccountRoleName': ros.stringToRosTemplate(properties.crossAccountRoleName),
      'CrossAccountType': ros.stringToRosTemplate(properties.crossAccountType),
      'CrossAccountUserId': ros.stringToRosTemplate(properties.crossAccountUserId),
      'Detail': ros.hashMapper(ros.objectToRosTemplate)(properties.detail),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Exclude': ros.stringToRosTemplate(properties.exclude),
      'Include': ros.stringToRosTemplate(properties.include),
      'Options': ros.hashMapper(ros.objectToRosTemplate)(properties.options),
      'Paths': ros.listMapper(ros.stringToRosTemplate)(properties.paths),
      'SpeedLimit': ros.stringToRosTemplate(properties.speedLimit),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::EcsBackupPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EcsBackupPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
 */
export class RosEcsBackupPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::EcsBackupPlan";

    /**
     * @Attribute PlanId: The ID of the backup plan.
     */
    public readonly attrPlanId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    public backupType: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of ECS instance. The ecs backup client must have been installed on the host.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    public planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    public retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    public schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    public vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    public crossAccountRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    public crossAccountType: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    public crossAccountUserId: string | ros.IResolvable | undefined;

    /**
     * @Property detail: The detail of the backup plan.
     */
    public detail: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    public disabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property exclude: The exclude paths of the backup plan.
     */
    public exclude: string | ros.IResolvable | undefined;

    /**
     * @Property include: The include paths of the backup plan.
     */
    public include: string | ros.IResolvable | undefined;

    /**
     * @Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
     */
    public options: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property paths: The paths of the backup plan.
     */
    public paths: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property speedLimit: The speed limit of the backup plan.
     */
    public speedLimit: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEcsBackupPlanProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEcsBackupPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPlanId = this.getAtt('PlanId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupType = props.backupType;
        this.instanceId = props.instanceId;
        this.planName = props.planName;
        this.retention = props.retention;
        this.schedule = props.schedule;
        this.vaultId = props.vaultId;
        this.crossAccountRoleName = props.crossAccountRoleName;
        this.crossAccountType = props.crossAccountType;
        this.crossAccountUserId = props.crossAccountUserId;
        this.detail = props.detail;
        this.disabled = props.disabled;
        this.exclude = props.exclude;
        this.include = props.include;
        this.options = props.options;
        this.paths = props.paths;
        this.speedLimit = props.speedLimit;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupType: this.backupType,
            instanceId: this.instanceId,
            planName: this.planName,
            retention: this.retention,
            schedule: this.schedule,
            vaultId: this.vaultId,
            crossAccountRoleName: this.crossAccountRoleName,
            crossAccountType: this.crossAccountType,
            crossAccountUserId: this.crossAccountUserId,
            detail: this.detail,
            disabled: this.disabled,
            exclude: this.exclude,
            include: this.include,
            options: this.options,
            paths: this.paths,
            speedLimit: this.speedLimit,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEcsBackupPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNasBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
 */
export interface RosNasBackupPlanProps {

    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    readonly backupType: string | ros.IResolvable;

    /**
     * @Property fileSystemId: The ID of the file system.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * @Property paths: The paths of the backup plan.
     */
    readonly paths: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    readonly planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    readonly retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    readonly schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    readonly vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    readonly crossAccountType?: string | ros.IResolvable;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    readonly crossAccountUserId?: string | ros.IResolvable;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    readonly disabled?: boolean | ros.IResolvable;

    /**
     * @Property options: This parameter specifies whether to use Windows VSS to define a backup path.
     */
    readonly options?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNasBackupPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosNasBackupPlanProps`
 *
 * @returns the result of the validation.
 */
function RosNasBackupPlanPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('options', ros.hashValidator(ros.validateAny))(properties.options));
    errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateString)(properties.crossAccountUserId));
    errors.collect(ros.propertyValidator('crossAccountRoleName', ros.validateString)(properties.crossAccountRoleName));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', ros.validateString)(properties.schedule));
    if(properties.crossAccountType && (typeof properties.crossAccountType) !== 'object') {
        errors.collect(ros.propertyValidator('crossAccountType', ros.validateAllowedValues)({
          data: properties.crossAccountType,
          allowedValues: ["SELF_ACCOUNT","CROSS_ACCOUNT"],
        }));
    }
    errors.collect(ros.propertyValidator('crossAccountType', ros.validateString)(properties.crossAccountType));
    errors.collect(ros.propertyValidator('backupType', ros.requiredValidator)(properties.backupType));
    if(properties.backupType && (typeof properties.backupType) !== 'object') {
        errors.collect(ros.propertyValidator('backupType', ros.validateAllowedValues)({
          data: properties.backupType,
          allowedValues: ["COMPLETE"],
        }));
    }
    errors.collect(ros.propertyValidator('backupType', ros.validateString)(properties.backupType));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('paths', ros.requiredValidator)(properties.paths));
    if(properties.paths && (Array.isArray(properties.paths) || (typeof properties.paths) === 'string')) {
        errors.collect(ros.propertyValidator('paths', ros.validateLength)({
            data: properties.paths.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('paths', ros.listValidator(ros.validateString))(properties.paths));
    errors.collect(ros.propertyValidator('planName', ros.requiredValidator)(properties.planName));
    if(properties.planName && (Array.isArray(properties.planName) || (typeof properties.planName) === 'string')) {
        errors.collect(ros.propertyValidator('planName', ros.validateLength)({
            data: properties.planName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('planName', ros.validateString)(properties.planName));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('retention', ros.requiredValidator)(properties.retention));
    if(properties.retention && (typeof properties.retention) !== 'object') {
        errors.collect(ros.propertyValidator('retention', ros.validateRange)({
            data: properties.retention,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    return errors.wrap('supplied properties not correct for "RosNasBackupPlanProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::NasBackupPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosNasBackupPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::NasBackupPlan` resource.
 */
// @ts-ignore TS6133
function rosNasBackupPlanPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNasBackupPlanPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupType': ros.stringToRosTemplate(properties.backupType),
      'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
      'Paths': ros.listMapper(ros.stringToRosTemplate)(properties.paths),
      'PlanName': ros.stringToRosTemplate(properties.planName),
      'Retention': ros.numberToRosTemplate(properties.retention),
      'Schedule': ros.stringToRosTemplate(properties.schedule),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'CrossAccountRoleName': ros.stringToRosTemplate(properties.crossAccountRoleName),
      'CrossAccountType': ros.stringToRosTemplate(properties.crossAccountType),
      'CrossAccountUserId': ros.stringToRosTemplate(properties.crossAccountUserId),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Options': ros.hashMapper(ros.objectToRosTemplate)(properties.options),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::NasBackupPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NasBackupPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
 */
export class RosNasBackupPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::NasBackupPlan";

    /**
     * @Attribute PlanId: The ID of the backup plan.
     */
    public readonly attrPlanId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    public backupType: string | ros.IResolvable;

    /**
     * @Property fileSystemId: The ID of the file system.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @Property paths: The paths of the backup plan.
     */
    public paths: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    public planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    public retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    public schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    public vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    public crossAccountRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    public crossAccountType: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    public crossAccountUserId: string | ros.IResolvable | undefined;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    public disabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property options: This parameter specifies whether to use Windows VSS to define a backup path.
     */
    public options: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNasBackupPlanProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNasBackupPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPlanId = this.getAtt('PlanId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupType = props.backupType;
        this.fileSystemId = props.fileSystemId;
        this.paths = props.paths;
        this.planName = props.planName;
        this.retention = props.retention;
        this.schedule = props.schedule;
        this.vaultId = props.vaultId;
        this.crossAccountRoleName = props.crossAccountRoleName;
        this.crossAccountType = props.crossAccountType;
        this.crossAccountUserId = props.crossAccountUserId;
        this.disabled = props.disabled;
        this.options = props.options;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupType: this.backupType,
            fileSystemId: this.fileSystemId,
            paths: this.paths,
            planName: this.planName,
            retention: this.retention,
            schedule: this.schedule,
            vaultId: this.vaultId,
            crossAccountRoleName: this.crossAccountRoleName,
            crossAccountType: this.crossAccountType,
            crossAccountUserId: this.crossAccountUserId,
            disabled: this.disabled,
            options: this.options,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNasBackupPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosOssBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
 */
export interface RosOssBackupPlanProps {

    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    readonly backupType: string | ros.IResolvable;

    /**
     * @Property bucket: The name of OSS bucket.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    readonly planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    readonly retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    readonly schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    readonly vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    readonly crossAccountType?: string | ros.IResolvable;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    readonly crossAccountUserId?: string | ros.IResolvable;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    readonly disabled?: boolean | ros.IResolvable;

    /**
     * @Property prefix: Backup prefix. Once specified, only objects with matching prefixes will be backed up.
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOssBackupPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosOssBackupPlanProps`
 *
 * @returns the result of the validation.
 */
function RosOssBackupPlanPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateString)(properties.crossAccountUserId));
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('crossAccountRoleName', ros.validateString)(properties.crossAccountRoleName));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', ros.validateString)(properties.schedule));
    if(properties.crossAccountType && (typeof properties.crossAccountType) !== 'object') {
        errors.collect(ros.propertyValidator('crossAccountType', ros.validateAllowedValues)({
          data: properties.crossAccountType,
          allowedValues: ["SELF_ACCOUNT","CROSS_ACCOUNT"],
        }));
    }
    errors.collect(ros.propertyValidator('crossAccountType', ros.validateString)(properties.crossAccountType));
    errors.collect(ros.propertyValidator('backupType', ros.requiredValidator)(properties.backupType));
    if(properties.backupType && (typeof properties.backupType) !== 'object') {
        errors.collect(ros.propertyValidator('backupType', ros.validateAllowedValues)({
          data: properties.backupType,
          allowedValues: ["COMPLETE"],
        }));
    }
    errors.collect(ros.propertyValidator('backupType', ros.validateString)(properties.backupType));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    errors.collect(ros.propertyValidator('planName', ros.requiredValidator)(properties.planName));
    if(properties.planName && (Array.isArray(properties.planName) || (typeof properties.planName) === 'string')) {
        errors.collect(ros.propertyValidator('planName', ros.validateLength)({
            data: properties.planName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('planName', ros.validateString)(properties.planName));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('retention', ros.requiredValidator)(properties.retention));
    if(properties.retention && (typeof properties.retention) !== 'object') {
        errors.collect(ros.propertyValidator('retention', ros.validateRange)({
            data: properties.retention,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    return errors.wrap('supplied properties not correct for "RosOssBackupPlanProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::OssBackupPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosOssBackupPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::OssBackupPlan` resource.
 */
// @ts-ignore TS6133
function rosOssBackupPlanPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOssBackupPlanPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupType': ros.stringToRosTemplate(properties.backupType),
      'Bucket': ros.stringToRosTemplate(properties.bucket),
      'PlanName': ros.stringToRosTemplate(properties.planName),
      'Retention': ros.numberToRosTemplate(properties.retention),
      'Schedule': ros.stringToRosTemplate(properties.schedule),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'CrossAccountRoleName': ros.stringToRosTemplate(properties.crossAccountRoleName),
      'CrossAccountType': ros.stringToRosTemplate(properties.crossAccountType),
      'CrossAccountUserId': ros.stringToRosTemplate(properties.crossAccountUserId),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'Prefix': ros.stringToRosTemplate(properties.prefix),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::OssBackupPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OssBackupPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
 */
export class RosOssBackupPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::OssBackupPlan";

    /**
     * @Attribute PlanId: The ID of the backup plan.
     */
    public readonly attrPlanId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    public backupType: string | ros.IResolvable;

    /**
     * @Property bucket: The name of OSS bucket.
     */
    public bucket: string | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    public planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    public retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    public schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    public vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    public crossAccountRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    public crossAccountType: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    public crossAccountUserId: string | ros.IResolvable | undefined;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    public disabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property prefix: Backup prefix. Once specified, only objects with matching prefixes will be backed up.
     */
    public prefix: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOssBackupPlanProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOssBackupPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPlanId = this.getAtt('PlanId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupType = props.backupType;
        this.bucket = props.bucket;
        this.planName = props.planName;
        this.retention = props.retention;
        this.schedule = props.schedule;
        this.vaultId = props.vaultId;
        this.crossAccountRoleName = props.crossAccountRoleName;
        this.crossAccountType = props.crossAccountType;
        this.crossAccountUserId = props.crossAccountUserId;
        this.disabled = props.disabled;
        this.prefix = props.prefix;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupType: this.backupType,
            bucket: this.bucket,
            planName: this.planName,
            retention: this.retention,
            schedule: this.schedule,
            vaultId: this.vaultId,
            crossAccountRoleName: this.crossAccountRoleName,
            crossAccountType: this.crossAccountType,
            crossAccountUserId: this.crossAccountUserId,
            disabled: this.disabled,
            prefix: this.prefix,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOssBackupPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosOtsBackupPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan
 */
export interface RosOtsBackupPlanProps {

    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    readonly backupType: string | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    readonly planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    readonly retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    readonly schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    readonly vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    readonly crossAccountType?: string | ros.IResolvable;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    readonly crossAccountUserId?: string | ros.IResolvable;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    readonly disabled?: boolean | ros.IResolvable;

    /**
     * @Property instanceName: The name of the Table store instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property otsDetail: The details about the Table store instance.
     */
    readonly otsDetail?: RosOtsBackupPlan.OtsDetailProperty | ros.IResolvable;

    /**
     * @Property rules: The backup plan rule.
     */
    readonly rules?: Array<RosOtsBackupPlan.RulesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOtsBackupPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosOtsBackupPlanProps`
 *
 * @returns the result of the validation.
 */
function RosOtsBackupPlanPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateString)(properties.crossAccountUserId));
    errors.collect(ros.propertyValidator('crossAccountRoleName', ros.validateString)(properties.crossAccountRoleName));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', ros.validateString)(properties.schedule));
    if(properties.crossAccountType && (typeof properties.crossAccountType) !== 'object') {
        errors.collect(ros.propertyValidator('crossAccountType', ros.validateAllowedValues)({
          data: properties.crossAccountType,
          allowedValues: ["SELF_ACCOUNT","CROSS_ACCOUNT"],
        }));
    }
    errors.collect(ros.propertyValidator('crossAccountType', ros.validateString)(properties.crossAccountType));
    errors.collect(ros.propertyValidator('backupType', ros.requiredValidator)(properties.backupType));
    if(properties.backupType && (typeof properties.backupType) !== 'object') {
        errors.collect(ros.propertyValidator('backupType', ros.validateAllowedValues)({
          data: properties.backupType,
          allowedValues: ["COMPLETE"],
        }));
    }
    errors.collect(ros.propertyValidator('backupType', ros.validateString)(properties.backupType));
    errors.collect(ros.propertyValidator('planName', ros.requiredValidator)(properties.planName));
    if(properties.planName && (Array.isArray(properties.planName) || (typeof properties.planName) === 'string')) {
        errors.collect(ros.propertyValidator('planName', ros.validateLength)({
            data: properties.planName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('planName', ros.validateString)(properties.planName));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('retention', ros.requiredValidator)(properties.retention));
    if(properties.retention && (typeof properties.retention) !== 'object') {
        errors.collect(ros.propertyValidator('retention', ros.validateRange)({
            data: properties.retention,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('otsDetail', RosOtsBackupPlan_OtsDetailPropertyValidator)(properties.otsDetail));
    if(properties.rules && (Array.isArray(properties.rules) || (typeof properties.rules) === 'string')) {
        errors.collect(ros.propertyValidator('rules', ros.validateLength)({
            data: properties.rules.length,
            min: undefined,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('rules', ros.listValidator(RosOtsBackupPlan_RulesPropertyValidator))(properties.rules));
    return errors.wrap('supplied properties not correct for "RosOtsBackupPlanProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::OtsBackupPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosOtsBackupPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::OtsBackupPlan` resource.
 */
// @ts-ignore TS6133
function rosOtsBackupPlanPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOtsBackupPlanPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupType': ros.stringToRosTemplate(properties.backupType),
      'PlanName': ros.stringToRosTemplate(properties.planName),
      'Retention': ros.numberToRosTemplate(properties.retention),
      'Schedule': ros.stringToRosTemplate(properties.schedule),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'CrossAccountRoleName': ros.stringToRosTemplate(properties.crossAccountRoleName),
      'CrossAccountType': ros.stringToRosTemplate(properties.crossAccountType),
      'CrossAccountUserId': ros.stringToRosTemplate(properties.crossAccountUserId),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'OtsDetail': rosOtsBackupPlanOtsDetailPropertyToRosTemplate(properties.otsDetail),
      'Rules': ros.listMapper(rosOtsBackupPlanRulesPropertyToRosTemplate)(properties.rules),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::OtsBackupPlan`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OtsBackupPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan
 */
export class RosOtsBackupPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::OtsBackupPlan";

    /**
     * @Attribute PlanId: The ID of the backup plan.
     */
    public readonly attrPlanId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupType: Backup type. Valid values: COMPLETE.
     */
    public backupType: string | ros.IResolvable;

    /**
     * @Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    public planName: string | ros.IResolvable;

    /**
     * @Property retention: Backup retention days, the minimum is 1.
     */
    public retention: number | ros.IResolvable;

    /**
     * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    public schedule: string | ros.IResolvable;

    /**
     * @Property vaultId: The ID of backup vault.
     */
    public vaultId: string | ros.IResolvable;

    /**
     * @Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    public crossAccountRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    public crossAccountType: string | ros.IResolvable | undefined;

    /**
     * @Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    public crossAccountUserId: string | ros.IResolvable | undefined;

    /**
     * @Property disabled: Whether to disable the backup task. Valid values: true, false.
     */
    public disabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The name of the Table store instance.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property otsDetail: The details about the Table store instance.
     */
    public otsDetail: RosOtsBackupPlan.OtsDetailProperty | ros.IResolvable | undefined;

    /**
     * @Property rules: The backup plan rule.
     */
    public rules: Array<RosOtsBackupPlan.RulesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOtsBackupPlanProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOtsBackupPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPlanId = this.getAtt('PlanId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupType = props.backupType;
        this.planName = props.planName;
        this.retention = props.retention;
        this.schedule = props.schedule;
        this.vaultId = props.vaultId;
        this.crossAccountRoleName = props.crossAccountRoleName;
        this.crossAccountType = props.crossAccountType;
        this.crossAccountUserId = props.crossAccountUserId;
        this.disabled = props.disabled;
        this.instanceName = props.instanceName;
        this.otsDetail = props.otsDetail;
        this.rules = props.rules;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupType: this.backupType,
            planName: this.planName,
            retention: this.retention,
            schedule: this.schedule,
            vaultId: this.vaultId,
            crossAccountRoleName: this.crossAccountRoleName,
            crossAccountType: this.crossAccountType,
            crossAccountUserId: this.crossAccountUserId,
            disabled: this.disabled,
            instanceName: this.instanceName,
            otsDetail: this.otsDetail,
            rules: this.rules,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOtsBackupPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosOtsBackupPlan {
    /**
     * @stability external
     */
    export interface OtsDetailProperty {
        /**
         * @Property tableNames: The names of the destination tables in the Tablestore instance.
         */
        readonly tableNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OtsDetailProperty`
 *
 * @param properties - the TypeScript properties of a `OtsDetailProperty`
 *
 * @returns the result of the validation.
 */
function RosOtsBackupPlan_OtsDetailPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tableNames', ros.listValidator(ros.validateString))(properties.tableNames));
    return errors.wrap('supplied properties not correct for "OtsDetailProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::OtsBackupPlan.OtsDetail` resource
 *
 * @param properties - the TypeScript properties of a `OtsDetailProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::OtsBackupPlan.OtsDetail` resource.
 */
// @ts-ignore TS6133
function rosOtsBackupPlanOtsDetailPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOtsBackupPlan_OtsDetailPropertyValidator(properties).assertSuccess();
    return {
      'TableNames': ros.listMapper(ros.stringToRosTemplate)(properties.tableNames),
    };
}

export namespace RosOtsBackupPlan {
    /**
     * @stability external
     */
    export interface RulesProperty {
        /**
         * @Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
         */
        readonly schedule?: string | ros.IResolvable;
        /**
         * @Property backupType: The name of the tableStore instance. Valid values: COMPLETE, INCREMENTAL.
         */
        readonly backupType?: string | ros.IResolvable;
        /**
         * @Property retention: Backup retention days, the minimum is 1.
         */
        readonly retention?: number | ros.IResolvable;
        /**
         * @Property disabled: Whether the rule is disabled.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property ruleName: The name of the rule.
         */
        readonly ruleName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RulesProperty`
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the result of the validation.
 */
function RosOtsBackupPlan_RulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('schedule', ros.validateString)(properties.schedule));
    if(properties.backupType && (typeof properties.backupType) !== 'object') {
        errors.collect(ros.propertyValidator('backupType', ros.validateAllowedValues)({
          data: properties.backupType,
          allowedValues: ["COMPLETE","INCREMENTAL"],
        }));
    }
    errors.collect(ros.propertyValidator('backupType', ros.validateString)(properties.backupType));
    if(properties.retention && (typeof properties.retention) !== 'object') {
        errors.collect(ros.propertyValidator('retention', ros.validateRange)({
            data: properties.retention,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    errors.collect(ros.propertyValidator('disabled', ros.validateBoolean)(properties.disabled));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::OtsBackupPlan.Rules` resource
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::OtsBackupPlan.Rules` resource.
 */
// @ts-ignore TS6133
function rosOtsBackupPlanRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOtsBackupPlan_RulesPropertyValidator(properties).assertSuccess();
    return {
      'Schedule': ros.stringToRosTemplate(properties.schedule),
      'BackupType': ros.stringToRosTemplate(properties.backupType),
      'Retention': ros.numberToRosTemplate(properties.retention),
      'Disabled': ros.booleanToRosTemplate(properties.disabled),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
    };
}

/**
 * Properties for defining a `RosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
 */
export interface RosPolicyProps {

    /**
     * @Property policyName: The name of the policy.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * @Property policyType: The type of the policy.
     */
    readonly policyType: string | ros.IResolvable;

    /**
     * @Property rules: The rules of the policy.
     */
    readonly rules: Array<RosPolicy.RulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property policyDescription: The description of the policy.
     */
    readonly policyDescription?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["STANDARD","UDM_ECS_ONLY"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('policyDescription', ros.validateString)(properties.policyDescription));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('rules', ros.requiredValidator)(properties.rules));
    if(properties.rules && (Array.isArray(properties.rules) || (typeof properties.rules) === 'string')) {
        errors.collect(ros.propertyValidator('rules', ros.validateLength)({
            data: properties.rules.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('rules', ros.listValidator(RosPolicy_RulesPropertyValidator))(properties.rules));
    return errors.wrap('supplied properties not correct for "RosPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy` resource
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy` resource.
 */
// @ts-ignore TS6133
function rosPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyType': ros.stringToRosTemplate(properties.policyType),
      'Rules': ros.listMapper(rosPolicyRulesPropertyToRosTemplate)(properties.rules),
      'PolicyDescription': ros.stringToRosTemplate(properties.policyDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::Policy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
 */
export class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::Policy";

    /**
     * @Attribute PolicyId: The ID of the policy.
     */
    public readonly attrPolicyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: The name of the policy.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property policyType: The type of the policy.
     */
    public policyType: string | ros.IResolvable;

    /**
     * @Property rules: The rules of the policy.
     */
    public rules: Array<RosPolicy.RulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property policyDescription: The description of the policy.
     */
    public policyDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicyId = this.getAtt('PolicyId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.rules = props.rules;
        this.policyDescription = props.policyDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            rules: this.rules,
            policyDescription: this.policyDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface DataSourceFiltersProperty {
        /**
         * @Property crossAccountUserId: The cross account user ID of the data source filter.
         */
        readonly crossAccountUserId?: string | ros.IResolvable;
        /**
         * @Property crossAccountRoleName: The cross account role name of the data source filter.
         */
        readonly crossAccountRoleName?: string | ros.IResolvable;
        /**
         * @Property sourceType: The source type of the data source filter.
         */
        readonly sourceType?: string | ros.IResolvable;
        /**
         * @Property crossAccountType: The cross account type of the data source filter.
         */
        readonly crossAccountType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataSourceFiltersProperty`
 *
 * @param properties - the TypeScript properties of a `DataSourceFiltersProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_DataSourceFiltersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('crossAccountUserId', ros.validateString)(properties.crossAccountUserId));
    errors.collect(ros.propertyValidator('crossAccountRoleName', ros.validateString)(properties.crossAccountRoleName));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('crossAccountType', ros.validateString)(properties.crossAccountType));
    return errors.wrap('supplied properties not correct for "DataSourceFiltersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.DataSourceFilters` resource
 *
 * @param properties - the TypeScript properties of a `DataSourceFiltersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.DataSourceFilters` resource.
 */
// @ts-ignore TS6133
function rosPolicyDataSourceFiltersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_DataSourceFiltersPropertyValidator(properties).assertSuccess();
    return {
      'CrossAccountUserId': ros.stringToRosTemplate(properties.crossAccountUserId),
      'CrossAccountRoleName': ros.stringToRosTemplate(properties.crossAccountRoleName),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'CrossAccountType': ros.stringToRosTemplate(properties.crossAccountType),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface RetentionRulesProperty {
        /**
         * @Property advancedRetentionType: The advanced retention type of the retention rule.
         */
        readonly advancedRetentionType?: string | ros.IResolvable;
        /**
         * @Property whichSnapshot: The which snapshot of the retention rule.
         */
        readonly whichSnapshot?: number | ros.IResolvable;
        /**
         * @Property retention: The retention of the retention rule.
         */
        readonly retention?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RetentionRulesProperty`
 *
 * @param properties - the TypeScript properties of a `RetentionRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_RetentionRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.advancedRetentionType && (typeof properties.advancedRetentionType) !== 'object') {
        errors.collect(ros.propertyValidator('advancedRetentionType', ros.validateAllowedValues)({
          data: properties.advancedRetentionType,
          allowedValues: ["DAILY","WEEKLY","MONTHLY","YEARLY"],
        }));
    }
    errors.collect(ros.propertyValidator('advancedRetentionType', ros.validateString)(properties.advancedRetentionType));
    if(properties.whichSnapshot && (typeof properties.whichSnapshot) !== 'object') {
        errors.collect(ros.propertyValidator('whichSnapshot', ros.validateAllowedValues)({
          data: properties.whichSnapshot,
          allowedValues: [1],
        }));
    }
    errors.collect(ros.propertyValidator('whichSnapshot', ros.validateNumber)(properties.whichSnapshot));
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    return errors.wrap('supplied properties not correct for "RetentionRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.RetentionRules` resource
 *
 * @param properties - the TypeScript properties of a `RetentionRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.RetentionRules` resource.
 */
// @ts-ignore TS6133
function rosPolicyRetentionRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_RetentionRulesPropertyValidator(properties).assertSuccess();
    return {
      'AdvancedRetentionType': ros.stringToRosTemplate(properties.advancedRetentionType),
      'WhichSnapshot': ros.numberToRosTemplate(properties.whichSnapshot),
      'Retention': ros.numberToRosTemplate(properties.retention),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface RulesProperty {
        /**
         * @Property immutable: Whether immutable of the rule.
         */
        readonly immutable?: boolean | ros.IResolvable;
        /**
         * @Property replicationVaultId: The replication vault ID of the rule.
         */
        readonly replicationVaultId?: string | ros.IResolvable;
        /**
         * @Property continuous: Whether continuous of the rule.
         */
        readonly continuous?: boolean | ros.IResolvable;
        /**
         * @Property keepLatestSnapshots: The keep latest snapshots of the rule.
         */
        readonly keepLatestSnapshots?: number | ros.IResolvable;
        /**
         * @Property coldArchiveDays: The cold archive days of the rule.
         */
        readonly coldArchiveDays?: number | ros.IResolvable;
        /**
         * @Property tagFilters: The tag filters of the rule.
         */
        readonly tagFilters?: Array<RosPolicy.TagFiltersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property archiveDays: The archive days of the rule.
         */
        readonly archiveDays?: number | ros.IResolvable;
        /**
         * @Property ruleType: The type of the rule.
         */
        readonly ruleType: string | ros.IResolvable;
        /**
         * @Property retention: The retention of the rule.
         */
        readonly retention?: number | ros.IResolvable;
        /**
         * @Property archiveVaultId: The archive vault ID of the rule.
         */
        readonly archiveVaultId?: string | ros.IResolvable;
        /**
         * @Property vaultId: The vault ID of the rule.
         */
        readonly vaultId?: string | ros.IResolvable;
        /**
         * @Property schedule: The schedule of the rule.
         */
        readonly schedule?: string | ros.IResolvable;
        /**
         * @Property backupType: The backup type of the rule.
         */
        readonly backupType?: string | ros.IResolvable;
        /**
         * @Property dataSourceFilters: The data source filters of the rule.
         */
        readonly dataSourceFilters?: Array<RosPolicy.DataSourceFiltersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property retentionRules: The retention rules of the rule.
         */
        readonly retentionRules?: Array<RosPolicy.RetentionRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property doDetect: Whether do detect of the rule.
         */
        readonly doDetect?: boolean | ros.IResolvable;
        /**
         * @Property replicationRegionId: The replication region ID of the rule.
         */
        readonly replicationRegionId?: string | ros.IResolvable;
        /**
         * @Property selector: The selector of the rule.
         */
        readonly selector?: RosPolicy.SelectorProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RulesProperty`
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_RulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('immutable', ros.validateBoolean)(properties.immutable));
    errors.collect(ros.propertyValidator('replicationVaultId', ros.validateString)(properties.replicationVaultId));
    errors.collect(ros.propertyValidator('continuous', ros.validateBoolean)(properties.continuous));
    errors.collect(ros.propertyValidator('keepLatestSnapshots', ros.validateNumber)(properties.keepLatestSnapshots));
    errors.collect(ros.propertyValidator('coldArchiveDays', ros.validateNumber)(properties.coldArchiveDays));
    errors.collect(ros.propertyValidator('tagFilters', ros.listValidator(RosPolicy_TagFiltersPropertyValidator))(properties.tagFilters));
    errors.collect(ros.propertyValidator('archiveDays', ros.validateNumber)(properties.archiveDays));
    errors.collect(ros.propertyValidator('ruleType', ros.requiredValidator)(properties.ruleType));
    if(properties.ruleType && (typeof properties.ruleType) !== 'object') {
        errors.collect(ros.propertyValidator('ruleType', ros.validateAllowedValues)({
          data: properties.ruleType,
          allowedValues: ["BACKUP","TRANSITION","REPLICATION","SECURITY","TAG"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleType', ros.validateString)(properties.ruleType));
    if(properties.retention && (typeof properties.retention) !== 'object') {
        errors.collect(ros.propertyValidator('retention', ros.validateRange)({
            data: properties.retention,
            min: 1,
            max: 364635,
          }));
    }
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    errors.collect(ros.propertyValidator('archiveVaultId', ros.validateString)(properties.archiveVaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('schedule', ros.validateString)(properties.schedule));
    if(properties.backupType && (typeof properties.backupType) !== 'object') {
        errors.collect(ros.propertyValidator('backupType', ros.validateAllowedValues)({
          data: properties.backupType,
          allowedValues: ["COMPLETE","INCREMENTAL","DIFFERENTIAL","LOG","INDEX","ARCHIVE","ARCHIVE_BY_SEARCH"],
        }));
    }
    errors.collect(ros.propertyValidator('backupType', ros.validateString)(properties.backupType));
    errors.collect(ros.propertyValidator('dataSourceFilters', ros.listValidator(RosPolicy_DataSourceFiltersPropertyValidator))(properties.dataSourceFilters));
    if(properties.retentionRules && (Array.isArray(properties.retentionRules) || (typeof properties.retentionRules) === 'string')) {
        errors.collect(ros.propertyValidator('retentionRules', ros.validateLength)({
            data: properties.retentionRules.length,
            min: undefined,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('retentionRules', ros.listValidator(RosPolicy_RetentionRulesPropertyValidator))(properties.retentionRules));
    errors.collect(ros.propertyValidator('doDetect', ros.validateBoolean)(properties.doDetect));
    errors.collect(ros.propertyValidator('replicationRegionId', ros.validateString)(properties.replicationRegionId));
    errors.collect(ros.propertyValidator('selector', RosPolicy_SelectorPropertyValidator)(properties.selector));
    return errors.wrap('supplied properties not correct for "RulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.Rules` resource
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.Rules` resource.
 */
// @ts-ignore TS6133
function rosPolicyRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_RulesPropertyValidator(properties).assertSuccess();
    return {
      'Immutable': ros.booleanToRosTemplate(properties.immutable),
      'ReplicationVaultId': ros.stringToRosTemplate(properties.replicationVaultId),
      'Continuous': ros.booleanToRosTemplate(properties.continuous),
      'KeepLatestSnapshots': ros.numberToRosTemplate(properties.keepLatestSnapshots),
      'ColdArchiveDays': ros.numberToRosTemplate(properties.coldArchiveDays),
      'TagFilters': ros.listMapper(rosPolicyTagFiltersPropertyToRosTemplate)(properties.tagFilters),
      'ArchiveDays': ros.numberToRosTemplate(properties.archiveDays),
      'RuleType': ros.stringToRosTemplate(properties.ruleType),
      'Retention': ros.numberToRosTemplate(properties.retention),
      'ArchiveVaultId': ros.stringToRosTemplate(properties.archiveVaultId),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'Schedule': ros.stringToRosTemplate(properties.schedule),
      'BackupType': ros.stringToRosTemplate(properties.backupType),
      'DataSourceFilters': ros.listMapper(rosPolicyDataSourceFiltersPropertyToRosTemplate)(properties.dataSourceFilters),
      'RetentionRules': ros.listMapper(rosPolicyRetentionRulesPropertyToRosTemplate)(properties.retentionRules),
      'DoDetect': ros.booleanToRosTemplate(properties.doDetect),
      'ReplicationRegionId': ros.stringToRosTemplate(properties.replicationRegionId),
      'Selector': rosPolicySelectorPropertyToRosTemplate(properties.selector),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface SelectorProperty {
        /**
         * @Property value: The value of the selector.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the selector.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SelectorProperty`
 *
 * @param properties - the TypeScript properties of a `SelectorProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_SelectorPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "SelectorProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.Selector` resource
 *
 * @param properties - the TypeScript properties of a `SelectorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.Selector` resource.
 */
// @ts-ignore TS6133
function rosPolicySelectorPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_SelectorPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosPolicy {
    /**
     * @stability external
     */
    export interface TagFiltersProperty {
        /**
         * @Property operator: The operator of the tag filter.
         */
        readonly operator?: string | ros.IResolvable;
        /**
         * @Property value: The value of the tag filter.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the tag filter.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagFiltersProperty`
 *
 * @param properties - the TypeScript properties of a `TagFiltersProperty`
 *
 * @returns the result of the validation.
 */
function RosPolicy_TagFiltersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.operator && (typeof properties.operator) !== 'object') {
        errors.collect(ros.propertyValidator('operator', ros.validateAllowedValues)({
          data: properties.operator,
          allowedValues: ["EQUAL","NOT"],
        }));
    }
    errors.collect(ros.propertyValidator('operator', ros.validateString)(properties.operator));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagFiltersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.TagFilters` resource
 *
 * @param properties - the TypeScript properties of a `TagFiltersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Policy.TagFilters` resource.
 */
// @ts-ignore TS6133
function rosPolicyTagFiltersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPolicy_TagFiltersPropertyValidator(properties).assertSuccess();
    return {
      'Operator': ros.stringToRosTemplate(properties.operator),
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosReplicationVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
 */
export interface RosReplicationVaultProps {

    /**
     * @Property replicationSourceRegionId: The region ID of the source vault for replication.
     */
    readonly replicationSourceRegionId: string | ros.IResolvable;

    /**
     * @Property replicationSourceVaultId: The ID of the source vault for replication.
     */
    readonly replicationSourceVaultId: string | ros.IResolvable;

    /**
     * @Property vaultName: The name of the vault.
     */
    readonly vaultName: string | ros.IResolvable;

    /**
     * @Property description: The description of the vault.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property encryptType: The encryption type of the vault.
     */
    readonly encryptType?: string | ros.IResolvable;

    /**
     * @Property kmsKeyId: The KMS key ID used for encryption.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * @Property redundancyType: The redundancy type of the vault.
     */
    readonly redundancyType?: string | ros.IResolvable;

    /**
     * @Property vaultStorageClass: The storage class of the vault.
     */
    readonly vaultStorageClass?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosReplicationVaultProps`
 *
 * @param properties - the TypeScript properties of a `RosReplicationVaultProps`
 *
 * @returns the result of the validation.
 */
function RosReplicationVaultPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.encryptType && (typeof properties.encryptType) !== 'object') {
        errors.collect(ros.propertyValidator('encryptType', ros.validateAllowedValues)({
          data: properties.encryptType,
          allowedValues: ["HBR_PRIVATE","KMS"],
        }));
    }
    errors.collect(ros.propertyValidator('encryptType', ros.validateString)(properties.encryptType));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('vaultName', ros.requiredValidator)(properties.vaultName));
    if(properties.vaultName && (Array.isArray(properties.vaultName) || (typeof properties.vaultName) === 'string')) {
        errors.collect(ros.propertyValidator('vaultName', ros.validateLength)({
            data: properties.vaultName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('vaultName', ros.validateString)(properties.vaultName));
    if(properties.vaultStorageClass && (typeof properties.vaultStorageClass) !== 'object') {
        errors.collect(ros.propertyValidator('vaultStorageClass', ros.validateAllowedValues)({
          data: properties.vaultStorageClass,
          allowedValues: ["STANDARD","IA","ARCHIVE"],
        }));
    }
    errors.collect(ros.propertyValidator('vaultStorageClass', ros.validateString)(properties.vaultStorageClass));
    if(properties.redundancyType && (typeof properties.redundancyType) !== 'object') {
        errors.collect(ros.propertyValidator('redundancyType', ros.validateAllowedValues)({
          data: properties.redundancyType,
          allowedValues: ["LRS","ZRS"],
        }));
    }
    errors.collect(ros.propertyValidator('redundancyType', ros.validateString)(properties.redundancyType));
    errors.collect(ros.propertyValidator('replicationSourceRegionId', ros.requiredValidator)(properties.replicationSourceRegionId));
    errors.collect(ros.propertyValidator('replicationSourceRegionId', ros.validateString)(properties.replicationSourceRegionId));
    errors.collect(ros.propertyValidator('replicationSourceVaultId', ros.requiredValidator)(properties.replicationSourceVaultId));
    errors.collect(ros.propertyValidator('replicationSourceVaultId', ros.validateString)(properties.replicationSourceVaultId));
    return errors.wrap('supplied properties not correct for "RosReplicationVaultProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::ReplicationVault` resource
 *
 * @param properties - the TypeScript properties of a `RosReplicationVaultProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::ReplicationVault` resource.
 */
// @ts-ignore TS6133
function rosReplicationVaultPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosReplicationVaultPropsValidator(properties).assertSuccess();
    }
    return {
      'ReplicationSourceRegionId': ros.stringToRosTemplate(properties.replicationSourceRegionId),
      'ReplicationSourceVaultId': ros.stringToRosTemplate(properties.replicationSourceVaultId),
      'VaultName': ros.stringToRosTemplate(properties.vaultName),
      'Description': ros.stringToRosTemplate(properties.description),
      'EncryptType': ros.stringToRosTemplate(properties.encryptType),
      'KmsKeyId': ros.stringToRosTemplate(properties.kmsKeyId),
      'RedundancyType': ros.stringToRosTemplate(properties.redundancyType),
      'VaultStorageClass': ros.stringToRosTemplate(properties.vaultStorageClass),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::ReplicationVault`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ReplicationVault` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
 */
export class RosReplicationVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::ReplicationVault";

    /**
     * @Attribute VaultId: The ID of the vault.
     */
    public readonly attrVaultId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property replicationSourceRegionId: The region ID of the source vault for replication.
     */
    public replicationSourceRegionId: string | ros.IResolvable;

    /**
     * @Property replicationSourceVaultId: The ID of the source vault for replication.
     */
    public replicationSourceVaultId: string | ros.IResolvable;

    /**
     * @Property vaultName: The name of the vault.
     */
    public vaultName: string | ros.IResolvable;

    /**
     * @Property description: The description of the vault.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property encryptType: The encryption type of the vault.
     */
    public encryptType: string | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The KMS key ID used for encryption.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property redundancyType: The redundancy type of the vault.
     */
    public redundancyType: string | ros.IResolvable | undefined;

    /**
     * @Property vaultStorageClass: The storage class of the vault.
     */
    public vaultStorageClass: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosReplicationVaultProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosReplicationVault.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVaultId = this.getAtt('VaultId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replicationSourceRegionId = props.replicationSourceRegionId;
        this.replicationSourceVaultId = props.replicationSourceVaultId;
        this.vaultName = props.vaultName;
        this.description = props.description;
        this.encryptType = props.encryptType;
        this.kmsKeyId = props.kmsKeyId;
        this.redundancyType = props.redundancyType;
        this.vaultStorageClass = props.vaultStorageClass;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            replicationSourceRegionId: this.replicationSourceRegionId,
            replicationSourceVaultId: this.replicationSourceVaultId,
            vaultName: this.vaultName,
            description: this.description,
            encryptType: this.encryptType,
            kmsKeyId: this.kmsKeyId,
            redundancyType: this.redundancyType,
            vaultStorageClass: this.vaultStorageClass,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosReplicationVaultPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRestoreJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
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
     * @Property targetPath: Target path. For instance, "\/".
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
    errors.collect(ros.propertyValidator('restoreType', ros.requiredValidator)(properties.restoreType));
    if(properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
          data: properties.restoreType,
          allowedValues: ["FILE","ECS_FILE"],
        }));
    }
    errors.collect(ros.propertyValidator('restoreType', ros.validateString)(properties.restoreType));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
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
      'RestoreType': ros.stringToRosTemplate(properties.restoreType),
      'SnapshotId': ros.stringToRosTemplate(properties.snapshotId),
      'SourceClientId': ros.stringToRosTemplate(properties.sourceClientId),
      'SourceInstanceId': ros.stringToRosTemplate(properties.sourceInstanceId),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'TargetClientId': ros.stringToRosTemplate(properties.targetClientId),
      'TargetInstanceId': ros.stringToRosTemplate(properties.targetInstanceId),
      'TargetPath': ros.stringToRosTemplate(properties.targetPath),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::RestoreJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RestoreJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
 */
export class RosRestoreJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::RestoreJob";

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
     * @Property targetPath: Target path. For instance, "\/".
     */
    public targetPath: string | ros.IResolvable;

    /**
     * @Property vaultId: Vault ID
     */
    public vaultId: string | ros.IResolvable;

    /**
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

/**
 * Properties for defining a `RosVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
 */
export interface RosVaultProps {

    /**
     * @Property vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
     */
    readonly vaultName: string | ros.IResolvable;

    /**
     * @Property vaultType: The type of the backup vault. Valid values:
     * - **STANDARD**: standard backup vault.
     * - **OTS_BACKUP**: backup vault for Tablestore.
     */
    readonly vaultType: string | ros.IResolvable;

    /**
     * @Property description: The description of the backup vault. The description must be 0 to 255 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. 
     * Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
     * - **KMS**: The source data is encrypted by using Key Management Service (KMS).
     */
    readonly encryptType?: string | ros.IResolvable;

    /**
     * @Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * @Property redundancyType: The data redundancy type of the backup vault. Valid values:
     * - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
     * - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    readonly redundancyType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of The resource attribute field representing the resource tag..
     */
    readonly tags?: RosVault.TagsProperty[];

    /**
     * @Property vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    readonly vaultStorageClass?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVaultProps`
 *
 * @param properties - the TypeScript properties of a `RosVaultProps`
 *
 * @returns the result of the validation.
 */
function RosVaultPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vaultType', ros.requiredValidator)(properties.vaultType));
    if(properties.vaultType && (typeof properties.vaultType) !== 'object') {
        errors.collect(ros.propertyValidator('vaultType', ros.validateAllowedValues)({
          data: properties.vaultType,
          allowedValues: ["STANDARD","OTS_BACKUP"],
        }));
    }
    errors.collect(ros.propertyValidator('vaultType', ros.validateString)(properties.vaultType));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.encryptType && (typeof properties.encryptType) !== 'object') {
        errors.collect(ros.propertyValidator('encryptType', ros.validateAllowedValues)({
          data: properties.encryptType,
          allowedValues: ["HBR_PRIVATE","KMS"],
        }));
    }
    errors.collect(ros.propertyValidator('encryptType', ros.validateString)(properties.encryptType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('vaultName', ros.requiredValidator)(properties.vaultName));
    if(properties.vaultName && (Array.isArray(properties.vaultName) || (typeof properties.vaultName) === 'string')) {
        errors.collect(ros.propertyValidator('vaultName', ros.validateLength)({
            data: properties.vaultName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('vaultName', ros.validateString)(properties.vaultName));
    if(properties.redundancyType && (typeof properties.redundancyType) !== 'object') {
        errors.collect(ros.propertyValidator('redundancyType', ros.validateAllowedValues)({
          data: properties.redundancyType,
          allowedValues: ["LRS","ZRS"],
        }));
    }
    errors.collect(ros.propertyValidator('redundancyType', ros.validateString)(properties.redundancyType));
    errors.collect(ros.propertyValidator('vaultStorageClass', ros.validateString)(properties.vaultStorageClass));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVault_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosVaultProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Vault` resource
 *
 * @param properties - the TypeScript properties of a `RosVaultProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Vault` resource.
 */
// @ts-ignore TS6133
function rosVaultPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVaultPropsValidator(properties).assertSuccess();
    }
    return {
      'VaultName': ros.stringToRosTemplate(properties.vaultName),
      'VaultType': ros.stringToRosTemplate(properties.vaultType),
      'Description': ros.stringToRosTemplate(properties.description),
      'EncryptType': ros.stringToRosTemplate(properties.encryptType),
      'KmsKeyId': ros.stringToRosTemplate(properties.kmsKeyId),
      'RedundancyType': ros.stringToRosTemplate(properties.redundancyType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosVaultTagsPropertyToRosTemplate)(properties.tags),
      'VaultStorageClass': ros.stringToRosTemplate(properties.vaultStorageClass),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::Vault`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vault` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
 */
export class RosVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::Vault";

    /**
     * @Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    public readonly attrBackupPlanStatistics: ros.IResolvable;

    /**
     * @Attribute BytesDone: The amount of data that is backed up. Unit: bytes.
     */
    public readonly attrBytesDone: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the backup vault was created. This value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    public readonly attrDedup: ros.IResolvable;

    /**
     * @Attribute Description: The description of the backup vault.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
     */
    public readonly attrIndexAvailable: ros.IResolvable;

    /**
     * @Attribute IndexLevel: The index level.
- **OFF**: No indexes are created.
- **META**: Metadata indexes are created.
- **ALL**: Full-text indexes are created.
     */
    public readonly attrIndexLevel: ros.IResolvable;

    /**
     * @Attribute IndexUpdateTime: The time when the index was updated.
     */
    public readonly attrIndexUpdateTime: ros.IResolvable;

    /**
     * @Attribute LatestReplicationTime: The time when the last remote backup was synchronized. This value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrLatestReplicationTime: ros.IResolvable;

    /**
     * @Attribute PaymentType: PaymentType.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute RedundancyType: The data redundancy type of the backup vault. Valid values:
- **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
- **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    public readonly attrRedundancyType: ros.IResolvable;

    /**
     * @Attribute Replication: Indicates whether the backup vault is a remote backup vault. Valid values:
- **true**: The backup vault is a remote backup vault.
- **false**: The backup vault is an on-premises backup vault.
     */
    public readonly attrReplication: ros.IResolvable;

    /**
     * @Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    public readonly attrReplicationProgress: ros.IResolvable;

    /**
     * @Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.
     */
    public readonly attrReplicationSourceRegionId: ros.IResolvable;

    /**
     * @Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    public readonly attrReplicationSourceVaultId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Retention: The retention period of the backup vault. Unit: days.
     */
    public readonly attrRetention: ros.IResolvable;

    /**
     * @Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    public readonly attrSearchEnabled: ros.IResolvable;

    /**
     * @Attribute SourceTypes: The information about the data source.
     */
    public readonly attrSourceTypes: ros.IResolvable;

    /**
     * @Attribute StorageSize: The usage of the backup vault. Unit: bytes.
     */
    public readonly attrStorageSize: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the backup vault.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TrialInfo: The free trial information.
     */
    public readonly attrTrialInfo: ros.IResolvable;

    /**
     * @Attribute UpdatedTime: The time when the backup vault was updated. This value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrUpdatedTime: ros.IResolvable;

    /**
     * @Attribute VaultId: The ID of the backup vault.
     */
    public readonly attrVaultId: ros.IResolvable;

    /**
     * @Attribute VaultName: The name of the backup vault.
     */
    public readonly attrVaultName: ros.IResolvable;

    /**
     * @Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is available only for remote backup vaults. Valid values:
- **UNKNOWN_ERROR*: An unknown error occurs.
- **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
     */
    public readonly attrVaultStatusMessage: ros.IResolvable;

    /**
     * @Attribute VaultStorageClass: The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.
     */
    public readonly attrVaultStorageClass: ros.IResolvable;

    /**
     * @Attribute VaultType: The type of the backup vault. Valid value: **STANDARD**, which indicates a standard backup vault.
     */
    public readonly attrVaultType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
     */
    public vaultName: string | ros.IResolvable;

    /**
     * @Property vaultType: The type of the backup vault. Valid values:
     * - **STANDARD**: standard backup vault.
     * - **OTS_BACKUP**: backup vault for Tablestore.
     */
    public vaultType: string | ros.IResolvable;

    /**
     * @Property description: The description of the backup vault. The description must be 0 to 255 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. 
     * Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
     * - **KMS**: The source data is encrypted by using Key Management Service (KMS).
     */
    public encryptType: string | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property redundancyType: The data redundancy type of the backup vault. Valid values:
     * - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
     * - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    public redundancyType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of The resource attribute field representing the resource tag..
     */
    public tags: RosVault.TagsProperty[] | undefined;

    /**
     * @Property vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    public vaultStorageClass: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVaultProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVault.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupPlanStatistics = this.getAtt('BackupPlanStatistics');
        this.attrBytesDone = this.getAtt('BytesDone');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDedup = this.getAtt('Dedup');
        this.attrDescription = this.getAtt('Description');
        this.attrIndexAvailable = this.getAtt('IndexAvailable');
        this.attrIndexLevel = this.getAtt('IndexLevel');
        this.attrIndexUpdateTime = this.getAtt('IndexUpdateTime');
        this.attrLatestReplicationTime = this.getAtt('LatestReplicationTime');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRedundancyType = this.getAtt('RedundancyType');
        this.attrReplication = this.getAtt('Replication');
        this.attrReplicationProgress = this.getAtt('ReplicationProgress');
        this.attrReplicationSourceRegionId = this.getAtt('ReplicationSourceRegionId');
        this.attrReplicationSourceVaultId = this.getAtt('ReplicationSourceVaultId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrRetention = this.getAtt('Retention');
        this.attrSearchEnabled = this.getAtt('SearchEnabled');
        this.attrSourceTypes = this.getAtt('SourceTypes');
        this.attrStorageSize = this.getAtt('StorageSize');
        this.attrTags = this.getAtt('Tags');
        this.attrTrialInfo = this.getAtt('TrialInfo');
        this.attrUpdatedTime = this.getAtt('UpdatedTime');
        this.attrVaultId = this.getAtt('VaultId');
        this.attrVaultName = this.getAtt('VaultName');
        this.attrVaultStatusMessage = this.getAtt('VaultStatusMessage');
        this.attrVaultStorageClass = this.getAtt('VaultStorageClass');
        this.attrVaultType = this.getAtt('VaultType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vaultName = props.vaultName;
        this.vaultType = props.vaultType;
        this.description = props.description;
        this.encryptType = props.encryptType;
        this.kmsKeyId = props.kmsKeyId;
        this.redundancyType = props.redundancyType;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.vaultStorageClass = props.vaultStorageClass;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vaultName: this.vaultName,
            vaultType: this.vaultType,
            description: this.description,
            encryptType: this.encryptType,
            kmsKeyId: this.kmsKeyId,
            redundancyType: this.redundancyType,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            vaultStorageClass: this.vaultStorageClass,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVaultPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVault {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVault_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::Vault.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::Vault.Tags` resource.
 */
// @ts-ignore TS6133
function rosVaultTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVault_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
