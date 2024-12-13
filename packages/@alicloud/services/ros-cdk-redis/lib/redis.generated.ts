// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: The name of the account. The name must start with a lowercase letter and can contain
     * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
     * in length.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance for which you want to create the account.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the account.
     * The description must start with a letter, and cannot start with http:\/\/ or https:\/\/.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;

    /**
     * @Property accountPrivilege: The permission of the account. Valid values:
     * RoleReadOnly
     * RoleReadWrite (default value)
     * RoleRepl
     * Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
     * an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
     * permission can be granted to an account only in an ApsaraDB for Redis instance of
     * the standard edition in Redis 4.0.
     */
    readonly accountPrivilege?: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the account. Set this parameter to Normal.
     */
    readonly accountType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountDescription', ros.validateString)(properties.accountDescription));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'AccountDescription': ros.stringToRosTemplate(properties.accountDescription),
      'AccountPrivilege': ros.stringToRosTemplate(properties.accountPrivilege),
      'AccountType': ros.stringToRosTemplate(properties.accountType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::REDIS::Account`, which is used to create an account that has the specified permissions on an ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Account";

    /**
     * @Attribute AccountName: The name of the account.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * @Attribute InstanceId: The name of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the account. The name must start with a lowercase letter and can contain
     * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
     * in length.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance for which you want to create the account.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the account.
     * The description must start with a letter, and cannot start with http:\/\/ or https:\/\/.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    public accountDescription: string | ros.IResolvable | undefined;

    /**
     * @Property accountPrivilege: The permission of the account. Valid values:
     * RoleReadOnly
     * RoleReadWrite (default value)
     * RoleRepl
     * Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
     * an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
     * permission can be granted to an account only in an ApsaraDB for Redis instance of
     * the standard edition in Redis 4.0.
     */
    public accountPrivilege: string | ros.IResolvable | undefined;

    /**
     * @Property accountType: The type of the account. Set this parameter to Normal.
     */
    public accountType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountName = this.getAtt('AccountName');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.instanceId = props.instanceId;
        this.accountDescription = props.accountDescription;
        this.accountPrivilege = props.accountPrivilege;
        this.accountType = props.accountType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            instanceId: this.instanceId,
            accountDescription: this.accountDescription,
            accountPrivilege: this.accountPrivilege,
            accountType: this.accountType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAuditLogConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
 */
export interface RosAuditLogConfigProps {

    /**
     * @Property instanceId: The ID of the instance. You can call the DescribeInstances operation to query the ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property retention: The retention period of audit logs. Valid values: 1 to 365. Unit: days.
     * Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
     */
    readonly retention: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAuditLogConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosAuditLogConfigProps`
 *
 * @returns the result of the validation.
 */
function RosAuditLogConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('retention', ros.requiredValidator)(properties.retention));
    if(properties.retention && (typeof properties.retention) !== 'object') {
        errors.collect(ros.propertyValidator('retention', ros.validateRange)({
            data: properties.retention,
            min: 1,
            max: 365,
          }));
    }
    errors.collect(ros.propertyValidator('retention', ros.validateNumber)(properties.retention));
    return errors.wrap('supplied properties not correct for "RosAuditLogConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::AuditLogConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosAuditLogConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::AuditLogConfig` resource.
 */
// @ts-ignore TS6133
function rosAuditLogConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAuditLogConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Retention': ros.numberToRosTemplate(properties.retention),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::REDIS::AuditLogConfig`, which is used to modify the audit log settings of an ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `AuditLogConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
 */
export class RosAuditLogConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::AuditLogConfig";

    /**
     * @Attribute InstanceId: IP address whitelist to be modified
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance. You can call the DescribeInstances operation to query the ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property retention: The retention period of audit logs. Valid values: 1 to 365. Unit: days.
     * Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
     */
    public retention: number | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuditLogConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAuditLogConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.retention = props.retention;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            retention: this.retention,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAuditLogConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
 */
export interface RosConnectionProps {

    /**
     * @Property connectionStringPrefix: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
     */
    readonly connectionStringPrefix: string | ros.IResolvable;

    /**
     * @Property connectionType: Allowed values:
     * - Public: Public address.
     * - Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.
     */
    readonly connectionType: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property port: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
     */
    readonly port: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosConnectionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionType', ros.requiredValidator)(properties.connectionType));
    if(properties.connectionType && (typeof properties.connectionType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionType', ros.validateAllowedValues)({
          data: properties.connectionType,
          allowedValues: ["Public","Direct"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionType', ros.validateString)(properties.connectionType));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.requiredValidator)(properties.connectionStringPrefix));
    if(properties.connectionStringPrefix && (typeof properties.connectionStringPrefix) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateAllowedPattern)({
          data: properties.connectionStringPrefix,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    return errors.wrap('supplied properties not correct for "RosConnectionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Connection` resource
 *
 * @param properties - the TypeScript properties of a `RosConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Connection` resource.
 */
// @ts-ignore TS6133
function rosConnectionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConnectionPropsValidator(properties).assertSuccess();
    }
    return {
      'ConnectionStringPrefix': ros.stringToRosTemplate(properties.connectionStringPrefix),
      'ConnectionType': ros.stringToRosTemplate(properties.connectionType),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Port': ros.numberToRosTemplate(properties.port),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::REDIS::Connection`, which is used to apply for a public endpoint for an ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Connection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
 */
export class RosConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Connection";

    /**
     * @Attribute ConnectionString: The allocated connection string.
     */
    public readonly attrConnectionString: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property connectionStringPrefix: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
     */
    public connectionStringPrefix: string | ros.IResolvable;

    /**
     * @Property connectionType: Allowed values:
     * - Public: Public address.
     * - Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.
     */
    public connectionType: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property port: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
     */
    public port: number | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConnectionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.connectionStringPrefix = props.connectionStringPrefix;
        this.connectionType = props.connectionType;
        this.instanceId = props.instanceId;
        this.port = props.port;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            connectionStringPrefix: this.connectionStringPrefix,
            connectionType: this.connectionType,
            instanceId: this.instanceId,
            port: this.port,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-instance
 */
export interface RosInstanceProps {

    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. 
     *  When the instance is about to expire, the instance is automatically renewed 
     * based on the number of months specified by this parameter. 
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;

    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the ApsaraDB for Redis instance.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property connections: Connection address
     */
    readonly connections?: RosInstance.ConnectionsProperty | ros.IResolvable;

    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string | ros.IResolvable;

    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string | ros.IResolvable;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property nodeType: The type of node. Valid value:
     * - **STAND_ALONE**
     * - **MASTER_SLAVE**
     * - **double**
     * - **single**
     */
    readonly nodeType?: string | ros.IResolvable;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    readonly productType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property shardCount: The number of data nodes in the instance. Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node. 
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes. 
     * For more information about the cluster architecture, see Cluster master-replica instances.
     */
    readonly shardCount?: number | ros.IResolvable;

    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * @Property tairConfig: Tair config. This parameter is available only if the InstanceClass parameter is start with tair.
     */
    readonly tairConfig?: RosInstance.TairConfigProperty | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connections', RosInstance_ConnectionsPropertyValidator)(properties.connections));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    if(properties.sslEnabled && (typeof properties.sslEnabled) !== 'object') {
        errors.collect(ros.propertyValidator('sslEnabled', ros.validateAllowedValues)({
          data: properties.sslEnabled,
          allowedValues: ["Disable","Enable","Update"],
        }));
    }
    errors.collect(ros.propertyValidator('sslEnabled', ros.validateString)(properties.sslEnabled));
    errors.collect(ros.propertyValidator('tairConfig', RosInstance_TairConfigPropertyValidator)(properties.tairConfig));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('backupPolicy', RosInstance_BackupPolicyPropertyValidator)(properties.backupPolicy));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.evictionPolicy && (typeof properties.evictionPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('evictionPolicy', ros.validateAllowedValues)({
          data: properties.evictionPolicy,
          allowedValues: ["noeviction","allkeys-lru","volatile-lru","allkeys-random","volatile-random","volatile-ttl"],
        }));
    }
    errors.collect(ros.propertyValidator('evictionPolicy', ros.validateString)(properties.evictionPolicy));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('productType', ros.validateString)(properties.productType));
    errors.collect(ros.propertyValidator('instanceMaintainTime', RosInstance_InstanceMaintainTimePropertyValidator)(properties.instanceMaintainTime));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('secondaryZoneId', ros.validateString)(properties.secondaryZoneId));
    if(properties.autoRenewDuration && (typeof properties.autoRenewDuration) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateRange)({
            data: properties.autoRenewDuration,
            min: 1,
            max: 12,
          }));
    }
    errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateNumber)(properties.autoRenewDuration));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('nodeType', ros.validateString)(properties.nodeType));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["month","year","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'AutoRenewDuration': ros.numberToRosTemplate(properties.autoRenewDuration),
      'BackupPolicy': rosInstanceBackupPolicyPropertyToRosTemplate(properties.backupPolicy),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'Connections': rosInstanceConnectionsPropertyToRosTemplate(properties.connections),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'EvictionPolicy': ros.stringToRosTemplate(properties.evictionPolicy),
      'InstanceClass': ros.stringToRosTemplate(properties.instanceClass),
      'InstanceMaintainTime': rosInstanceInstanceMaintainTimePropertyToRosTemplate(properties.instanceMaintainTime),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'NodeType': ros.stringToRosTemplate(properties.nodeType),
      'Password': ros.stringToRosTemplate(properties.password),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ProductType': ros.stringToRosTemplate(properties.productType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecondaryZoneId': ros.stringToRosTemplate(properties.secondaryZoneId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'ShardCount': ros.numberToRosTemplate(properties.shardCount),
      'SSLEnabled': ros.stringToRosTemplate(properties.sslEnabled),
      'Tags': ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
      'TairConfig': rosInstanceTairConfigPropertyToRosTemplate(properties.tairConfig),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VpcPasswordFree': ros.booleanToRosTemplate(properties.vpcPasswordFree),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::REDIS::Instance`, which is used to create a Tair (Redis OSS-compatible) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Instance";

    /**
     * @Attribute ArchitectureType: The architecture.
     */
    public readonly attrArchitectureType: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute Capacity: The storage capacity of the instance. Unit: MB.
     */
    public readonly attrCapacity: ros.IResolvable;

    /**
     * @Attribute ChargeType: The billing method of the instance.
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * @Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance
     */
    public readonly attrClassicInnerConnectionPort: ros.IResolvable;

    /**
     * @Attribute ClassicInnerConnectionString: The classic inner connection string of the instance
     */
    public readonly attrClassicInnerConnectionString: ros.IResolvable;

    /**
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

    /**
     * @Attribute Connections: The maximum number of connections supported by the instance.
     */
    public readonly attrConnections: ros.IResolvable;

    /**
     * @Attribute DirectConnectionPort: The direct connection port of the instance
     */
    public readonly attrDirectConnectionPort: ros.IResolvable;

    /**
     * @Attribute DirectConnectionString: The direct connection string of the instance
     */
    public readonly attrDirectConnectionString: ros.IResolvable;

    /**
     * @Attribute EngineVersion: The engine version of the instance.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
     */
    public readonly attrHasRenewChangeOrder: ros.IResolvable;

    /**
     * @Attribute InstanceClass: Redis instance type.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * @Attribute InstanceId: Instance id of created redis instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: Name of created redis instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceType: The engine type of the instance.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute NetworkType: The network type.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute NodeType: The type of node.
     */
    public readonly attrNodeType: ros.IResolvable;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PackageType: The plan type.
     */
    public readonly attrPackageType: ros.IResolvable;

    /**
     * @Attribute Port: Port of created instance.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PrivateIp: The internal IP address of the instance.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * @Attribute PublicConnectionPort: The public connection port of the instance
     */
    public readonly attrPublicConnectionPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: The public connection string of the instance
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute QPS: The queries per second (QPS) supported by the instance.
     */
    public readonly attrQps: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance
     */
    public readonly attrVpcPrivateConnectionPort: ros.IResolvable;

    /**
     * @Attribute VpcPrivateConnectionString: The vpc private connection string of the instance
     */
    public readonly attrVpcPrivateConnectionString: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the zone.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. 
     *  When the instance is about to expire, the instance is automatically renewed 
     * based on the number of months specified by this parameter. 
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    public autoRenewDuration: number | ros.IResolvable | undefined;

    /**
     * @Property backupPolicy: Backup policy
     */
    public backupPolicy: RosInstance.BackupPolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the ApsaraDB for Redis instance.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property connections: Connection address
     */
    public connections: RosInstance.ConnectionsProperty | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    public evictionPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    public instanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    public instanceMaintainTime: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property nodeType: The type of node. Valid value:
     * - **STAND_ALONE**
     * - **MASTER_SLAVE**
     * - **double**
     * - **single**
     */
    public nodeType: string | ros.IResolvable | undefined;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    public productType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    public secondaryZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property shardCount: The number of data nodes in the instance. Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node. 
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes. 
     * For more information about the cluster architecture, see Cluster master-replica instances.
     */
    public shardCount: number | ros.IResolvable | undefined;

    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    public sslEnabled: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @Property tairConfig: Tair config. This parameter is available only if the InstanceClass parameter is start with tair.
     */
    public tairConfig: RosInstance.TairConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    public vpcPasswordFree: boolean | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone id of input region.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArchitectureType = this.getAtt('ArchitectureType');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrCapacity = this.getAtt('Capacity');
        this.attrChargeType = this.getAtt('ChargeType');
        this.attrClassicInnerConnectionPort = this.getAtt('ClassicInnerConnectionPort');
        this.attrClassicInnerConnectionString = this.getAtt('ClassicInnerConnectionString');
        this.attrConnectionDomain = this.getAtt('ConnectionDomain');
        this.attrConnections = this.getAtt('Connections');
        this.attrDirectConnectionPort = this.getAtt('DirectConnectionPort');
        this.attrDirectConnectionString = this.getAtt('DirectConnectionString');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrHasRenewChangeOrder = this.getAtt('HasRenewChangeOrder');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrNodeType = this.getAtt('NodeType');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPackageType = this.getAtt('PackageType');
        this.attrPort = this.getAtt('Port');
        this.attrPrivateIp = this.getAtt('PrivateIp');
        this.attrPublicConnectionPort = this.getAtt('PublicConnectionPort');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrQps = this.getAtt('QPS');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVpcPrivateConnectionPort = this.getAtt('VpcPrivateConnectionPort');
        this.attrVpcPrivateConnectionString = this.getAtt('VpcPrivateConnectionString');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoRenewDuration = props.autoRenewDuration;
        this.backupPolicy = props.backupPolicy;
        this.chargeType = props.chargeType;
        this.connections = props.connections;
        this.deletionForce = props.deletionForce;
        this.deletionProtection = props.deletionProtection;
        this.engineVersion = props.engineVersion;
        this.evictionPolicy = props.evictionPolicy;
        this.instanceClass = props.instanceClass;
        this.instanceMaintainTime = props.instanceMaintainTime;
        this.instanceName = props.instanceName;
        this.nodeType = props.nodeType;
        this.password = props.password;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.productType = props.productType;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryZoneId = props.secondaryZoneId;
        this.securityGroupId = props.securityGroupId;
        this.shardCount = props.shardCount;
        this.sslEnabled = props.sslEnabled;
        this.tags = props.tags;
        this.tairConfig = props.tairConfig;
        this.vpcId = props.vpcId;
        this.vpcPasswordFree = props.vpcPasswordFree;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoRenewDuration: this.autoRenewDuration,
            backupPolicy: this.backupPolicy,
            chargeType: this.chargeType,
            connections: this.connections,
            deletionForce: this.deletionForce,
            deletionProtection: this.deletionProtection,
            engineVersion: this.engineVersion,
            evictionPolicy: this.evictionPolicy,
            instanceClass: this.instanceClass,
            instanceMaintainTime: this.instanceMaintainTime,
            instanceName: this.instanceName,
            nodeType: this.nodeType,
            password: this.password,
            period: this.period,
            periodUnit: this.periodUnit,
            productType: this.productType,
            resourceGroupId: this.resourceGroupId,
            secondaryZoneId: this.secondaryZoneId,
            securityGroupId: this.securityGroupId,
            shardCount: this.shardCount,
            sslEnabled: this.sslEnabled,
            tags: this.tags,
            tairConfig: this.tairConfig,
            vpcId: this.vpcId,
            vpcPasswordFree: this.vpcPasswordFree,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface BackupPolicyProperty {
        /**
         * @Property preferredBackupPeriod: The backup cycle. Valid values: Monday\/Tuesday\/Wednesday\/Thursday\/Friday\/Saturday\/Sunday
         */
        readonly preferredBackupPeriod: string | ros.IResolvable;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string | ros.IResolvable;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackupPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `BackupPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_BackupPolicyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.requiredValidator)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.validateString)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.requiredValidator)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('enableBackupLog', ros.validateNumber)(properties.enableBackupLog));
    return errors.wrap('supplied properties not correct for "BackupPolicyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.BackupPolicy` resource
 *
 * @param properties - the TypeScript properties of a `BackupPolicyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.BackupPolicy` resource.
 */
// @ts-ignore TS6133
function rosInstanceBackupPolicyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_BackupPolicyPropertyValidator(properties).assertSuccess();
    return {
      'PreferredBackupPeriod': ros.stringToRosTemplate(properties.preferredBackupPeriod),
      'PreferredBackupTime': ros.stringToRosTemplate(properties.preferredBackupTime),
      'EnableBackupLog': ros.numberToRosTemplate(properties.enableBackupLog),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ClassicInnerConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ClassicInnerConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `ClassicInnerConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ClassicInnerConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "ClassicInnerConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.ClassicInnerConnection` resource
 *
 * @param properties - the TypeScript properties of a `ClassicInnerConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.ClassicInnerConnection` resource.
 */
// @ts-ignore TS6133
function rosInstanceClassicInnerConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ClassicInnerConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ConnectionsProperty {
        /**
         * @Property vpcPrivateConnection: Vpc intranet address.
         */
        readonly vpcPrivateConnection?: RosInstance.VpcPrivateConnectionProperty | ros.IResolvable;
        /**
         * @Property publicConnection: Public address.
         */
        readonly publicConnection?: RosInstance.PublicConnectionProperty | ros.IResolvable;
        /**
         * @Property directConnection: Direct connection address. The instance is a cluster instance. 
     * You can apply for a direct connection endpoint as required.
         */
        readonly directConnection?: RosInstance.DirectConnectionProperty | ros.IResolvable;
        /**
         * @Property classicInnerConnection: Classic intranet address.
         */
        readonly classicInnerConnection?: RosInstance.ClassicInnerConnectionProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConnectionsProperty`
 *
 * @param properties - the TypeScript properties of a `ConnectionsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ConnectionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcPrivateConnection', RosInstance_VpcPrivateConnectionPropertyValidator)(properties.vpcPrivateConnection));
    errors.collect(ros.propertyValidator('publicConnection', RosInstance_PublicConnectionPropertyValidator)(properties.publicConnection));
    errors.collect(ros.propertyValidator('directConnection', RosInstance_DirectConnectionPropertyValidator)(properties.directConnection));
    errors.collect(ros.propertyValidator('classicInnerConnection', RosInstance_ClassicInnerConnectionPropertyValidator)(properties.classicInnerConnection));
    return errors.wrap('supplied properties not correct for "ConnectionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.Connections` resource
 *
 * @param properties - the TypeScript properties of a `ConnectionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.Connections` resource.
 */
// @ts-ignore TS6133
function rosInstanceConnectionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ConnectionsPropertyValidator(properties).assertSuccess();
    return {
      'VpcPrivateConnection': rosInstanceVpcPrivateConnectionPropertyToRosTemplate(properties.vpcPrivateConnection),
      'PublicConnection': rosInstancePublicConnectionPropertyToRosTemplate(properties.publicConnection),
      'DirectConnection': rosInstanceDirectConnectionPropertyToRosTemplate(properties.directConnection),
      'ClassicInnerConnection': rosInstanceClassicInnerConnectionPropertyToRosTemplate(properties.classicInnerConnection),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface DirectConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DirectConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `DirectConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_DirectConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "DirectConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.DirectConnection` resource
 *
 * @param properties - the TypeScript properties of a `DirectConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.DirectConnection` resource.
 */
// @ts-ignore TS6133
function rosInstanceDirectConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_DirectConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface InstanceMaintainTimeProperty {
        /**
         * @Property maintainEndTime: The end time of the maintenance window. 
     * Specify the time in the ISO 8601 standard in the HH:mmZ format. 
     * The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00, 
     * you must set this parameter to 18:00Z.
         */
        readonly maintainEndTime?: string | ros.IResolvable;
        /**
         * @Property maintainStartTime: The start time of the maintenance window. 
     * Specify the time in the ISO 8601 standard in the HH:mmZ format. 
     * The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00, 
     * you must set this parameter to 17:00Z.
         */
        readonly maintainStartTime?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceMaintainTimeProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceMaintainTimeProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_InstanceMaintainTimePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.maintainEndTime && (typeof properties.maintainEndTime) !== 'object') {
        errors.collect(ros.propertyValidator('maintainEndTime', ros.validateAllowedPattern)({
          data: properties.maintainEndTime,
          reg: /^([0-1][0-9]|2[0-3]):([0-5][0-9])Z$/
        }));
    }
    errors.collect(ros.propertyValidator('maintainEndTime', ros.validateString)(properties.maintainEndTime));
    if(properties.maintainStartTime && (typeof properties.maintainStartTime) !== 'object') {
        errors.collect(ros.propertyValidator('maintainStartTime', ros.validateAllowedPattern)({
          data: properties.maintainStartTime,
          reg: /^([0-1][0-9]|2[0-3]):([0-5][0-9])Z$/
        }));
    }
    errors.collect(ros.propertyValidator('maintainStartTime', ros.validateString)(properties.maintainStartTime));
    return errors.wrap('supplied properties not correct for "InstanceMaintainTimeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.InstanceMaintainTime` resource
 *
 * @param properties - the TypeScript properties of a `InstanceMaintainTimeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.InstanceMaintainTime` resource.
 */
// @ts-ignore TS6133
function rosInstanceInstanceMaintainTimePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_InstanceMaintainTimePropertyValidator(properties).assertSuccess();
    return {
      'MaintainEndTime': ros.stringToRosTemplate(properties.maintainEndTime),
      'MaintainStartTime': ros.stringToRosTemplate(properties.maintainStartTime),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface PublicConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PublicConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `PublicConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_PublicConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "PublicConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.PublicConnection` resource
 *
 * @param properties - the TypeScript properties of a `PublicConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.PublicConnection` resource.
 */
// @ts-ignore TS6133
function rosInstancePublicConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_PublicConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

export namespace RosInstance {
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
function RosInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface TairConfigProperty {
        /**
         * @Property storageType: The storage type of the instance. Set the value to essd_pl1.This parameter is available only if the InstanceClass parameter is start with tair.essdEnumeration Value:
     * essd_pl0
     * essd_pl1
     * essd_pl
     * essd_pl3
     *
         */
        readonly storageType?: string | ros.IResolvable;
        /**
         * @Property storage: The storage space of cloud disks. Valid values vary based on the instance specifications. 
     * For more information, see ESSD-based instances.
     * This parameter is available and required only if the InstanceClass parameter is start with tair.essd
         */
        readonly storage?: number | ros.IResolvable;
        /**
         * @Property shardCount: The number of data nodes in the instance. Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node. 
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes. 
     * For more information about the cluster architecture, see Cluster master-replica instances.
     * This parameter is available and required only if the InstanceClass parameter is start with tair.rdb or tair.scm
         */
        readonly shardCount?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TairConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TairConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TairConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('storage', ros.validateNumber)(properties.storage));
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    return errors.wrap('supplied properties not correct for "TairConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.TairConfig` resource
 *
 * @param properties - the TypeScript properties of a `TairConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.TairConfig` resource.
 */
// @ts-ignore TS6133
function rosInstanceTairConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TairConfigPropertyValidator(properties).assertSuccess();
    return {
      'StorageType': ros.stringToRosTemplate(properties.storageType),
      'Storage': ros.numberToRosTemplate(properties.storage),
      'ShardCount': ros.numberToRosTemplate(properties.shardCount),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface VpcPrivateConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VpcPrivateConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `VpcPrivateConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_VpcPrivateConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "VpcPrivateConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.VpcPrivateConnection` resource
 *
 * @param properties - the TypeScript properties of a `VpcPrivateConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.VpcPrivateConnection` resource.
 */
// @ts-ignore TS6133
function rosInstanceVpcPrivateConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_VpcPrivateConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

/**
 * Properties for defining a `RosPrepayInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-prepayinstance
 */
export interface RosPrepayInstanceProps {

    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. 
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default is False
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. 
     *  When the instance is about to expire, the instance is automatically renewed 
     * based on the number of months specified by this parameter. 
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;

    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * @Property connections: Connection address
     */
    readonly connections?: RosPrepayInstance.ConnectionsProperty | ros.IResolvable;

    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string | ros.IResolvable;

    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string | ros.IResolvable;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property nodeType: The type of node. Valid value:
     * - **STAND_ALONE**
     * - **MASTER_SLAVE**
     * - **double**
     * - **single**
     */
    readonly nodeType?: string | ros.IResolvable;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    readonly productType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property shardCount: The number of data nodes in the instance. Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node. 
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes. 
     * For more information about the cluster architecture, see Cluster master-replica instances.
     */
    readonly shardCount?: number | ros.IResolvable;

    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosPrepayInstance.TagsProperty[];

    /**
     * @Property tairConfig: Tair config. This parameter is available only if the InstanceClass parameter is start with tair.
     */
    readonly tairConfig?: RosPrepayInstance.TairConfigProperty | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrepayInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosPrepayInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connections', RosPrepayInstance_ConnectionsPropertyValidator)(properties.connections));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    if(properties.sslEnabled && (typeof properties.sslEnabled) !== 'object') {
        errors.collect(ros.propertyValidator('sslEnabled', ros.validateAllowedValues)({
          data: properties.sslEnabled,
          allowedValues: ["Disable","Enable","Update"],
        }));
    }
    errors.collect(ros.propertyValidator('sslEnabled', ros.validateString)(properties.sslEnabled));
    errors.collect(ros.propertyValidator('tairConfig', RosPrepayInstance_TairConfigPropertyValidator)(properties.tairConfig));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosPrepayInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('backupPolicy', RosPrepayInstance_BackupPolicyPropertyValidator)(properties.backupPolicy));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.evictionPolicy && (typeof properties.evictionPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('evictionPolicy', ros.validateAllowedValues)({
          data: properties.evictionPolicy,
          allowedValues: ["noeviction","allkeys-lru","volatile-lru","allkeys-random","volatile-random","volatile-ttl"],
        }));
    }
    errors.collect(ros.propertyValidator('evictionPolicy', ros.validateString)(properties.evictionPolicy));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('productType', ros.validateString)(properties.productType));
    errors.collect(ros.propertyValidator('instanceMaintainTime', RosPrepayInstance_InstanceMaintainTimePropertyValidator)(properties.instanceMaintainTime));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('secondaryZoneId', ros.validateString)(properties.secondaryZoneId));
    if(properties.autoRenewDuration && (typeof properties.autoRenewDuration) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateRange)({
            data: properties.autoRenewDuration,
            min: 1,
            max: 12,
          }));
    }
    errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateNumber)(properties.autoRenewDuration));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('nodeType', ros.validateString)(properties.nodeType));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["month","year","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosPrepayInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosPrepayInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrepayInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenewDuration': ros.numberToRosTemplate(properties.autoRenewDuration),
      'BackupPolicy': rosPrepayInstanceBackupPolicyPropertyToRosTemplate(properties.backupPolicy),
      'Connections': rosPrepayInstanceConnectionsPropertyToRosTemplate(properties.connections),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'EvictionPolicy': ros.stringToRosTemplate(properties.evictionPolicy),
      'InstanceClass': ros.stringToRosTemplate(properties.instanceClass),
      'InstanceMaintainTime': rosPrepayInstanceInstanceMaintainTimePropertyToRosTemplate(properties.instanceMaintainTime),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'NodeType': ros.stringToRosTemplate(properties.nodeType),
      'Password': ros.stringToRosTemplate(properties.password),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ProductType': ros.stringToRosTemplate(properties.productType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecondaryZoneId': ros.stringToRosTemplate(properties.secondaryZoneId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'ShardCount': ros.numberToRosTemplate(properties.shardCount),
      'SSLEnabled': ros.stringToRosTemplate(properties.sslEnabled),
      'Tags': ros.listMapper(rosPrepayInstanceTagsPropertyToRosTemplate)(properties.tags),
      'TairConfig': rosPrepayInstanceTairConfigPropertyToRosTemplate(properties.tairConfig),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VpcPasswordFree': ros.booleanToRosTemplate(properties.vpcPasswordFree),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::REDIS::PrepayInstance`, which is used to create a subscription ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrepayInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-prepayinstance
 */
export class RosPrepayInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::PrepayInstance";

    /**
     * @Attribute ArchitectureType: The architecture.
     */
    public readonly attrArchitectureType: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute Capacity: The storage capacity of the instance. Unit: MB.
     */
    public readonly attrCapacity: ros.IResolvable;

    /**
     * @Attribute ChargeType: The billing method of the instance.
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * @Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance
     */
    public readonly attrClassicInnerConnectionPort: ros.IResolvable;

    /**
     * @Attribute ClassicInnerConnectionString: The classic inner connection string of the instance
     */
    public readonly attrClassicInnerConnectionString: ros.IResolvable;

    /**
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

    /**
     * @Attribute Connections: The maximum number of connections supported by the instance.
     */
    public readonly attrConnections: ros.IResolvable;

    /**
     * @Attribute DirectConnectionPort: The direct connection port of the instance
     */
    public readonly attrDirectConnectionPort: ros.IResolvable;

    /**
     * @Attribute DirectConnectionString: The direct connection string of the instance
     */
    public readonly attrDirectConnectionString: ros.IResolvable;

    /**
     * @Attribute EngineVersion: The engine version of the instance.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
     */
    public readonly attrHasRenewChangeOrder: ros.IResolvable;

    /**
     * @Attribute InstanceClass: Redis instance type.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * @Attribute InstanceId: Instance id of created redis instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: Name of created redis instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceType: The engine type of the instance.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute NetworkType: The network type.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute NodeType: The type of node.
     */
    public readonly attrNodeType: ros.IResolvable;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PackageType: The plan type.
     */
    public readonly attrPackageType: ros.IResolvable;

    /**
     * @Attribute Port: Port of created instance.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PrivateIp: The internal IP address of the instance.
     */
    public readonly attrPrivateIp: ros.IResolvable;

    /**
     * @Attribute PublicConnectionPort: The public connection port of the instance
     */
    public readonly attrPublicConnectionPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: The public connection string of the instance
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute QPS: The queries per second (QPS) supported by the instance.
     */
    public readonly attrQps: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance
     */
    public readonly attrVpcPrivateConnectionPort: ros.IResolvable;

    /**
     * @Attribute VpcPrivateConnectionString: The vpc private connection string of the instance
     */
    public readonly attrVpcPrivateConnectionString: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the zone.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. 
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default is False
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12. 
     *  When the instance is about to expire, the instance is automatically renewed 
     * based on the number of months specified by this parameter. 
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    public autoRenewDuration: number | ros.IResolvable | undefined;

    /**
     * @Property backupPolicy: Backup policy
     */
    public backupPolicy: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property connections: Connection address
     */
    public connections: RosPrepayInstance.ConnectionsProperty | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    public evictionPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    public instanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    public instanceMaintainTime: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property nodeType: The type of node. Valid value:
     * - **STAND_ALONE**
     * - **MASTER_SLAVE**
     * - **double**
     * - **single**
     */
    public nodeType: string | ros.IResolvable | undefined;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    public productType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    public secondaryZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property shardCount: The number of data nodes in the instance. Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node. 
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes. 
     * For more information about the cluster architecture, see Cluster master-replica instances.
     */
    public shardCount: number | ros.IResolvable | undefined;

    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    public sslEnabled: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosPrepayInstance.TagsProperty[] | undefined;

    /**
     * @Property tairConfig: Tair config. This parameter is available only if the InstanceClass parameter is start with tair.
     */
    public tairConfig: RosPrepayInstance.TairConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    public vpcPasswordFree: boolean | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone id of input region.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrepayInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArchitectureType = this.getAtt('ArchitectureType');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrCapacity = this.getAtt('Capacity');
        this.attrChargeType = this.getAtt('ChargeType');
        this.attrClassicInnerConnectionPort = this.getAtt('ClassicInnerConnectionPort');
        this.attrClassicInnerConnectionString = this.getAtt('ClassicInnerConnectionString');
        this.attrConnectionDomain = this.getAtt('ConnectionDomain');
        this.attrConnections = this.getAtt('Connections');
        this.attrDirectConnectionPort = this.getAtt('DirectConnectionPort');
        this.attrDirectConnectionString = this.getAtt('DirectConnectionString');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrHasRenewChangeOrder = this.getAtt('HasRenewChangeOrder');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrNodeType = this.getAtt('NodeType');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPackageType = this.getAtt('PackageType');
        this.attrPort = this.getAtt('Port');
        this.attrPrivateIp = this.getAtt('PrivateIp');
        this.attrPublicConnectionPort = this.getAtt('PublicConnectionPort');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrQps = this.getAtt('QPS');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVpcPrivateConnectionPort = this.getAtt('VpcPrivateConnectionPort');
        this.attrVpcPrivateConnectionString = this.getAtt('VpcPrivateConnectionString');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoPay = props.autoPay;
        this.autoRenewDuration = props.autoRenewDuration;
        this.backupPolicy = props.backupPolicy;
        this.connections = props.connections;
        this.deletionForce = props.deletionForce;
        this.deletionProtection = props.deletionProtection;
        this.engineVersion = props.engineVersion;
        this.evictionPolicy = props.evictionPolicy;
        this.instanceClass = props.instanceClass;
        this.instanceMaintainTime = props.instanceMaintainTime;
        this.instanceName = props.instanceName;
        this.nodeType = props.nodeType;
        this.password = props.password;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.productType = props.productType;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryZoneId = props.secondaryZoneId;
        this.securityGroupId = props.securityGroupId;
        this.shardCount = props.shardCount;
        this.sslEnabled = props.sslEnabled;
        this.tags = props.tags;
        this.tairConfig = props.tairConfig;
        this.vpcId = props.vpcId;
        this.vpcPasswordFree = props.vpcPasswordFree;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoPay: this.autoPay,
            autoRenewDuration: this.autoRenewDuration,
            backupPolicy: this.backupPolicy,
            connections: this.connections,
            deletionForce: this.deletionForce,
            deletionProtection: this.deletionProtection,
            engineVersion: this.engineVersion,
            evictionPolicy: this.evictionPolicy,
            instanceClass: this.instanceClass,
            instanceMaintainTime: this.instanceMaintainTime,
            instanceName: this.instanceName,
            nodeType: this.nodeType,
            password: this.password,
            period: this.period,
            periodUnit: this.periodUnit,
            productType: this.productType,
            resourceGroupId: this.resourceGroupId,
            secondaryZoneId: this.secondaryZoneId,
            securityGroupId: this.securityGroupId,
            shardCount: this.shardCount,
            sslEnabled: this.sslEnabled,
            tags: this.tags,
            tairConfig: this.tairConfig,
            vpcId: this.vpcId,
            vpcPasswordFree: this.vpcPasswordFree,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrepayInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface BackupPolicyProperty {
        /**
         * @Property preferredBackupPeriod: The backup cycle. Valid values: Monday\/Tuesday\/Wednesday\/Thursday\/Friday\/Saturday\/Sunday
         */
        readonly preferredBackupPeriod: string | ros.IResolvable;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string | ros.IResolvable;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackupPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `BackupPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_BackupPolicyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.requiredValidator)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.validateString)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.requiredValidator)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('enableBackupLog', ros.validateNumber)(properties.enableBackupLog));
    return errors.wrap('supplied properties not correct for "BackupPolicyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.BackupPolicy` resource
 *
 * @param properties - the TypeScript properties of a `BackupPolicyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.BackupPolicy` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceBackupPolicyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_BackupPolicyPropertyValidator(properties).assertSuccess();
    return {
      'PreferredBackupPeriod': ros.stringToRosTemplate(properties.preferredBackupPeriod),
      'PreferredBackupTime': ros.stringToRosTemplate(properties.preferredBackupTime),
      'EnableBackupLog': ros.numberToRosTemplate(properties.enableBackupLog),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface ClassicInnerConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ClassicInnerConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `ClassicInnerConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_ClassicInnerConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "ClassicInnerConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.ClassicInnerConnection` resource
 *
 * @param properties - the TypeScript properties of a `ClassicInnerConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.ClassicInnerConnection` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceClassicInnerConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_ClassicInnerConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface ConnectionsProperty {
        /**
         * @Property vpcPrivateConnection: Vpc intranet address.
         */
        readonly vpcPrivateConnection?: RosPrepayInstance.VpcPrivateConnectionProperty | ros.IResolvable;
        /**
         * @Property publicConnection: Public address.
         */
        readonly publicConnection?: RosPrepayInstance.PublicConnectionProperty | ros.IResolvable;
        /**
         * @Property directConnection: Direct connection address. The instance is a cluster instance. 
     * You can apply for a direct connection endpoint as required.
         */
        readonly directConnection?: RosPrepayInstance.DirectConnectionProperty | ros.IResolvable;
        /**
         * @Property classicInnerConnection: Classic intranet address.
         */
        readonly classicInnerConnection?: RosPrepayInstance.ClassicInnerConnectionProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConnectionsProperty`
 *
 * @param properties - the TypeScript properties of a `ConnectionsProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_ConnectionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcPrivateConnection', RosPrepayInstance_VpcPrivateConnectionPropertyValidator)(properties.vpcPrivateConnection));
    errors.collect(ros.propertyValidator('publicConnection', RosPrepayInstance_PublicConnectionPropertyValidator)(properties.publicConnection));
    errors.collect(ros.propertyValidator('directConnection', RosPrepayInstance_DirectConnectionPropertyValidator)(properties.directConnection));
    errors.collect(ros.propertyValidator('classicInnerConnection', RosPrepayInstance_ClassicInnerConnectionPropertyValidator)(properties.classicInnerConnection));
    return errors.wrap('supplied properties not correct for "ConnectionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.Connections` resource
 *
 * @param properties - the TypeScript properties of a `ConnectionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.Connections` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceConnectionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_ConnectionsPropertyValidator(properties).assertSuccess();
    return {
      'VpcPrivateConnection': rosPrepayInstanceVpcPrivateConnectionPropertyToRosTemplate(properties.vpcPrivateConnection),
      'PublicConnection': rosPrepayInstancePublicConnectionPropertyToRosTemplate(properties.publicConnection),
      'DirectConnection': rosPrepayInstanceDirectConnectionPropertyToRosTemplate(properties.directConnection),
      'ClassicInnerConnection': rosPrepayInstanceClassicInnerConnectionPropertyToRosTemplate(properties.classicInnerConnection),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface DirectConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DirectConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `DirectConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_DirectConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "DirectConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.DirectConnection` resource
 *
 * @param properties - the TypeScript properties of a `DirectConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.DirectConnection` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceDirectConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_DirectConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface InstanceMaintainTimeProperty {
        /**
         * @Property maintainEndTime: The end time of the maintenance window. 
     * Specify the time in the ISO 8601 standard in the HH:mmZ format. 
     * The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00, 
     * you must set this parameter to 18:00Z.
         */
        readonly maintainEndTime?: string | ros.IResolvable;
        /**
         * @Property maintainStartTime: The start time of the maintenance window. 
     * Specify the time in the ISO 8601 standard in the HH:mmZ format. 
     * The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00, 
     * you must set this parameter to 17:00Z.
         */
        readonly maintainStartTime?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceMaintainTimeProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceMaintainTimeProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_InstanceMaintainTimePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.maintainEndTime && (typeof properties.maintainEndTime) !== 'object') {
        errors.collect(ros.propertyValidator('maintainEndTime', ros.validateAllowedPattern)({
          data: properties.maintainEndTime,
          reg: /^([0-1][0-9]|2[0-3]):([0-5][0-9])Z$/
        }));
    }
    errors.collect(ros.propertyValidator('maintainEndTime', ros.validateString)(properties.maintainEndTime));
    if(properties.maintainStartTime && (typeof properties.maintainStartTime) !== 'object') {
        errors.collect(ros.propertyValidator('maintainStartTime', ros.validateAllowedPattern)({
          data: properties.maintainStartTime,
          reg: /^([0-1][0-9]|2[0-3]):([0-5][0-9])Z$/
        }));
    }
    errors.collect(ros.propertyValidator('maintainStartTime', ros.validateString)(properties.maintainStartTime));
    return errors.wrap('supplied properties not correct for "InstanceMaintainTimeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.InstanceMaintainTime` resource
 *
 * @param properties - the TypeScript properties of a `InstanceMaintainTimeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.InstanceMaintainTime` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceInstanceMaintainTimePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_InstanceMaintainTimePropertyValidator(properties).assertSuccess();
    return {
      'MaintainEndTime': ros.stringToRosTemplate(properties.maintainEndTime),
      'MaintainStartTime': ros.stringToRosTemplate(properties.maintainStartTime),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface PublicConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PublicConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `PublicConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_PublicConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "PublicConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.PublicConnection` resource
 *
 * @param properties - the TypeScript properties of a `PublicConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.PublicConnection` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstancePublicConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_PublicConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

export namespace RosPrepayInstance {
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
function RosPrepayInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface TairConfigProperty {
        /**
         * @Property storageType: The storage type of the instance. Set the value to essd_pl1.This parameter is available only if the InstanceClass parameter is start with tair.essdEnumeration Value:
     * essd_pl0
     * essd_pl1
     * essd_pl
     * essd_pl3
     *
         */
        readonly storageType?: string | ros.IResolvable;
        /**
         * @Property storage: The storage space of cloud disks. Valid values vary based on the instance specifications. 
     * For more information, see ESSD-based instances.
     * This parameter is available and required only if the InstanceClass parameter is start with tair.essd
         */
        readonly storage?: number | ros.IResolvable;
        /**
         * @Property shardCount: The number of data nodes in the instance. Default value: 1. Valid values:
     * 1: You can create an instance in the standard architecture that contains only a single data node. 
     * For more information about the standard architecture, see Cluster master-replica instances.
     * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes. 
     * For more information about the cluster architecture, see Cluster master-replica instances.
     * This parameter is available and required only if the InstanceClass parameter is start with tair.rdb or tair.scm
         */
        readonly shardCount?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TairConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TairConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_TairConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('storage', ros.validateNumber)(properties.storage));
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    return errors.wrap('supplied properties not correct for "TairConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.TairConfig` resource
 *
 * @param properties - the TypeScript properties of a `TairConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.TairConfig` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceTairConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_TairConfigPropertyValidator(properties).assertSuccess();
    return {
      'StorageType': ros.stringToRosTemplate(properties.storageType),
      'Storage': ros.numberToRosTemplate(properties.storage),
      'ShardCount': ros.numberToRosTemplate(properties.shardCount),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface VpcPrivateConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint. 
     * The prefix must be 8 to 64 characters in length, 
     * and can contain lowercase letters and digits. 
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VpcPrivateConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `VpcPrivateConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_VpcPrivateConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPort', ros.requiredValidator)(properties.connectionPort));
    if(properties.connectionPort && (typeof properties.connectionPort) !== 'object') {
        errors.collect(ros.propertyValidator('connectionPort', ros.validateRange)({
            data: properties.connectionPort,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('connectionPort', ros.validateNumber)(properties.connectionPort));
    errors.collect(ros.propertyValidator('connectionString', ros.requiredValidator)(properties.connectionString));
    if(properties.connectionString && (typeof properties.connectionString) !== 'object') {
        errors.collect(ros.propertyValidator('connectionString', ros.validateAllowedPattern)({
          data: properties.connectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    return errors.wrap('supplied properties not correct for "VpcPrivateConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.VpcPrivateConnection` resource
 *
 * @param properties - the TypeScript properties of a `VpcPrivateConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.VpcPrivateConnection` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceVpcPrivateConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_VpcPrivateConnectionPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPort': ros.numberToRosTemplate(properties.connectionPort),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
    };
}

/**
 * Properties for defining a `RosWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-whitelist
 */
export interface RosWhitelistProps {

    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    readonly securityIps: string | ros.IResolvable;

    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string | ros.IResolvable;

    /**
     * @Property securityIpGroupName: Whitelist group
     */
    readonly securityIpGroupName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWhitelistProps`
 *
 * @param properties - the TypeScript properties of a `RosWhitelistProps`
 *
 * @returns the result of the validation.
 */
function RosWhitelistPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('securityIpGroupAttribute', ros.validateString)(properties.securityIpGroupAttribute));
    errors.collect(ros.propertyValidator('securityIps', ros.requiredValidator)(properties.securityIps));
    errors.collect(ros.propertyValidator('securityIps', ros.validateString)(properties.securityIps));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.securityIpGroupName && (typeof properties.securityIpGroupName) !== 'object') {
        errors.collect(ros.propertyValidator('securityIpGroupName', ros.validateAllowedPattern)({
          data: properties.securityIpGroupName,
          reg: /[a-z][a-zA-Z0-9_]*[a-zA-Z0-9]/
        }));
    }
    if(properties.securityIpGroupName && (Array.isArray(properties.securityIpGroupName) || (typeof properties.securityIpGroupName) === 'string')) {
        errors.collect(ros.propertyValidator('securityIpGroupName', ros.validateLength)({
            data: properties.securityIpGroupName.length,
            min: 2,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('securityIpGroupName', ros.validateString)(properties.securityIpGroupName));
    return errors.wrap('supplied properties not correct for "RosWhitelistProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Whitelist` resource
 *
 * @param properties - the TypeScript properties of a `RosWhitelistProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Whitelist` resource.
 */
// @ts-ignore TS6133
function rosWhitelistPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWhitelistPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'SecurityIps': ros.stringToRosTemplate(properties.securityIps),
      'SecurityIpGroupAttribute': ros.stringToRosTemplate(properties.securityIpGroupAttribute),
      'SecurityIpGroupName': ros.stringToRosTemplate(properties.securityIpGroupName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::REDIS::Whitelist`, which is used to configure an IP address whitelist for an ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Whitelist` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-whitelist
 */
export class RosWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Whitelist";

    /**
     * @Attribute SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    public readonly attrSecurityIpGroupAttribute: ros.IResolvable;

    /**
     * @Attribute SecurityIpGroupName: Whitelist group
     */
    public readonly attrSecurityIpGroupName: ros.IResolvable;

    /**
     * @Attribute SecurityIps: IP address whitelist to be modified
     */
    public readonly attrSecurityIps: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    public securityIps: string | ros.IResolvable;

    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    public securityIpGroupAttribute: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpGroupName: Whitelist group
     */
    public securityIpGroupName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWhitelistProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWhitelist.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityIpGroupAttribute = this.getAtt('SecurityIpGroupAttribute');
        this.attrSecurityIpGroupName = this.getAtt('SecurityIpGroupName');
        this.attrSecurityIps = this.getAtt('SecurityIps');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.securityIps = props.securityIps;
        this.securityIpGroupAttribute = props.securityIpGroupAttribute;
        this.securityIpGroupName = props.securityIpGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            securityIps: this.securityIps,
            securityIpGroupAttribute: this.securityIpGroupAttribute,
            securityIpGroupName: this.securityIpGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWhitelistPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
