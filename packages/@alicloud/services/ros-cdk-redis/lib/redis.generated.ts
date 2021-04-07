// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::REDIS::Account`
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
     * The description must start with a letter, and cannot start with http:// or https://.
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
      AccountName: ros.stringToRosTemplate(properties.accountName),
      AccountPassword: ros.stringToRosTemplate(properties.accountPassword),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      AccountDescription: ros.stringToRosTemplate(properties.accountDescription),
      AccountPrivilege: ros.stringToRosTemplate(properties.accountPrivilege),
      AccountType: ros.stringToRosTemplate(properties.accountType),
    };
}

/**
 * A ROS template type:  `ALIYUN::REDIS::Account`
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Account";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * The description must start with a letter, and cannot start with http:// or https://.
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
     * Create a new `ALIYUN::REDIS::Account`.
     *
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
 * Properties for defining a `ALIYUN::REDIS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number | ros.IResolvable;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
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
     * @Property instanceConnection: Instance connection message.
     */
    readonly instanceConnection?: RosInstance.InstanceConnectionProperty | ros.IResolvable;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;

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
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["2.8","4.0","5.0"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    if(properties.evictionPolicy && (typeof properties.evictionPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('evictionPolicy', ros.validateAllowedValues)({
          data: properties.evictionPolicy,
          allowedValues: ["noeviction","allkeys-lru","volatile-lru","allkeys-random","volatile-random","volatile-ttl"],
        }));
    }
    errors.collect(ros.propertyValidator('evictionPolicy', ros.validateString)(properties.evictionPolicy));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('instanceMaintainTime', RosInstance_InstanceMaintainTimePropertyValidator)(properties.instanceMaintainTime));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    errors.collect(ros.propertyValidator('instanceConnection', RosInstance_InstanceConnectionPropertyValidator)(properties.instanceConnection));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.sslEnabled && (typeof properties.sslEnabled) !== 'object') {
        errors.collect(ros.propertyValidator('sslEnabled', ros.validateAllowedValues)({
          data: properties.sslEnabled,
          allowedValues: ["Disable","Enable","Update"],
        }));
    }
    errors.collect(ros.propertyValidator('sslEnabled', ros.validateString)(properties.sslEnabled));
    if(properties.capacity && (typeof properties.capacity) !== 'object') {
        errors.collect(ros.propertyValidator('capacity', ros.validateAllowedValues)({
          data: properties.capacity,
          allowedValues: [1,2,4,8,16,32,64,128,256,512],
        }));
    }
    errors.collect(ros.propertyValidator('capacity', ros.validateNumber)(properties.capacity));
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
      BackupPolicy: rosInstanceBackupPolicyPropertyToRosTemplate(properties.backupPolicy),
      Capacity: ros.numberToRosTemplate(properties.capacity),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      EvictionPolicy: ros.stringToRosTemplate(properties.evictionPolicy),
      InstanceClass: ros.stringToRosTemplate(properties.instanceClass),
      InstanceConnection: rosInstanceInstanceConnectionPropertyToRosTemplate(properties.instanceConnection),
      InstanceMaintainTime: rosInstanceInstanceMaintainTimePropertyToRosTemplate(properties.instanceMaintainTime),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      Password: ros.stringToRosTemplate(properties.password),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SSLEnabled: ros.stringToRosTemplate(properties.sslEnabled),
      Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VpcPasswordFree: ros.booleanToRosTemplate(properties.vpcPasswordFree),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::REDIS::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

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
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute Port: Port of created instance.
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupPolicy: Backup policy
     */
    public backupPolicy: RosInstance.BackupPolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    public capacity: number | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
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
     * @Property instanceConnection: Instance connection message.
     */
    public instanceConnection: RosInstance.InstanceConnectionProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    public instanceMaintainTime: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

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
     * Create a new `ALIYUN::REDIS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionDomain = this.getAtt('ConnectionDomain');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupPolicy = props.backupPolicy;
        this.capacity = props.capacity;
        this.engineVersion = props.engineVersion;
        this.evictionPolicy = props.evictionPolicy;
        this.instanceClass = props.instanceClass;
        this.instanceConnection = props.instanceConnection;
        this.instanceMaintainTime = props.instanceMaintainTime;
        this.instanceName = props.instanceName;
        this.password = props.password;
        this.securityGroupId = props.securityGroupId;
        this.sslEnabled = props.sslEnabled;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vpcPasswordFree = props.vpcPasswordFree;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPolicy: this.backupPolicy,
            capacity: this.capacity,
            engineVersion: this.engineVersion,
            evictionPolicy: this.evictionPolicy,
            instanceClass: this.instanceClass,
            instanceConnection: this.instanceConnection,
            instanceMaintainTime: this.instanceMaintainTime,
            instanceName: this.instanceName,
            password: this.password,
            securityGroupId: this.securityGroupId,
            sslEnabled: this.sslEnabled,
            tags: this.tags,
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
         * @Property preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
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
      PreferredBackupPeriod: ros.stringToRosTemplate(properties.preferredBackupPeriod),
      PreferredBackupTime: ros.stringToRosTemplate(properties.preferredBackupTime),
      EnableBackupLog: ros.numberToRosTemplate(properties.enableBackupLog),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface InstanceConnectionProperty {
        /**
         * @Property ipType: The network type of the new endpoint. Value values:
     * - Private: internal network.
     * - Public: public network.
         */
        readonly ipType?: string | ros.IResolvable;
        /**
         * @Property port: The service port of the instance. 
     * Valid values: 1024 to 65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property newConnectionString: The prefix of the new endpoint. 
     * The new endpoint of the ApsaraDB for Redis instance is in the <Prefix>.redis.rds.aliyuncs.com format. 
     * The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits. 
     * The prefix can be 8 to 64 characters in length.
         */
        readonly newConnectionString?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_InstanceConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipType && (typeof properties.ipType) !== 'object') {
        errors.collect(ros.propertyValidator('ipType', ros.validateAllowedValues)({
          data: properties.ipType,
          allowedValues: ["Private","Public","Inner"],
        }));
    }
    errors.collect(ros.propertyValidator('ipType', ros.validateString)(properties.ipType));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.newConnectionString && (typeof properties.newConnectionString) !== 'object') {
        errors.collect(ros.propertyValidator('newConnectionString', ros.validateAllowedPattern)({
          data: properties.newConnectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('newConnectionString', ros.validateString)(properties.newConnectionString));
    return errors.wrap('supplied properties not correct for "InstanceConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.InstanceConnection` resource
 *
 * @param properties - the TypeScript properties of a `InstanceConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::Instance.InstanceConnection` resource.
 */
// @ts-ignore TS6133
function rosInstanceInstanceConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_InstanceConnectionPropertyValidator(properties).assertSuccess();
    return {
      IPType: ros.stringToRosTemplate(properties.ipType),
      Port: ros.numberToRosTemplate(properties.port),
      NewConnectionString: ros.stringToRosTemplate(properties.newConnectionString),
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
      MaintainEndTime: ros.stringToRosTemplate(properties.maintainEndTime),
      MaintainStartTime: ros.stringToRosTemplate(properties.maintainStartTime),
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
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::REDIS::PrepayInstance`
 */
export interface RosPrepayInstanceProps {

    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number | ros.IResolvable;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
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
     * @Property instanceConnection: Instance connection message.
     */
    readonly instanceConnection?: RosPrepayInstance.InstanceConnectionProperty | ros.IResolvable;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;

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
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["2.8","4.0","5.0"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.evictionPolicy && (typeof properties.evictionPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('evictionPolicy', ros.validateAllowedValues)({
          data: properties.evictionPolicy,
          allowedValues: ["noeviction","allkeys-lru","volatile-lru","allkeys-random","volatile-random","volatile-ttl"],
        }));
    }
    errors.collect(ros.propertyValidator('evictionPolicy', ros.validateString)(properties.evictionPolicy));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('instanceMaintainTime', RosPrepayInstance_InstanceMaintainTimePropertyValidator)(properties.instanceMaintainTime));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    errors.collect(ros.propertyValidator('instanceConnection', RosPrepayInstance_InstanceConnectionPropertyValidator)(properties.instanceConnection));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.sslEnabled && (typeof properties.sslEnabled) !== 'object') {
        errors.collect(ros.propertyValidator('sslEnabled', ros.validateAllowedValues)({
          data: properties.sslEnabled,
          allowedValues: ["Disable","Enable","Update"],
        }));
    }
    errors.collect(ros.propertyValidator('sslEnabled', ros.validateString)(properties.sslEnabled));
    if(properties.capacity && (typeof properties.capacity) !== 'object') {
        errors.collect(ros.propertyValidator('capacity', ros.validateAllowedValues)({
          data: properties.capacity,
          allowedValues: [1,2,4,8,16,32,64,128,256,512],
        }));
    }
    errors.collect(ros.propertyValidator('capacity', ros.validateNumber)(properties.capacity));
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
      BackupPolicy: rosPrepayInstanceBackupPolicyPropertyToRosTemplate(properties.backupPolicy),
      Capacity: ros.numberToRosTemplate(properties.capacity),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      EvictionPolicy: ros.stringToRosTemplate(properties.evictionPolicy),
      InstanceClass: ros.stringToRosTemplate(properties.instanceClass),
      InstanceConnection: rosPrepayInstanceInstanceConnectionPropertyToRosTemplate(properties.instanceConnection),
      InstanceMaintainTime: rosPrepayInstanceInstanceMaintainTimePropertyToRosTemplate(properties.instanceMaintainTime),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      Password: ros.stringToRosTemplate(properties.password),
      Period: ros.numberToRosTemplate(properties.period),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SSLEnabled: ros.stringToRosTemplate(properties.sslEnabled),
      Tags: ros.listMapper(rosPrepayInstanceTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VpcPasswordFree: ros.booleanToRosTemplate(properties.vpcPasswordFree),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::REDIS::PrepayInstance`
 */
export class RosPrepayInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::PrepayInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    public readonly attrConnectionDomain: ros.IResolvable;

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
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute Port: Port of created instance.
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupPolicy: Backup policy
     */
    public backupPolicy: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    public capacity: number | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
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
     * @Property instanceConnection: Instance connection message.
     */
    public instanceConnection: RosPrepayInstance.InstanceConnectionProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    public instanceMaintainTime: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

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
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrepayInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionDomain = this.getAtt('ConnectionDomain');
        this.attrInstanceClass = this.getAtt('InstanceClass');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupPolicy = props.backupPolicy;
        this.capacity = props.capacity;
        this.engineVersion = props.engineVersion;
        this.evictionPolicy = props.evictionPolicy;
        this.instanceClass = props.instanceClass;
        this.instanceConnection = props.instanceConnection;
        this.instanceMaintainTime = props.instanceMaintainTime;
        this.instanceName = props.instanceName;
        this.password = props.password;
        this.period = props.period;
        this.securityGroupId = props.securityGroupId;
        this.sslEnabled = props.sslEnabled;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vpcPasswordFree = props.vpcPasswordFree;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPolicy: this.backupPolicy,
            capacity: this.capacity,
            engineVersion: this.engineVersion,
            evictionPolicy: this.evictionPolicy,
            instanceClass: this.instanceClass,
            instanceConnection: this.instanceConnection,
            instanceMaintainTime: this.instanceMaintainTime,
            instanceName: this.instanceName,
            password: this.password,
            period: this.period,
            securityGroupId: this.securityGroupId,
            sslEnabled: this.sslEnabled,
            tags: this.tags,
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
         * @Property preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
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
      PreferredBackupPeriod: ros.stringToRosTemplate(properties.preferredBackupPeriod),
      PreferredBackupTime: ros.stringToRosTemplate(properties.preferredBackupTime),
      EnableBackupLog: ros.numberToRosTemplate(properties.enableBackupLog),
    };
}

export namespace RosPrepayInstance {
    /**
     * @stability external
     */
    export interface InstanceConnectionProperty {
        /**
         * @Property ipType: The network type of the new endpoint. Value values:
     * - Private: internal network.
     * - Public: public network.
         */
        readonly ipType?: string | ros.IResolvable;
        /**
         * @Property port: The service port of the instance. 
     * Valid values: 1024 to 65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property newConnectionString: The prefix of the new endpoint. 
     * The new endpoint of the ApsaraDB for Redis instance is in the <Prefix>.redis.rds.aliyuncs.com format. 
     * The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits. 
     * The prefix can be 8 to 64 characters in length.
         */
        readonly newConnectionString?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceConnectionProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceConnectionProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayInstance_InstanceConnectionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipType && (typeof properties.ipType) !== 'object') {
        errors.collect(ros.propertyValidator('ipType', ros.validateAllowedValues)({
          data: properties.ipType,
          allowedValues: ["Private","Public","Inner"],
        }));
    }
    errors.collect(ros.propertyValidator('ipType', ros.validateString)(properties.ipType));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1024,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.newConnectionString && (typeof properties.newConnectionString) !== 'object') {
        errors.collect(ros.propertyValidator('newConnectionString', ros.validateAllowedPattern)({
          data: properties.newConnectionString,
          reg: /^[a-z][a-z0-9-]{7,63}/
        }));
    }
    errors.collect(ros.propertyValidator('newConnectionString', ros.validateString)(properties.newConnectionString));
    return errors.wrap('supplied properties not correct for "InstanceConnectionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.InstanceConnection` resource
 *
 * @param properties - the TypeScript properties of a `InstanceConnectionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::REDIS::PrepayInstance.InstanceConnection` resource.
 */
// @ts-ignore TS6133
function rosPrepayInstanceInstanceConnectionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayInstance_InstanceConnectionPropertyValidator(properties).assertSuccess();
    return {
      IPType: ros.stringToRosTemplate(properties.ipType),
      Port: ros.numberToRosTemplate(properties.port),
      NewConnectionString: ros.stringToRosTemplate(properties.newConnectionString),
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
      MaintainEndTime: ros.stringToRosTemplate(properties.maintainEndTime),
      MaintainStartTime: ros.stringToRosTemplate(properties.maintainStartTime),
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
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::REDIS::Whitelist`
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
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      SecurityIps: ros.stringToRosTemplate(properties.securityIps),
      SecurityIpGroupAttribute: ros.stringToRosTemplate(properties.securityIpGroupAttribute),
      SecurityIpGroupName: ros.stringToRosTemplate(properties.securityIpGroupName),
    };
}

/**
 * A ROS template type:  `ALIYUN::REDIS::Whitelist`
 */
export class RosWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Whitelist";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::REDIS::Whitelist`.
     *
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
