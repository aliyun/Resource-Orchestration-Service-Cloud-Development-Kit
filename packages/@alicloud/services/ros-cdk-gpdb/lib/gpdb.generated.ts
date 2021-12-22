// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::GPDB::DBInstance`
 */
export interface RosDBInstanceProps {

    /**
     * @Property dbInstanceClass: The instance type.
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceGroupCount: The number of compute nodes in the instance.
     */
    readonly dbInstanceGroupCount: number | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 11,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.dbInstanceDescription && (Array.isArray(properties.dbInstanceDescription) || (typeof properties.dbInstanceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateLength)({
            data: properties.dbInstanceDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('dbInstanceGroupCount', ros.requiredValidator)(properties.dbInstanceGroupCount));
    if(properties.dbInstanceGroupCount && (typeof properties.dbInstanceGroupCount) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceGroupCount', ros.validateRange)({
            data: properties.dbInstanceGroupCount,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceGroupCount', ros.validateNumber)(properties.dbInstanceGroupCount));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::DBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::DBInstance` resource.
 */
// @ts-ignore TS6133
function rosDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceGroupCount: ros.numberToRosTemplate(properties.dbInstanceGroupCount),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      SecurityIPList: ros.stringToRosTemplate(properties.securityIpList),
      VPCId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GPDB::DBInstance`
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::DBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionString: The endpoint of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute OrderId: The order ID of the instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute Port: The port used to connect to the instance.
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: The instance type.
     */
    public dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceGroupCount: The number of compute nodes in the instance.
     */
    public dbInstanceGroupCount: number | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine.
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GPDB::DBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceGroupCount = props.dbInstanceGroupCount;
        this.engineVersion = props.engineVersion;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.payType = props.payType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.securityIpList = props.securityIpList;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceGroupCount: this.dbInstanceGroupCount,
            engineVersion: this.engineVersion,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            dbInstanceDescription: this.dbInstanceDescription,
            payType: this.payType,
            period: this.period,
            periodUnit: this.periodUnit,
            securityIpList: this.securityIpList,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::GPDB::ElasticDBInstance`
 */
export interface RosElasticDBInstanceProps {

    /**
     * @Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * @Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    readonly instanceSpec: string | ros.IResolvable;

    /**
     * @Property segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
     */
    readonly segNodeNum: number | ros.IResolvable;

    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     */
    readonly segStorageType: string | ros.IResolvable;

    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    readonly storageSize: number | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
     */
    readonly dbInstanceCategory?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
     */
    readonly encryptionKey?: string | ros.IResolvable;

    /**
     * @Property encryptionType: The type of the encryption. Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    readonly encryptionType?: string | ros.IResolvable;

    /**
     * @Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
     */
    readonly masterNodeNum?: number | ros.IResolvable;

    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosElasticDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosElasticDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosElasticDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.masterNodeNum && (typeof properties.masterNodeNum) !== 'object') {
        errors.collect(ros.propertyValidator('masterNodeNum', ros.validateRange)({
            data: properties.masterNodeNum,
            min: 1,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('masterNodeNum', ros.validateNumber)(properties.masterNodeNum));
    errors.collect(ros.propertyValidator('encryptionType', ros.validateString)(properties.encryptionType));
    errors.collect(ros.propertyValidator('instanceSpec', ros.requiredValidator)(properties.instanceSpec));
    errors.collect(ros.propertyValidator('instanceSpec', ros.validateString)(properties.instanceSpec));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('segNodeNum', ros.requiredValidator)(properties.segNodeNum));
    if(properties.segNodeNum && (typeof properties.segNodeNum) !== 'object') {
        errors.collect(ros.propertyValidator('segNodeNum', ros.validateRange)({
            data: properties.segNodeNum,
            min: 4,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('segNodeNum', ros.validateNumber)(properties.segNodeNum));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 11,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('segStorageType', ros.requiredValidator)(properties.segStorageType));
    errors.collect(ros.propertyValidator('segStorageType', ros.validateString)(properties.segStorageType));
    errors.collect(ros.propertyValidator('storageSize', ros.requiredValidator)(properties.storageSize));
    if(properties.storageSize && (typeof properties.storageSize) !== 'object') {
        errors.collect(ros.propertyValidator('storageSize', ros.validateRange)({
            data: properties.storageSize,
            min: 50,
            max: 4000,
          }));
    }
    errors.collect(ros.propertyValidator('storageSize', ros.validateNumber)(properties.storageSize));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbInstanceCategory', ros.validateString)(properties.dbInstanceCategory));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    if(properties.dbInstanceDescription && (Array.isArray(properties.dbInstanceDescription) || (typeof properties.dbInstanceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateLength)({
            data: properties.dbInstanceDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosElasticDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::ElasticDBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosElasticDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::ElasticDBInstance` resource.
 */
// @ts-ignore TS6133
function rosElasticDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosElasticDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      InstanceSpec: ros.stringToRosTemplate(properties.instanceSpec),
      SegNodeNum: ros.numberToRosTemplate(properties.segNodeNum),
      SegStorageType: ros.stringToRosTemplate(properties.segStorageType),
      StorageSize: ros.numberToRosTemplate(properties.storageSize),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      DBInstanceCategory: ros.stringToRosTemplate(properties.dbInstanceCategory),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      EncryptionKey: ros.stringToRosTemplate(properties.encryptionKey),
      EncryptionType: ros.stringToRosTemplate(properties.encryptionType),
      MasterNodeNum: ros.numberToRosTemplate(properties.masterNodeNum),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      SecurityIPList: ros.stringToRosTemplate(properties.securityIpList),
      VPCId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::GPDB::ElasticDBInstance`
 */
export class RosElasticDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::ElasticDBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionString: The endpoint of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute OrderId: The order ID of the instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute Port: The port used to connect to the instance.
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property engineVersion: The version of the database engine.
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    public instanceSpec: string | ros.IResolvable;

    /**
     * @Property segNodeNum: The number of segment nodes. Minimum is 4, max is 512, step is 4.
     */
    public segNodeNum: number | ros.IResolvable;

    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     */
    public segStorageType: string | ros.IResolvable;

    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    public storageSize: number | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability
     */
    public dbInstanceCategory: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
     */
    public encryptionKey: string | ros.IResolvable | undefined;

    /**
     * @Property encryptionType: The type of the encryption. Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    public encryptionType: string | ros.IResolvable | undefined;

    /**
     * @Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
     */
    public masterNodeNum: number | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::GPDB::ElasticDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosElasticDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosElasticDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.engineVersion = props.engineVersion;
        this.instanceSpec = props.instanceSpec;
        this.segNodeNum = props.segNodeNum;
        this.segStorageType = props.segStorageType;
        this.storageSize = props.storageSize;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.dbInstanceCategory = props.dbInstanceCategory;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.encryptionKey = props.encryptionKey;
        this.encryptionType = props.encryptionType;
        this.masterNodeNum = props.masterNodeNum;
        this.payType = props.payType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.securityIpList = props.securityIpList;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            engineVersion: this.engineVersion,
            instanceSpec: this.instanceSpec,
            segNodeNum: this.segNodeNum,
            segStorageType: this.segStorageType,
            storageSize: this.storageSize,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            dbInstanceCategory: this.dbInstanceCategory,
            dbInstanceDescription: this.dbInstanceDescription,
            encryptionKey: this.encryptionKey,
            encryptionType: this.encryptionType,
            masterNodeNum: this.masterNodeNum,
            payType: this.payType,
            period: this.period,
            periodUnit: this.periodUnit,
            securityIpList: this.securityIpList,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosElasticDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::GPDB::InstancePublicConnection`
 */
export interface RosInstancePublicConnectionProps {

    /**
     * @Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    readonly connectionStringPrefix: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property port: The port number of the instance.
     */
    readonly port: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancePublicConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancePublicConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePublicConnectionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.requiredValidator)(properties.connectionStringPrefix));
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    return errors.wrap('supplied properties not correct for "RosInstancePublicConnectionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::InstancePublicConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancePublicConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::InstancePublicConnection` resource.
 */
// @ts-ignore TS6133
function rosInstancePublicConnectionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePublicConnectionPropsValidator(properties).assertSuccess();
    }
    return {
      ConnectionStringPrefix: ros.stringToRosTemplate(properties.connectionStringPrefix),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      Port: ros.numberToRosTemplate(properties.port),
    };
}

/**
 * A ROS template type:  `ALIYUN::GPDB::InstancePublicConnection`
 */
export class RosInstancePublicConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::InstancePublicConnection";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionString: The connection string of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    public connectionStringPrefix: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property port: The port number of the instance.
     */
    public port: number | ros.IResolvable;

    /**
     * Create a new `ALIYUN::GPDB::InstancePublicConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancePublicConnectionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstancePublicConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.connectionStringPrefix = props.connectionStringPrefix;
        this.dbInstanceId = props.dbInstanceId;
        this.port = props.port;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            connectionStringPrefix: this.connectionStringPrefix,
            dbInstanceId: this.dbInstanceId,
            port: this.port,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePublicConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
