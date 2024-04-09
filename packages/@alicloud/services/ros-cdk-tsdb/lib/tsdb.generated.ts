// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosHiTSDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
 */
export interface RosHiTSDBInstanceProps {

    /**
     * @Property instanceClass: The type of the instance.
     */
    readonly instanceClass: string | ros.IResolvable;

    /**
     * @Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
     */
    readonly instanceStorage: number | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property diskCategory: The category of disk.
     */
    readonly diskCategory?: string | ros.IResolvable;

    /**
     * @Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property instanceAlias: The alias of the instance.
     */
    readonly instanceAlias?: string | ros.IResolvable;

    /**
     * @Property payType: The billing method. Valid values: 
     * - **prepay**: The prepay value indicates the subscription method.
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1\/24"]
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHiTSDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosHiTSDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosHiTSDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceStorage', ros.requiredValidator)(properties.instanceStorage));
    if(properties.instanceStorage && (typeof properties.instanceStorage) !== 'object') {
        errors.collect(ros.propertyValidator('instanceStorage', ros.validateRange)({
            data: properties.instanceStorage,
            min: 40,
            max: 32000,
          }));
    }
    errors.collect(ros.propertyValidator('instanceStorage', ros.validateNumber)(properties.instanceStorage));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceAlias', ros.validateString)(properties.instanceAlias));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('securityIpList', ros.listValidator(ros.validateString))(properties.securityIpList));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('diskCategory', ros.validateString)(properties.diskCategory));
    errors.collect(ros.propertyValidator('instanceClass', ros.requiredValidator)(properties.instanceClass));
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
          data: properties.duration,
          allowedValues: [1,2,3,4,5,6,7,8,9],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["POSTPAY","PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    return errors.wrap('supplied properties not correct for "RosHiTSDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::TSDB::HiTSDBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosHiTSDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::TSDB::HiTSDBInstance` resource.
 */
// @ts-ignore TS6133
function rosHiTSDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHiTSDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceClass: ros.stringToRosTemplate(properties.instanceClass),
      InstanceStorage: ros.numberToRosTemplate(properties.instanceStorage),
      VPCId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      DiskCategory: ros.stringToRosTemplate(properties.diskCategory),
      Duration: ros.numberToRosTemplate(properties.duration),
      InstanceAlias: ros.stringToRosTemplate(properties.instanceAlias),
      PayType: ros.stringToRosTemplate(properties.payType),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      SecurityIpList: ros.listMapper(ros.stringToRosTemplate)(properties.securityIpList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::TSDB::HiTSDBInstance`, which is used to create a Time Series Database (TSDB) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `HiTSDBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
 */
export class RosHiTSDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::TSDB::HiTSDBInstance";

    /**
     * @Attribute ConnectionString: Connection string of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute EngineType: Engine type of the instance.
     */
    public readonly attrEngineType: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute OrderId: Order id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: Public connection string of the instance.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute ReverseVpcIp: Reverse vpc ip of the instance.
     */
    public readonly attrReverseVpcIp: ros.IResolvable;

    /**
     * @Attribute ReverseVpcPort: Reverse vpc port of the instance.
     */
    public readonly attrReverseVpcPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceClass: The type of the instance.
     */
    public instanceClass: string | ros.IResolvable;

    /**
     * @Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
     */
    public instanceStorage: number | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property diskCategory: The category of disk.
     */
    public diskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property instanceAlias: The alias of the instance.
     */
    public instanceAlias: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method. Valid values: 
     * - **prepay**: The prepay value indicates the subscription method.
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1\/24"]
     */
    public securityIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHiTSDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHiTSDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrEngineType = this.getAtt('EngineType');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrReverseVpcIp = this.getAtt('ReverseVpcIp');
        this.attrReverseVpcPort = this.getAtt('ReverseVpcPort');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceClass = props.instanceClass;
        this.instanceStorage = props.instanceStorage;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.diskCategory = props.diskCategory;
        this.duration = props.duration;
        this.instanceAlias = props.instanceAlias;
        this.payType = props.payType;
        this.pricingCycle = props.pricingCycle;
        this.securityIpList = props.securityIpList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceClass: this.instanceClass,
            instanceStorage: this.instanceStorage,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            diskCategory: this.diskCategory,
            duration: this.duration,
            instanceAlias: this.instanceAlias,
            payType: this.payType,
            pricingCycle: this.pricingCycle,
            securityIpList: this.securityIpList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHiTSDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInfluxDBDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
 */
export interface RosInfluxDBDatabaseProps {

    /**
     * @Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    readonly dbName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInfluxDBDatabaseProps`
 *
 * @param properties - the TypeScript properties of a `RosInfluxDBDatabaseProps`
 *
 * @returns the result of the validation.
 */
function RosInfluxDBDatabasePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    if(properties.dbName && (Array.isArray(properties.dbName) || (typeof properties.dbName) === 'string')) {
        errors.collect(ros.propertyValidator('dbName', ros.validateLength)({
            data: properties.dbName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    return errors.wrap('supplied properties not correct for "RosInfluxDBDatabaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::TSDB::InfluxDBDatabase` resource
 *
 * @param properties - the TypeScript properties of a `RosInfluxDBDatabaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::TSDB::InfluxDBDatabase` resource.
 */
// @ts-ignore TS6133
function rosInfluxDBDatabasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInfluxDBDatabasePropsValidator(properties).assertSuccess();
    }
    return {
      DBName: ros.stringToRosTemplate(properties.dbName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::TSDB::InfluxDBDatabase`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InfluxDBDatabase` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
 */
export class RosInfluxDBDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::TSDB::InfluxDBDatabase";

    /**
     * @Attribute DBName: The name of database.
     */
    public readonly attrDbName: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    public dbName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInfluxDBDatabaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInfluxDBDatabase.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbName = this.getAtt('DBName');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbName = props.dbName;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbName: this.dbName,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInfluxDBDatabasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInfluxDBUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
 */
export interface RosInfluxDBUserProps {

    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    readonly userName: string | ros.IResolvable;

    /**
     * @Property userType: The type of user. Valid values:
     * normal: normal user
     * admin: administrator user.
     */
    readonly userType: string | ros.IResolvable;

    /**
     * @Property databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
     */
    readonly databasePermissions?: Array<RosInfluxDBUser.DatabasePermissionsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInfluxDBUserProps`
 *
 * @param properties - the TypeScript properties of a `RosInfluxDBUserProps`
 *
 * @returns the result of the validation.
 */
function RosInfluxDBUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    if(properties.userName && (Array.isArray(properties.userName) || (typeof properties.userName) === 'string')) {
        errors.collect(ros.propertyValidator('userName', ros.validateLength)({
            data: properties.userName.length,
            min: 1,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('databasePermissions', ros.listValidator(RosInfluxDBUser_DatabasePermissionsPropertyValidator))(properties.databasePermissions));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('userType', ros.requiredValidator)(properties.userType));
    if(properties.userType && (typeof properties.userType) !== 'object') {
        errors.collect(ros.propertyValidator('userType', ros.validateAllowedValues)({
          data: properties.userType,
          allowedValues: ["normal","admin"],
        }));
    }
    errors.collect(ros.propertyValidator('userType', ros.validateString)(properties.userType));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    if(properties.password && (Array.isArray(properties.password) || (typeof properties.password) === 'string')) {
        errors.collect(ros.propertyValidator('password', ros.validateLength)({
            data: properties.password.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInfluxDBUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::TSDB::InfluxDBUser` resource
 *
 * @param properties - the TypeScript properties of a `RosInfluxDBUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::TSDB::InfluxDBUser` resource.
 */
// @ts-ignore TS6133
function rosInfluxDBUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInfluxDBUserPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Password: ros.stringToRosTemplate(properties.password),
      UserName: ros.stringToRosTemplate(properties.userName),
      UserType: ros.stringToRosTemplate(properties.userType),
      DatabasePermissions: ros.listMapper(rosInfluxDBUserDatabasePermissionsPropertyToRosTemplate)(properties.databasePermissions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::TSDB::InfluxDBUser`, which is used to create a Time Series Database (TSDB) database account.
 * @Note This class does not contain additional functions, so it is recommended to use the `InfluxDBUser` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
 */
export class RosInfluxDBUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::TSDB::InfluxDBUser";

    /**
     * @Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute UserName: The name of user.
     */
    public readonly attrUserName: ros.IResolvable;

    /**
     * @Attribute UserType: The type of user.
     */
    public readonly attrUserType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=
     */
    public password: string | ros.IResolvable;

    /**
     * @Property userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    public userName: string | ros.IResolvable;

    /**
     * @Property userType: The type of user. Valid values:
     * normal: normal user
     * admin: administrator user.
     */
    public userType: string | ros.IResolvable;

    /**
     * @Property databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
     */
    public databasePermissions: Array<RosInfluxDBUser.DatabasePermissionsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInfluxDBUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInfluxDBUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrUserName = this.getAtt('UserName');
        this.attrUserType = this.getAtt('UserType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.password = props.password;
        this.userName = props.userName;
        this.userType = props.userType;
        this.databasePermissions = props.databasePermissions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            password: this.password,
            userName: this.userName,
            userType: this.userType,
            databasePermissions: this.databasePermissions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInfluxDBUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInfluxDBUser {
    /**
     * @stability external
     */
    export interface DatabasePermissionsProperty {
        /**
         * @Property permission: The database privilege the user has. Valid values: read, write, all.
         */
        readonly permission: string | ros.IResolvable;
        /**
         * @Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         */
        readonly dbName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DatabasePermissionsProperty`
 *
 * @param properties - the TypeScript properties of a `DatabasePermissionsProperty`
 *
 * @returns the result of the validation.
 */
function RosInfluxDBUser_DatabasePermissionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('permission', ros.requiredValidator)(properties.permission));
    if(properties.permission && (typeof properties.permission) !== 'object') {
        errors.collect(ros.propertyValidator('permission', ros.validateAllowedValues)({
          data: properties.permission,
          allowedValues: ["read","write","all"],
        }));
    }
    errors.collect(ros.propertyValidator('permission', ros.validateString)(properties.permission));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    if(properties.dbName && (Array.isArray(properties.dbName) || (typeof properties.dbName) === 'string')) {
        errors.collect(ros.propertyValidator('dbName', ros.validateLength)({
            data: properties.dbName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    return errors.wrap('supplied properties not correct for "DatabasePermissionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::TSDB::InfluxDBUser.DatabasePermissions` resource
 *
 * @param properties - the TypeScript properties of a `DatabasePermissionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::TSDB::InfluxDBUser.DatabasePermissions` resource.
 */
// @ts-ignore TS6133
function rosInfluxDBUserDatabasePermissionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInfluxDBUser_DatabasePermissionsPropertyValidator(properties).assertSuccess();
    return {
      Permission: ros.stringToRosTemplate(properties.permission),
      DBName: ros.stringToRosTemplate(properties.dbName),
    };
}
