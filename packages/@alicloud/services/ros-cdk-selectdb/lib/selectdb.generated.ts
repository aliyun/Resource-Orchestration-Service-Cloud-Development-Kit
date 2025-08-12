// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
 */
export interface RosDBInstanceProps {

    /**
     * @Property cacheSize: Reserve cache size.
     */
    readonly cacheSize: number | ros.IResolvable;

    /**
     * @Property chargeType: The paid type of instance.Value:
     * Postpaid: Postpaid (pay per quantity).
     * Prepaid: Prepaid (year and monthly).
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * @Property dbInstanceClass: The class of the DB instance.
     * Call DescribeAllDBInstanceClass API to check the latest class list
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database version.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC id.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * @Property connectionString: Database connection address.
     */
    readonly connectionString?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: Example Notes Information.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property engine: Database type, default value is selectdb.
     */
    readonly engine?: string | ros.IResolvable;

    /**
     * @Property period: Specify the prepaid cluster as annual or monthly type.Value description:
     * Year: Year-end type.
     * Month: Month type.
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityIpList: The default IP whitelist of the instance.
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosDBInstance.TagsProperty[];

    /**
     * @Property usedTime: Specifies the purchase duration of the prepaid instance.Value description:
     * When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral).
     * When Period is Month, the UsedTime value range is: 1~9 (integral).
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    readonly usedTime?: number | ros.IResolvable;
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
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["3.0","4.0"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: ["Year","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    if(properties.accountPassword && (typeof properties.accountPassword) !== 'object') {
        errors.collect(ros.propertyValidator('accountPassword', ros.validateAllowedPattern)({
          data: properties.accountPassword,
          reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=]).{8,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('cacheSize', ros.requiredValidator)(properties.cacheSize));
    if(properties.cacheSize && (typeof properties.cacheSize) !== 'object') {
        errors.collect(ros.propertyValidator('cacheSize', ros.validateRange)({
            data: properties.cacheSize,
            min: 100,
            max: 4000,
          }));
    }
    errors.collect(ros.propertyValidator('cacheSize', ros.validateNumber)(properties.cacheSize));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.securityIpList && (Array.isArray(properties.securityIpList) || (typeof properties.securityIpList) === 'string')) {
        errors.collect(ros.propertyValidator('securityIpList', ros.validateLength)({
            data: properties.securityIpList.length,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('securityIpList', ros.listValidator(ros.validateString))(properties.securityIpList));
    errors.collect(ros.propertyValidator('chargeType', ros.requiredValidator)(properties.chargeType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["Postpaid","Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.usedTime && (typeof properties.usedTime) !== 'object') {
        errors.collect(ros.propertyValidator('usedTime', ros.validateRange)({
            data: properties.usedTime,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('usedTime', ros.validateNumber)(properties.usedTime));
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDBInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SELECTDB::DBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SELECTDB::DBInstance` resource.
 */
// @ts-ignore TS6133
function rosDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'CacheSize': ros.numberToRosTemplate(properties.cacheSize),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'DBInstanceClass': ros.stringToRosTemplate(properties.dbInstanceClass),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'ConnectionString': ros.stringToRosTemplate(properties.connectionString),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'Period': ros.stringToRosTemplate(properties.period),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityIPList': ros.listMapper(ros.stringToRosTemplate)(properties.securityIpList),
      'Tags': ros.listMapper(rosDBInstanceTagsPropertyToRosTemplate)(properties.tags),
      'UsedTime': ros.numberToRosTemplate(properties.usedTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SELECTDB::DBInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SELECTDB::DBInstance";

    /**
     * @Attribute DBInstanceId: Instance ID.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute VpcConnectionString: The VPC connection string of the selectdb instance.
     */
    public readonly attrVpcConnectionString: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cacheSize: Reserve cache size.
     */
    public cacheSize: number | ros.IResolvable;

    /**
     * @Property chargeType: The paid type of instance.Value:
     * Postpaid: Postpaid (pay per quantity).
     * Prepaid: Prepaid (year and monthly).
     */
    public chargeType: string | ros.IResolvable;

    /**
     * @Property dbInstanceClass: The class of the DB instance.
     * Call DescribeAllDBInstanceClass API to check the latest class list
     */
    public dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database version.
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC id.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Switch ID.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability Zone ID.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.
     */
    public accountPassword: string | ros.IResolvable | undefined;

    /**
     * @Property connectionString: Database connection address.
     */
    public connectionString: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Example Notes Information.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property engine: Database type, default value is selectdb.
     */
    public engine: string | ros.IResolvable | undefined;

    /**
     * @Property period: Specify the prepaid cluster as annual or monthly type.Value description:
     * Year: Year-end type.
     * Month: Month type.
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The default IP whitelist of the instance.
     */
    public securityIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    public tags: RosDBInstance.TagsProperty[] | undefined;

    /**
     * @Property usedTime: Specifies the purchase duration of the prepaid instance.Value description:
     * When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral).
     * When Period is Month, the UsedTime value range is: 1~9 (integral).
     * Note This parameter takes effect and is required only if ChargeType is Prepaid.
     */
    public usedTime: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrVpcConnectionString = this.getAtt('VpcConnectionString');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cacheSize = props.cacheSize;
        this.chargeType = props.chargeType;
        this.dbInstanceClass = props.dbInstanceClass;
        this.engineVersion = props.engineVersion;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.accountPassword = props.accountPassword;
        this.connectionString = props.connectionString;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.engine = props.engine;
        this.period = props.period;
        this.resourceGroupId = props.resourceGroupId;
        this.securityIpList = props.securityIpList;
        this.tags = props.tags;
        this.usedTime = props.usedTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cacheSize: this.cacheSize,
            chargeType: this.chargeType,
            dbInstanceClass: this.dbInstanceClass,
            engineVersion: this.engineVersion,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            accountPassword: this.accountPassword,
            connectionString: this.connectionString,
            dbInstanceDescription: this.dbInstanceDescription,
            engine: this.engine,
            period: this.period,
            resourceGroupId: this.resourceGroupId,
            securityIpList: this.securityIpList,
            tags: this.tags,
            usedTime: this.usedTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
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
function RosDBInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SELECTDB::DBInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SELECTDB::DBInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
