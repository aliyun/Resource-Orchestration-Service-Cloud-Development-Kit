// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
 */
export interface RosAccountProps {

    /**
     * @Property dbPrivileges: Database permission information.
     */
    readonly dbPrivileges: Array<RosAccount.DbPrivilegesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property drdsAccountName: The name of the account.
     */
    readonly drdsAccountName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property password: The password of the account.
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly description?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dbPrivileges', ros.requiredValidator)(properties.dbPrivileges));
    if(properties.dbPrivileges && (Array.isArray(properties.dbPrivileges) || (typeof properties.dbPrivileges) === 'string')) {
        errors.collect(ros.propertyValidator('dbPrivileges', ros.validateLength)({
            data: properties.dbPrivileges.length,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('dbPrivileges', ros.listValidator(RosAccount_DbPrivilegesPropertyValidator))(properties.dbPrivileges));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('drdsAccountName', ros.requiredValidator)(properties.drdsAccountName));
    errors.collect(ros.propertyValidator('drdsAccountName', ros.validateString)(properties.drdsAccountName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DRDS::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DRDS::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'DbPrivileges': ros.listMapper(rosAccountDbPrivilegesPropertyToRosTemplate)(properties.dbPrivileges),
      'DrdsAccountName': ros.stringToRosTemplate(properties.drdsAccountName),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Password': ros.stringToRosTemplate(properties.password),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DRDS::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::Account";

    /**
     * @Attribute AccountType: Account type.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * @Attribute DbPrivileges: Database permission information.
     */
    public readonly attrDbPrivileges: ros.IResolvable;

    /**
     * @Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DrdsAccountName: The name of the account.
     */
    public readonly attrDrdsAccountName: ros.IResolvable;

    /**
     * @Attribute Host: You can access the IP address of the database. <note>**%** indicates that any IP address can be accessed.
     */
    public readonly attrHost: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbPrivileges: Database permission information.
     */
    public dbPrivileges: Array<RosAccount.DbPrivilegesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property drdsAccountName: The name of the account.
     */
    public drdsAccountName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property password: The password of the account.
     */
    public password: string | ros.IResolvable;

    /**
     * @Property description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountType = this.getAtt('AccountType');
        this.attrDbPrivileges = this.getAtt('DbPrivileges');
        this.attrDescription = this.getAtt('Description');
        this.attrDrdsAccountName = this.getAtt('DrdsAccountName');
        this.attrHost = this.getAtt('Host');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbPrivileges = props.dbPrivileges;
        this.drdsAccountName = props.drdsAccountName;
        this.instanceId = props.instanceId;
        this.password = props.password;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbPrivileges: this.dbPrivileges,
            drdsAccountName: this.drdsAccountName,
            instanceId: this.instanceId,
            password: this.password,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAccount {
    /**
     * @stability external
     */
    export interface DbPrivilegesProperty {
        /**
         * @Property dbName: The name of the database.
         */
        readonly dbName: string | ros.IResolvable;
        /**
         * @Property privilege: Account permissions.
     * - **R**: read permission.
     * - **W**: write permission.
     * - **DDL**: the permission to perform DDL operations.
     * - **DML**: the permission to perform DML operations.
         */
        readonly privilege: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DbPrivilegesProperty`
 *
 * @param properties - the TypeScript properties of a `DbPrivilegesProperty`
 *
 * @returns the result of the validation.
 */
function RosAccount_DbPrivilegesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('privilege', ros.requiredValidator)(properties.privilege));
    if(properties.privilege && (typeof properties.privilege) !== 'object') {
        errors.collect(ros.propertyValidator('privilege', ros.validateAllowedValues)({
          data: properties.privilege,
          allowedValues: ["R","W","DDL","DML"],
        }));
    }
    errors.collect(ros.propertyValidator('privilege', ros.validateString)(properties.privilege));
    return errors.wrap('supplied properties not correct for "DbPrivilegesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DRDS::Account.DbPrivileges` resource
 *
 * @param properties - the TypeScript properties of a `DbPrivilegesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DRDS::Account.DbPrivileges` resource.
 */
// @ts-ignore TS6133
function rosAccountDbPrivilegesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAccount_DbPrivilegesPropertyValidator(properties).assertSuccess();
    return {
      'DbName': ros.stringToRosTemplate(properties.dbName),
      'Privilege': ros.stringToRosTemplate(properties.privilege),
    };
}

/**
 * Properties for defining a `RosDrdsDB`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
 */
export interface RosDrdsDBProps {

    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    readonly drdsInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    readonly dbInstanceIsCreating?: boolean | ros.IResolvable;

    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    readonly dbInstType?: string | ros.IResolvable;

    /**
     * @Property dbName: Database Name
     */
    readonly dbName?: string | ros.IResolvable;

    /**
     * @Property encode: Encoding used by the database
     */
    readonly encode?: string | ros.IResolvable;

    /**
     * @Property instDbName:
     */
    readonly instDbName?: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property password: The logon password of the database instance.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
     */
    readonly rdsInstance?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsDBProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsDBPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.dbInstType && (typeof properties.dbInstType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstType', ros.validateAllowedValues)({
          data: properties.dbInstType,
          allowedValues: ["RDS","POLARDB"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstType', ros.validateString)(properties.dbInstType));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["HORIZONTAL","VERTICAL"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('drdsInstanceId', ros.requiredValidator)(properties.drdsInstanceId));
    errors.collect(ros.propertyValidator('drdsInstanceId', ros.validateString)(properties.drdsInstanceId));
    if(properties.rdsInstance && (Array.isArray(properties.rdsInstance) || (typeof properties.rdsInstance) === 'string')) {
        errors.collect(ros.propertyValidator('rdsInstance', ros.validateLength)({
            data: properties.rdsInstance.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('rdsInstance', ros.listValidator(ros.validateString))(properties.rdsInstance));
    errors.collect(ros.propertyValidator('dbInstanceIsCreating', ros.validateBoolean)(properties.dbInstanceIsCreating));
    if(properties.instDbName && (Array.isArray(properties.instDbName) || (typeof properties.instDbName) === 'string')) {
        errors.collect(ros.propertyValidator('instDbName', ros.validateLength)({
            data: properties.instDbName.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('instDbName', ros.listValidator(RosDrdsDB_InstDbNamePropertyValidator))(properties.instDbName));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('encode', ros.validateString)(properties.encode));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosDrdsDBProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsDB` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsDB` resource.
 */
// @ts-ignore TS6133
function rosDrdsDBPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsDBPropsValidator(properties).assertSuccess();
    }
    return {
      'DrdsInstanceId': ros.stringToRosTemplate(properties.drdsInstanceId),
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'DbInstanceIsCreating': ros.booleanToRosTemplate(properties.dbInstanceIsCreating),
      'DbInstType': ros.stringToRosTemplate(properties.dbInstType),
      'DbName': ros.stringToRosTemplate(properties.dbName),
      'Encode': ros.stringToRosTemplate(properties.encode),
      'InstDbName': ros.listMapper(rosDrdsDBInstDbNamePropertyToRosTemplate)(properties.instDbName),
      'Password': ros.stringToRosTemplate(properties.password),
      'RdsInstance': ros.listMapper(ros.stringToRosTemplate)(properties.rdsInstance),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DRDS::DrdsDB`, which is used to create a Distributed Relational Database Service (DRDS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsDB` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
 */
export class RosDrdsDB extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsDB";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    public drdsInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    public accountName: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    public dbInstanceIsCreating: boolean | ros.IResolvable | undefined;

    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    public dbInstType: string | ros.IResolvable | undefined;

    /**
     * @Property dbName: Database Name
     */
    public dbName: string | ros.IResolvable | undefined;

    /**
     * @Property encode: Encoding used by the database
     */
    public encode: string | ros.IResolvable | undefined;

    /**
     * @Property instDbName:
     */
    public instDbName: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property password: The logon password of the database instance.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
     */
    public rdsInstance: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsDB.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.drdsInstanceId = props.drdsInstanceId;
        this.accountName = props.accountName;
        this.dbInstanceIsCreating = props.dbInstanceIsCreating;
        this.dbInstType = props.dbInstType;
        this.dbName = props.dbName;
        this.encode = props.encode;
        this.instDbName = props.instDbName;
        this.password = props.password;
        this.rdsInstance = props.rdsInstance;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            drdsInstanceId: this.drdsInstanceId,
            accountName: this.accountName,
            dbInstanceIsCreating: this.dbInstanceIsCreating,
            dbInstType: this.dbInstType,
            dbName: this.dbName,
            encode: this.encode,
            instDbName: this.instDbName,
            password: this.password,
            rdsInstance: this.rdsInstance,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsDBPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDrdsDB {
    /**
     * @stability external
     */
    export interface InstDbNameProperty {
        /**
         * @Property shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
         */
        readonly shardDbName: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
         */
        readonly dbInstanceId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstDbNameProperty`
 *
 * @param properties - the TypeScript properties of a `InstDbNameProperty`
 *
 * @returns the result of the validation.
 */
function RosDrdsDB_InstDbNamePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('shardDbName', ros.requiredValidator)(properties.shardDbName));
    if(properties.shardDbName && (Array.isArray(properties.shardDbName) || (typeof properties.shardDbName) === 'string')) {
        errors.collect(ros.propertyValidator('shardDbName', ros.validateLength)({
            data: properties.shardDbName.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('shardDbName', ros.listValidator(ros.validateString))(properties.shardDbName));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    return errors.wrap('supplied properties not correct for "InstDbNameProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsDB.InstDbName` resource
 *
 * @param properties - the TypeScript properties of a `InstDbNameProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsDB.InstDbName` resource.
 */
// @ts-ignore TS6133
function rosDrdsDBInstDbNamePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDrdsDB_InstDbNamePropertyValidator(properties).assertSuccess();
    return {
      'ShardDbName': ros.listMapper(ros.stringToRosTemplate)(properties.shardDbName),
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
    };
}

/**
 * Properties for defining a `RosDrdsInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
export interface RosDrdsInstanceProps {

    /**
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    readonly instanceSeries: string | ros.IResolvable;

    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    readonly specification: string | ros.IResolvable;

    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    readonly mySqlVersion?: string | ros.IResolvable;

    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDrdsInstance.TagsProperty[];

    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vswitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["year","month","Year","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('instanceSeries', ros.requiredValidator)(properties.instanceSeries));
    errors.collect(ros.propertyValidator('instanceSeries', ros.validateString)(properties.instanceSeries));
    errors.collect(ros.propertyValidator('specification', ros.requiredValidator)(properties.specification));
    errors.collect(ros.propertyValidator('specification', ros.validateString)(properties.specification));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateRange)({
            data: properties.duration,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["drdsPost","drdsPre"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('vswitchId', ros.validateString)(properties.vswitchId));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["0","1","PRIVATE","PUBLIC"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('mySqlVersion', ros.validateString)(properties.mySqlVersion));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('isAutoRenew', ros.validateBoolean)(properties.isAutoRenew));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDrdsInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDrdsInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsInstance` resource.
 */
// @ts-ignore TS6133
function rosDrdsInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'InstanceSeries': ros.stringToRosTemplate(properties.instanceSeries),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Specification': ros.stringToRosTemplate(properties.specification),
      'Type': ros.stringToRosTemplate(properties.type),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'Duration': ros.numberToRosTemplate(properties.duration),
      'IsAutoRenew': ros.booleanToRosTemplate(properties.isAutoRenew),
      'MySQLVersion': ros.stringToRosTemplate(properties.mySqlVersion),
      'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosDrdsInstanceTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VswitchId': ros.stringToRosTemplate(properties.vswitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DRDS::DrdsInstance`, which is used to create a PolarDB-X 1.0 instance of specified instance specifications.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
export class RosDrdsInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsInstance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute DrdsInstanceId: instance id
     */
    public readonly attrDrdsInstanceId: ros.IResolvable;

    /**
     * @Attribute InternetEndpoint: Public endpoint
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * @Attribute IntranetEndpoint: VPC endpoint
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * @Attribute OrderId: order number
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    public description: string | ros.IResolvable;

    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    public instanceSeries: string | ros.IResolvable;

    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    public specification: string | ros.IResolvable;

    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    public type: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    public isAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    public mySqlVersion: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDrdsInstance.TagsProperty[] | undefined;

    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    public vswitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrDrdsInstanceId = this.getAtt('DrdsInstanceId');
        this.attrInternetEndpoint = this.getAtt('InternetEndpoint');
        this.attrIntranetEndpoint = this.getAtt('IntranetEndpoint');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.instanceSeries = props.instanceSeries;
        this.payType = props.payType;
        this.specification = props.specification;
        this.type = props.type;
        this.zoneId = props.zoneId;
        this.duration = props.duration;
        this.isAutoRenew = props.isAutoRenew;
        this.mySqlVersion = props.mySqlVersion;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vswitchId = props.vswitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            instanceSeries: this.instanceSeries,
            payType: this.payType,
            specification: this.specification,
            type: this.type,
            zoneId: this.zoneId,
            duration: this.duration,
            isAutoRenew: this.isAutoRenew,
            mySqlVersion: this.mySqlVersion,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            vpcId: this.vpcId,
            vswitchId: this.vswitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDrdsInstance {
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
function RosDrdsInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DRDS::DrdsInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosDrdsInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDrdsInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
