// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::DRDS::DrdsDB`
 */
export interface RosDrdsDBProps {

    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    readonly drdsInstanceId: string;

    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    readonly accountName?: string;

    /**
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    readonly dbInstanceIsCreating?: boolean | ros.IResolvable;

    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    readonly dbInstType?: string;

    /**
     * @Property dbName: Database Name
     */
    readonly dbName?: string;

    /**
     * @Property encode: Encoding used by the database
     */
    readonly encode?: string;

    /**
     * @Property instDbName:
     */
    readonly instDbName?: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property password: The logon password of the database instance.
     */
    readonly password?: string;

    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
     */
    readonly rdsInstance?: string[];

    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    readonly type?: string;
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
      DrdsInstanceId: ros.stringToRosTemplate(properties.drdsInstanceId),
      AccountName: ros.stringToRosTemplate(properties.accountName),
      DbInstanceIsCreating: ros.booleanToRosTemplate(properties.dbInstanceIsCreating),
      DbInstType: ros.stringToRosTemplate(properties.dbInstType),
      DbName: ros.stringToRosTemplate(properties.dbName),
      Encode: ros.stringToRosTemplate(properties.encode),
      InstDbName: ros.listMapper(rosDrdsDBInstDbNamePropertyToRosTemplate)(properties.instDbName),
      Password: ros.stringToRosTemplate(properties.password),
      RdsInstance: ros.listMapper(ros.stringToRosTemplate)(properties.rdsInstance),
      Type: ros.stringToRosTemplate(properties.type),
    };
}

/**
 * A ROS template type:  `ALIYUN::DRDS::DrdsDB`
 */
export class RosDrdsDB extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsDB";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property drdsInstanceId: DRDS instance ID
     */
    public drdsInstanceId: string;

    /**
     * @Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
     */
    public accountName: string | undefined;

    /**
     * @Property dbInstanceIsCreating: Check whether the RDS instance is being created.
     */
    public dbInstanceIsCreating: boolean | ros.IResolvable | undefined;

    /**
     * @Property dbInstType: The type of the attached storage. Valid values:
     * RDS or POLARDB
     */
    public dbInstType: string | undefined;

    /**
     * @Property dbName: Database Name
     */
    public dbName: string | undefined;

    /**
     * @Property encode: Encoding used by the database
     */
    public encode: string | undefined;

    /**
     * @Property instDbName:
     */
    public instDbName: Array<RosDrdsDB.InstDbNameProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property password: The logon password of the database instance.
     */
    public password: string | undefined;

    /**
     * @Property rdsInstance: This property is required only for vertical partitioning.
     */
    public rdsInstance: string[] | undefined;

    /**
     * @Property type: Database Sharding method. For more information, see scalability principle. Valid values:
     * HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
     * and table sharding.
     * VERTICAL: indicates VERTICAL partitioning.
     */
    public type: string | undefined;

    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     *
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
        readonly shardDbName: string[];
        /**
         * @Property dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
         */
        readonly dbInstanceId: string;
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
      ShardDbName: ros.listMapper(ros.stringToRosTemplate)(properties.shardDbName),
      DbInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
    };
}

/**
 * Properties for defining a `ALIYUN::DRDS::DrdsInstance`
 */
export interface RosDrdsInstanceProps {

    /**
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    readonly description: string;

    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    readonly instanceSeries: string;

    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    readonly payType: string;

    /**
     * @Property quantity: Purchase quantity
     */
    readonly quantity: number;

    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    readonly specification: string;

    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    readonly type: string;

    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    readonly zoneId: string;

    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    readonly duration?: number;

    /**
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;

    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    readonly mySqlVersion?: string;

    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    readonly pricingCycle?: string;

    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vpcId?: string;

    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vswitchId?: string;
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
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["year","month"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('instanceSeries', ros.requiredValidator)(properties.instanceSeries));
    errors.collect(ros.propertyValidator('instanceSeries', ros.validateString)(properties.instanceSeries));
    errors.collect(ros.propertyValidator('quantity', ros.requiredValidator)(properties.quantity));
    if(properties.quantity && (typeof properties.quantity) !== 'object') {
        errors.collect(ros.propertyValidator('quantity', ros.validateRange)({
            data: properties.quantity,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
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
      Description: ros.stringToRosTemplate(properties.description),
      InstanceSeries: ros.stringToRosTemplate(properties.instanceSeries),
      PayType: ros.stringToRosTemplate(properties.payType),
      Quantity: ros.numberToRosTemplate(properties.quantity),
      Specification: ros.stringToRosTemplate(properties.specification),
      Type: ros.stringToRosTemplate(properties.type),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      Duration: ros.numberToRosTemplate(properties.duration),
      IsAutoRenew: ros.booleanToRosTemplate(properties.isAutoRenew),
      MySQLVersion: ros.stringToRosTemplate(properties.mySqlVersion),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VswitchId: ros.stringToRosTemplate(properties.vswitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::DRDS::DrdsInstance`
 */
export class RosDrdsInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DRDS::DrdsInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DrdsInstanceId: instance id
     */
    public readonly attrDrdsInstanceId: any;

    /**
     * @Attribute InternetEndpoint: Public endpoint
     */
    public readonly attrInternetEndpoint: any;

    /**
     * @Attribute IntranetEndpoint: VPC endpoint
     */
    public readonly attrIntranetEndpoint: any;

    /**
     * @Attribute OrderId: order number
     */
    public readonly attrOrderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Description of the DRDS instance, 2-128 characters
     */
    public description: string;

    /**
     * @Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    public instanceSeries: string;

    /**
     * @Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    public payType: string;

    /**
     * @Property quantity: Purchase quantity
     */
    public quantity: number;

    /**
     * @Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    public specification: string;

    /**
     * @Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    public type: string;

    /**
     * @Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    public zoneId: string;

    /**
     * @Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    public duration: number | undefined;

    /**
     * @Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    public isAutoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    public mySqlVersion: string | undefined;

    /**
     * @Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    public pricingCycle: string | undefined;

    /**
     * @Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    public vpcId: string | undefined;

    /**
     * @Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    public vswitchId: string | undefined;

    /**
     * Create a new `ALIYUN::DRDS::DrdsInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDrdsInstanceId = ros.Token.asString(this.getAtt('DrdsInstanceId'));
        this.attrInternetEndpoint = ros.Token.asString(this.getAtt('InternetEndpoint'));
        this.attrIntranetEndpoint = ros.Token.asString(this.getAtt('IntranetEndpoint'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.instanceSeries = props.instanceSeries;
        this.payType = props.payType;
        this.quantity = props.quantity;
        this.specification = props.specification;
        this.type = props.type;
        this.zoneId = props.zoneId;
        this.duration = props.duration;
        this.isAutoRenew = props.isAutoRenew;
        this.mySqlVersion = props.mySqlVersion;
        this.pricingCycle = props.pricingCycle;
        this.vpcId = props.vpcId;
        this.vswitchId = props.vswitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            instanceSeries: this.instanceSeries,
            payType: this.payType,
            quantity: this.quantity,
            specification: this.specification,
            type: this.type,
            zoneId: this.zoneId,
            duration: this.duration,
            isAutoRenew: this.isAutoRenew,
            mySqlVersion: this.mySqlVersion,
            pricingCycle: this.pricingCycle,
            vpcId: this.vpcId,
            vswitchId: this.vswitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
