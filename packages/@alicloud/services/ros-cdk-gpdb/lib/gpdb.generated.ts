// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: The name of the privileged account.
     * The name can contain lowercase letters, digits, and underscores (_).
     * The name must start with a lowercase letter and end with a lowercase letter or a digit.
     * The name cannot start with gp.
     * The name must be 2 to 16 characters in length.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the privileged account.
     * The password must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * Special characters include ! @ # $ % ^ & * ( ) _ + - =
     * The password must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     * Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
     * region, including instance IDs.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the privileged account.
     */
    readonly accountDescription?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    if(properties.accountPassword && (typeof properties.accountPassword) !== 'object') {
        errors.collect(ros.propertyValidator('accountPassword', ros.validateAllowedPattern)({
          data: properties.accountPassword,
          reg: /^(?=.*[a-zA-Z])(?=.*[a-z0-9])(?=.*[a-z!@#$%^&*()_+=-])(?=.*[A-Z0-9])(?=.*[A-Z!@#$%^&*()_+=-])(?=.*[0-9!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,32}$|^$/
        }));
    }
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    if(properties.accountName && (typeof properties.accountName) !== 'object') {
        errors.collect(ros.propertyValidator('accountName', ros.validateAllowedPattern)({
          data: properties.accountName,
          reg: /^(?!root$)(?!gp)[a-z][a-z0-9_]{0,14}[a-z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::Account` resource.
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
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'AccountDescription': ros.stringToRosTemplate(properties.accountDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::Account";

    /**
     * @Attribute AccountName: The name of the account.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the privileged account.
     * The name can contain lowercase letters, digits, and underscores (_).
     * The name must start with a lowercase letter and end with a lowercase letter or a digit.
     * The name cannot start with gp.
     * The name must be 2 to 16 characters in length.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the privileged account.
     * The password must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * Special characters include ! @ # $ % ^ & * ( ) _ + - =
     * The password must be 8 to 32 characters in length.
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     * Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
     * region, including instance IDs.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the privileged account.
     */
    public accountDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountName = this.getAtt('AccountName');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.dbInstanceId = props.dbInstanceId;
        this.accountDescription = props.accountDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            dbInstanceId: this.dbInstanceId,
            accountDescription: this.accountDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
 */
export interface RosDBInstanceProps {

    /**
     * @Property engineVersion: The version of the database engine. For example: 6.0、7.0
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
     * @Property aiNodeSpecInfos: AI node spec infos.
     */
    readonly aiNodeSpecInfos?: Array<RosDBInstance.AINodeSpecInfosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property createSampleData: Whether to load the sample data set after the instance is created. The value can be:
     * true: load the sample dataset.
     * false: not to load the sample dataset
     */
    readonly createSampleData?: boolean | ros.IResolvable;

    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    readonly dbInstanceCategory?: string | ros.IResolvable;

    /**
     * @Property dbInstanceClass: The instance type.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceGroupCount: The number of compute nodes in the instance.
     * The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
     */
    readonly dbInstanceGroupCount?: number | ros.IResolvable;

    /**
     * @Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    readonly dbInstanceMode?: string | ros.IResolvable;

    /**
     * @Property deployMode: The deployment mode of the instance.
     */
    readonly deployMode?: string | ros.IResolvable;

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
     * @Property idleTime: Idle release wait time. That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
     */
    readonly idleTime?: number | ros.IResolvable;

    /**
     * @Property instanceSpec: The specification of segment nodes.
     * - When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.
     * - When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.
     * - When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
     * This parameter must be passed to create a storage elastic mode instance and a serverless version instance.
     */
    readonly instanceSpec?: string | ros.IResolvable;

    /**
     * @Property masterCu: Master resources. Default is 8.
     */
    readonly masterCu?: number | ros.IResolvable;

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
     * @Property periodUnit: Unit of subscription period, it could be Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property privateIpAddress: Private IP address.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * @Property prodType: Prod type. The value can be: standard, cost-effective. The default value is standard.
     */
    readonly prodType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * @Property segDiskPerformanceLevel: Seg disk performance level. The value can be:
     * pl0、pl1 and pl2
     */
    readonly segDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property segNodeNum: Calculate the number of nodes. The value can be:
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.
     * - When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.
     */
    readonly segNodeNum?: number | ros.IResolvable;

    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     * This parameter must be passed in to create a storage elastic mode instance.
     * Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
     */
    readonly segStorageType?: string | ros.IResolvable;

    /**
     * @Property serverlessMode: Mode of the Serverless instance. The value can be:
     * Manual: manual scheduling is the default value.
     * Auto: indicates automatic scheduling.
     */
    readonly serverlessMode?: string | ros.IResolvable;

    /**
     * @Property serverlessResource: Computing resource threshold. The value ranges from 8 to 32. The step length is 8.
     * The unit is ACU. The default value is 32.
     */
    readonly serverlessResource?: number | ros.IResolvable;

    /**
     * @Property standbyVSwitchId: The standby VSwitch ID of the instance.
     */
    readonly standbyVSwitchId?: string | ros.IResolvable;

    /**
     * @Property standbyZoneId: The standby zone ID of the instance.
     */
    readonly standbyZoneId?: string | ros.IResolvable;

    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    readonly storageSize?: number | ros.IResolvable;

    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    readonly tags?: RosDBInstance.TagsProperty[];

    /**
     * @Property vectorConfigurationStatus: the status of vector configuration. The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
     */
    readonly vectorConfigurationStatus?: string | ros.IResolvable;

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
    if(properties.masterNodeNum && (typeof properties.masterNodeNum) !== 'object') {
        errors.collect(ros.propertyValidator('masterNodeNum', ros.validateRange)({
            data: properties.masterNodeNum,
            min: 1,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('masterNodeNum', ros.validateNumber)(properties.masterNodeNum));
    errors.collect(ros.propertyValidator('standbyZoneId', ros.validateString)(properties.standbyZoneId));
    errors.collect(ros.propertyValidator('instanceSpec', ros.validateString)(properties.instanceSpec));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.idleTime && (typeof properties.idleTime) !== 'object') {
        errors.collect(ros.propertyValidator('idleTime', ros.validateRange)({
            data: properties.idleTime,
            min: 60,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('idleTime', ros.validateNumber)(properties.idleTime));
    if(properties.aiNodeSpecInfos && (Array.isArray(properties.aiNodeSpecInfos) || (typeof properties.aiNodeSpecInfos) === 'string')) {
        errors.collect(ros.propertyValidator('aiNodeSpecInfos', ros.validateLength)({
            data: properties.aiNodeSpecInfos.length,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('aiNodeSpecInfos', ros.listValidator(RosDBInstance_AINodeSpecInfosPropertyValidator))(properties.aiNodeSpecInfos));
    if(properties.segNodeNum && (typeof properties.segNodeNum) !== 'object') {
        errors.collect(ros.propertyValidator('segNodeNum', ros.validateRange)({
            data: properties.segNodeNum,
            min: 2,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('segNodeNum', ros.validateNumber)(properties.segNodeNum));
    errors.collect(ros.propertyValidator('segStorageType', ros.validateString)(properties.segStorageType));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    if(properties.dbInstanceGroupCount && (typeof properties.dbInstanceGroupCount) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceGroupCount', ros.validateRange)({
            data: properties.dbInstanceGroupCount,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceGroupCount', ros.validateNumber)(properties.dbInstanceGroupCount));
    errors.collect(ros.propertyValidator('standbyVSwitchId', ros.validateString)(properties.standbyVSwitchId));
    if(properties.dbInstanceCategory && (typeof properties.dbInstanceCategory) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceCategory', ros.validateAllowedValues)({
          data: properties.dbInstanceCategory,
          allowedValues: ["Basic","HighAvailability"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceCategory', ros.validateString)(properties.dbInstanceCategory));
    if(properties.vectorConfigurationStatus && (typeof properties.vectorConfigurationStatus) !== 'object') {
        errors.collect(ros.propertyValidator('vectorConfigurationStatus', ros.validateAllowedValues)({
          data: properties.vectorConfigurationStatus,
          allowedValues: ["Y","true","True","N","false","False"],
        }));
    }
    errors.collect(ros.propertyValidator('vectorConfigurationStatus', ros.validateString)(properties.vectorConfigurationStatus));
    if(properties.deployMode && (typeof properties.deployMode) !== 'object') {
        errors.collect(ros.propertyValidator('deployMode', ros.validateAllowedValues)({
          data: properties.deployMode,
          allowedValues: ["single","multiple"],
        }));
    }
    errors.collect(ros.propertyValidator('deployMode', ros.validateString)(properties.deployMode));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    if(properties.serverlessResource && (typeof properties.serverlessResource) !== 'object') {
        errors.collect(ros.propertyValidator('serverlessResource', ros.validateAllowedValues)({
          data: properties.serverlessResource,
          allowedValues: [8,16,24,32],
        }));
    }
    errors.collect(ros.propertyValidator('serverlessResource', ros.validateNumber)(properties.serverlessResource));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDBInstance_TagsPropertyValidator))(properties.tags));
    if(properties.dbInstanceDescription && (Array.isArray(properties.dbInstanceDescription) || (typeof properties.dbInstanceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateLength)({
            data: properties.dbInstanceDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.encryptionType && (typeof properties.encryptionType) !== 'object') {
        errors.collect(ros.propertyValidator('encryptionType', ros.validateAllowedValues)({
          data: properties.encryptionType,
          allowedValues: ["NULL","CloudDisk"],
        }));
    }
    errors.collect(ros.propertyValidator('encryptionType', ros.validateString)(properties.encryptionType));
    if(properties.serverlessMode && (typeof properties.serverlessMode) !== 'object') {
        errors.collect(ros.propertyValidator('serverlessMode', ros.validateAllowedValues)({
          data: properties.serverlessMode,
          allowedValues: ["Manual","Auto"],
        }));
    }
    errors.collect(ros.propertyValidator('serverlessMode', ros.validateString)(properties.serverlessMode));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('createSampleData', ros.validateBoolean)(properties.createSampleData));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    if(properties.prodType && (typeof properties.prodType) !== 'object') {
        errors.collect(ros.propertyValidator('prodType', ros.validateAllowedValues)({
          data: properties.prodType,
          allowedValues: ["standard","cost-effective"],
        }));
    }
    errors.collect(ros.propertyValidator('prodType', ros.validateString)(properties.prodType));
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
    if(properties.storageSize && (typeof properties.storageSize) !== 'object') {
        errors.collect(ros.propertyValidator('storageSize', ros.validateRange)({
            data: properties.storageSize,
            min: 50,
            max: 4000,
          }));
    }
    errors.collect(ros.propertyValidator('storageSize', ros.validateNumber)(properties.storageSize));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.masterCu && (typeof properties.masterCu) !== 'object') {
        errors.collect(ros.propertyValidator('masterCu', ros.validateAllowedValues)({
          data: properties.masterCu,
          allowedValues: [2,4,8,16,32,64,128],
        }));
    }
    errors.collect(ros.propertyValidator('masterCu', ros.validateNumber)(properties.masterCu));
    if(properties.dbInstanceMode && (typeof properties.dbInstanceMode) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceMode', ros.validateAllowedValues)({
          data: properties.dbInstanceMode,
          allowedValues: ["StorageElastic","Serverless","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceMode', ros.validateString)(properties.dbInstanceMode));
    if(properties.segDiskPerformanceLevel && (typeof properties.segDiskPerformanceLevel) !== 'object') {
        errors.collect(ros.propertyValidator('segDiskPerformanceLevel', ros.validateAllowedValues)({
          data: properties.segDiskPerformanceLevel,
          allowedValues: ["pl0","pl1","pl2"],
        }));
    }
    errors.collect(ros.propertyValidator('segDiskPerformanceLevel', ros.validateString)(properties.segDiskPerformanceLevel));
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
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AINodeSpecInfos': ros.listMapper(rosDBInstanceAINodeSpecInfosPropertyToRosTemplate)(properties.aiNodeSpecInfos),
      'CreateSampleData': ros.booleanToRosTemplate(properties.createSampleData),
      'DBInstanceCategory': ros.stringToRosTemplate(properties.dbInstanceCategory),
      'DBInstanceClass': ros.stringToRosTemplate(properties.dbInstanceClass),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'DBInstanceGroupCount': ros.numberToRosTemplate(properties.dbInstanceGroupCount),
      'DBInstanceMode': ros.stringToRosTemplate(properties.dbInstanceMode),
      'DeployMode': ros.stringToRosTemplate(properties.deployMode),
      'EncryptionKey': ros.stringToRosTemplate(properties.encryptionKey),
      'EncryptionType': ros.stringToRosTemplate(properties.encryptionType),
      'IdleTime': ros.numberToRosTemplate(properties.idleTime),
      'InstanceSpec': ros.stringToRosTemplate(properties.instanceSpec),
      'MasterCU': ros.numberToRosTemplate(properties.masterCu),
      'MasterNodeNum': ros.numberToRosTemplate(properties.masterNodeNum),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PrivateIpAddress': ros.stringToRosTemplate(properties.privateIpAddress),
      'ProdType': ros.stringToRosTemplate(properties.prodType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityIPList': ros.stringToRosTemplate(properties.securityIpList),
      'SegDiskPerformanceLevel': ros.stringToRosTemplate(properties.segDiskPerformanceLevel),
      'SegNodeNum': ros.numberToRosTemplate(properties.segNodeNum),
      'SegStorageType': ros.stringToRosTemplate(properties.segStorageType),
      'ServerlessMode': ros.stringToRosTemplate(properties.serverlessMode),
      'ServerlessResource': ros.numberToRosTemplate(properties.serverlessResource),
      'StandbyVSwitchId': ros.stringToRosTemplate(properties.standbyVSwitchId),
      'StandbyZoneId': ros.stringToRosTemplate(properties.standbyZoneId),
      'StorageSize': ros.numberToRosTemplate(properties.storageSize),
      'Tags': ros.listMapper(rosDBInstanceTagsPropertyToRosTemplate)(properties.tags),
      'VectorConfigurationStatus': ros.stringToRosTemplate(properties.vectorConfigurationStatus),
      'VPCId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::DBInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::DBInstance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
     * @Property engineVersion: The version of the database engine. For example: 6.0、7.0
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
     * @Property aiNodeSpecInfos: AI node spec infos.
     */
    public aiNodeSpecInfos: Array<RosDBInstance.AINodeSpecInfosProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property createSampleData: Whether to load the sample data set after the instance is created. The value can be:
     * true: load the sample dataset.
     * false: not to load the sample dataset
     */
    public createSampleData: boolean | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    public dbInstanceCategory: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceClass: The instance type.
     */
    public dbInstanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceGroupCount: The number of compute nodes in the instance.
     * The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
     */
    public dbInstanceGroupCount: number | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    public dbInstanceMode: string | ros.IResolvable | undefined;

    /**
     * @Property deployMode: The deployment mode of the instance.
     */
    public deployMode: string | ros.IResolvable | undefined;

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
     * @Property idleTime: Idle release wait time. That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
     */
    public idleTime: number | ros.IResolvable | undefined;

    /**
     * @Property instanceSpec: The specification of segment nodes.
     * - When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.
     * - When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.
     * - When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
     * This parameter must be passed to create a storage elastic mode instance and a serverless version instance.
     */
    public instanceSpec: string | ros.IResolvable | undefined;

    /**
     * @Property masterCu: Master resources. Default is 8.
     */
    public masterCu: number | ros.IResolvable | undefined;

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
     * @Property periodUnit: Unit of subscription period, it could be Month\/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: Private IP address.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property prodType: Prod type. The value can be: standard, cost-effective. The default value is standard.
     */
    public prodType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property segDiskPerformanceLevel: Seg disk performance level. The value can be:
     * pl0、pl1 and pl2
     */
    public segDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property segNodeNum: Calculate the number of nodes. The value can be:
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.
     * - When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.
     */
    public segNodeNum: number | ros.IResolvable | undefined;

    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     * This parameter must be passed in to create a storage elastic mode instance.
     * Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
     */
    public segStorageType: string | ros.IResolvable | undefined;

    /**
     * @Property serverlessMode: Mode of the Serverless instance. The value can be:
     * Manual: manual scheduling is the default value.
     * Auto: indicates automatic scheduling.
     */
    public serverlessMode: string | ros.IResolvable | undefined;

    /**
     * @Property serverlessResource: Computing resource threshold. The value ranges from 8 to 32. The step length is 8.
     * The unit is ACU. The default value is 32.
     */
    public serverlessResource: number | ros.IResolvable | undefined;

    /**
     * @Property standbyVSwitchId: The standby VSwitch ID of the instance.
     */
    public standbyVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property standbyZoneId: The standby zone ID of the instance.
     */
    public standbyZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    public storageSize: number | ros.IResolvable | undefined;

    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    public tags: RosDBInstance.TagsProperty[] | undefined;

    /**
     * @Property vectorConfigurationStatus: the status of vector configuration. The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
     */
    public vectorConfigurationStatus: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.engineVersion = props.engineVersion;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.aiNodeSpecInfos = props.aiNodeSpecInfos;
        this.createSampleData = props.createSampleData;
        this.dbInstanceCategory = props.dbInstanceCategory;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceGroupCount = props.dbInstanceGroupCount;
        this.dbInstanceMode = props.dbInstanceMode;
        this.deployMode = props.deployMode;
        this.encryptionKey = props.encryptionKey;
        this.encryptionType = props.encryptionType;
        this.idleTime = props.idleTime;
        this.instanceSpec = props.instanceSpec;
        this.masterCu = props.masterCu;
        this.masterNodeNum = props.masterNodeNum;
        this.payType = props.payType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.prodType = props.prodType;
        this.resourceGroupId = props.resourceGroupId;
        this.securityIpList = props.securityIpList;
        this.segDiskPerformanceLevel = props.segDiskPerformanceLevel;
        this.segNodeNum = props.segNodeNum;
        this.segStorageType = props.segStorageType;
        this.serverlessMode = props.serverlessMode;
        this.serverlessResource = props.serverlessResource;
        this.standbyVSwitchId = props.standbyVSwitchId;
        this.standbyZoneId = props.standbyZoneId;
        this.storageSize = props.storageSize;
        this.tags = props.tags;
        this.vectorConfigurationStatus = props.vectorConfigurationStatus;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            engineVersion: this.engineVersion,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            aiNodeSpecInfos: this.aiNodeSpecInfos,
            createSampleData: this.createSampleData,
            dbInstanceCategory: this.dbInstanceCategory,
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceGroupCount: this.dbInstanceGroupCount,
            dbInstanceMode: this.dbInstanceMode,
            deployMode: this.deployMode,
            encryptionKey: this.encryptionKey,
            encryptionType: this.encryptionType,
            idleTime: this.idleTime,
            instanceSpec: this.instanceSpec,
            masterCu: this.masterCu,
            masterNodeNum: this.masterNodeNum,
            payType: this.payType,
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            prodType: this.prodType,
            resourceGroupId: this.resourceGroupId,
            securityIpList: this.securityIpList,
            segDiskPerformanceLevel: this.segDiskPerformanceLevel,
            segNodeNum: this.segNodeNum,
            segStorageType: this.segStorageType,
            serverlessMode: this.serverlessMode,
            serverlessResource: this.serverlessResource,
            standbyVSwitchId: this.standbyVSwitchId,
            standbyZoneId: this.standbyZoneId,
            storageSize: this.storageSize,
            tags: this.tags,
            vectorConfigurationStatus: this.vectorConfigurationStatus,
            vpcId: this.vpcId,
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
    export interface AINodeSpecInfosProperty {
        /**
         * @Property aiNodeSpec: The spec of ai node.
         */
        readonly aiNodeSpec: string | ros.IResolvable;
        /**
         * @Property aiNodeNum: The number of ai node.
         */
        readonly aiNodeNum: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AINodeSpecInfosProperty`
 *
 * @param properties - the TypeScript properties of a `AINodeSpecInfosProperty`
 *
 * @returns the result of the validation.
 */
function RosDBInstance_AINodeSpecInfosPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aiNodeSpec', ros.requiredValidator)(properties.aiNodeSpec));
    errors.collect(ros.propertyValidator('aiNodeSpec', ros.validateString)(properties.aiNodeSpec));
    errors.collect(ros.propertyValidator('aiNodeNum', ros.requiredValidator)(properties.aiNodeNum));
    errors.collect(ros.propertyValidator('aiNodeNum', ros.validateNumber)(properties.aiNodeNum));
    return errors.wrap('supplied properties not correct for "AINodeSpecInfosProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::DBInstance.AINodeSpecInfos` resource
 *
 * @param properties - the TypeScript properties of a `AINodeSpecInfosProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::DBInstance.AINodeSpecInfos` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceAINodeSpecInfosPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstance_AINodeSpecInfosPropertyValidator(properties).assertSuccess();
    return {
      'AINodeSpec': ros.stringToRosTemplate(properties.aiNodeSpec),
      'AINodeNum': ros.numberToRosTemplate(properties.aiNodeNum),
    };
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::DBInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::DBInstance.Tags` resource.
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

/**
 * Properties for defining a `RosElasticDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
 */
export interface RosElasticDBInstanceProps {

    /**
     * @Property engineVersion: The version of the database engine. For example: 6.0、7.0
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * @Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    readonly instanceSpec: string | ros.IResolvable;

    /**
     * @Property segNodeNum: The number of segment nodes.
     * For the high availability version, the value ranges from 4 to 512.
     * The basic version ranges from 2 to 512.
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
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    readonly dbInstanceCategory?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    readonly dbInstanceMode?: string | ros.IResolvable;

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
     * @Property periodUnit: Unit of subscription period, it could be Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property privateIpAddress: Private IP address.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    readonly tags?: RosElasticDBInstance.TagsProperty[];

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
    if(properties.encryptionType && (typeof properties.encryptionType) !== 'object') {
        errors.collect(ros.propertyValidator('encryptionType', ros.validateAllowedValues)({
          data: properties.encryptionType,
          allowedValues: ["NULL","CloudDisk"],
        }));
    }
    errors.collect(ros.propertyValidator('encryptionType', ros.validateString)(properties.encryptionType));
    errors.collect(ros.propertyValidator('instanceSpec', ros.requiredValidator)(properties.instanceSpec));
    errors.collect(ros.propertyValidator('instanceSpec', ros.validateString)(properties.instanceSpec));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('segNodeNum', ros.requiredValidator)(properties.segNodeNum));
    if(properties.segNodeNum && (typeof properties.segNodeNum) !== 'object') {
        errors.collect(ros.propertyValidator('segNodeNum', ros.validateRange)({
            data: properties.segNodeNum,
            min: 2,
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
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.dbInstanceCategory && (typeof properties.dbInstanceCategory) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceCategory', ros.validateAllowedValues)({
          data: properties.dbInstanceCategory,
          allowedValues: ["Basic","HighAvailability"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceCategory', ros.validateString)(properties.dbInstanceCategory));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    if(properties.dbInstanceMode && (typeof properties.dbInstanceMode) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceMode', ros.validateAllowedValues)({
          data: properties.dbInstanceMode,
          allowedValues: ["StorageElastic","Serverless","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceMode', ros.validateString)(properties.dbInstanceMode));
    if(properties.dbInstanceDescription && (Array.isArray(properties.dbInstanceDescription) || (typeof properties.dbInstanceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateLength)({
            data: properties.dbInstanceDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosElasticDBInstance_TagsPropertyValidator))(properties.tags));
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
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'InstanceSpec': ros.stringToRosTemplate(properties.instanceSpec),
      'SegNodeNum': ros.numberToRosTemplate(properties.segNodeNum),
      'SegStorageType': ros.stringToRosTemplate(properties.segStorageType),
      'StorageSize': ros.numberToRosTemplate(properties.storageSize),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'DBInstanceCategory': ros.stringToRosTemplate(properties.dbInstanceCategory),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'DBInstanceMode': ros.stringToRosTemplate(properties.dbInstanceMode),
      'EncryptionKey': ros.stringToRosTemplate(properties.encryptionKey),
      'EncryptionType': ros.stringToRosTemplate(properties.encryptionType),
      'MasterNodeNum': ros.numberToRosTemplate(properties.masterNodeNum),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PrivateIpAddress': ros.stringToRosTemplate(properties.privateIpAddress),
      'SecurityIPList': ros.stringToRosTemplate(properties.securityIpList),
      'Tags': ros.listMapper(rosElasticDBInstanceTagsPropertyToRosTemplate)(properties.tags),
      'VPCId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::ElasticDBInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ElasticDBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
 */
export class RosElasticDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::ElasticDBInstance";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
     * @Property engineVersion: The version of the database engine. For example: 6.0、7.0
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    public instanceSpec: string | ros.IResolvable;

    /**
     * @Property segNodeNum: The number of segment nodes.
     * For the high availability version, the value ranges from 4 to 512.
     * The basic version ranges from 2 to 512.
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
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    public dbInstanceCategory: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    public dbInstanceMode: string | ros.IResolvable | undefined;

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
     * @Property periodUnit: Unit of subscription period, it could be Month\/Year. Default value is Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: Private IP address.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    public tags: RosElasticDBInstance.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosElasticDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosElasticDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
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
        this.dbInstanceMode = props.dbInstanceMode;
        this.encryptionKey = props.encryptionKey;
        this.encryptionType = props.encryptionType;
        this.masterNodeNum = props.masterNodeNum;
        this.payType = props.payType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.securityIpList = props.securityIpList;
        this.tags = props.tags;
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
            dbInstanceMode: this.dbInstanceMode,
            encryptionKey: this.encryptionKey,
            encryptionType: this.encryptionType,
            masterNodeNum: this.masterNodeNum,
            payType: this.payType,
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            securityIpList: this.securityIpList,
            tags: this.tags,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosElasticDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosElasticDBInstance {
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
function RosElasticDBInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::ElasticDBInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::ElasticDBInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosElasticDBInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosElasticDBInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosInstancePublicConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
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
      'ConnectionStringPrefix': ros.stringToRosTemplate(properties.connectionStringPrefix),
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'Port': ros.numberToRosTemplate(properties.port),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::InstancePublicConnection`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstancePublicConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
 */
export class RosInstancePublicConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::InstancePublicConnection";

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

/**
 * Properties for defining a `RosSupabaseProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
 */
export interface RosSupabaseProjectProps {

    /**
     * @Property accountPassword: The password for the initial account.
     * It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
     * Supported special characters: !@#$%^&*()_+-=
     * The length is 8~32 characters.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * @Property projectName: Project name.The naming rules are as follows:
     * The length is 1~128 characters.
     * Only English letters, numbers, dash (-) and underscore (_).
     * Must start with English letters or underscores (_).
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property projectSpec: Supabase instance specification, default is 1C1G.
     */
    readonly projectSpec: string | ros.IResolvable;

    /**
     * @Property securityIpList: IP whitelist.
     * 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
     */
    readonly securityIpList: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     * illustrate
     * You can call the DescribeRdsVpcs interface to view the available VPC IDs.
     * This parameter must be passed in.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: vSwitch ID.
     * illustrate
     * vSwitchId is required.
     * The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability Zone ID.
     * Description You can call the DescribeRegions interface to view the available Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property diskPerformanceLevel: Cloud disk PL level, default PL0. Selectable value:
     * PL0
     * PL1
     */
    readonly diskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property storageSize: Storage space size, unit GB, default 1GB.
     */
    readonly storageSize?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSupabaseProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosSupabaseProjectProps`
 *
 * @returns the result of the validation.
 */
function RosSupabaseProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('projectSpec', ros.requiredValidator)(properties.projectSpec));
    errors.collect(ros.propertyValidator('projectSpec', ros.validateString)(properties.projectSpec));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z_][a-zA-Z0-9_-]{0,127}$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('securityIpList', ros.requiredValidator)(properties.securityIpList));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.diskPerformanceLevel && (typeof properties.diskPerformanceLevel) !== 'object') {
        errors.collect(ros.propertyValidator('diskPerformanceLevel', ros.validateAllowedValues)({
          data: properties.diskPerformanceLevel,
          allowedValues: ["PL0","PL1"],
        }));
    }
    errors.collect(ros.propertyValidator('diskPerformanceLevel', ros.validateString)(properties.diskPerformanceLevel));
    errors.collect(ros.propertyValidator('storageSize', ros.validateNumber)(properties.storageSize));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    if(properties.accountPassword && (typeof properties.accountPassword) !== 'object') {
        errors.collect(ros.propertyValidator('accountPassword', ros.validateAllowedPattern)({
          data: properties.accountPassword,
          reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    return errors.wrap('supplied properties not correct for "RosSupabaseProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GPDB::SupabaseProject` resource
 *
 * @param properties - the TypeScript properties of a `RosSupabaseProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GPDB::SupabaseProject` resource.
 */
// @ts-ignore TS6133
function rosSupabaseProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSupabaseProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'ProjectSpec': ros.stringToRosTemplate(properties.projectSpec),
      'SecurityIPList': ros.stringToRosTemplate(properties.securityIpList),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'DiskPerformanceLevel': ros.stringToRosTemplate(properties.diskPerformanceLevel),
      'StorageSize': ros.numberToRosTemplate(properties.storageSize),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::SupabaseProject`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SupabaseProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
 */
export class RosSupabaseProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::SupabaseProject";

    /**
     * @Attribute ProjectId: Supabase instance ID
     */
    public readonly attrProjectId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountPassword: The password for the initial account.
     * It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
     * Supported special characters: !@#$%^&*()_+-=
     * The length is 8~32 characters.
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property projectName: Project name.The naming rules are as follows:
     * The length is 1~128 characters.
     * Only English letters, numbers, dash (-) and underscore (_).
     * Must start with English letters or underscores (_).
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property projectSpec: Supabase instance specification, default is 1C1G.
     */
    public projectSpec: string | ros.IResolvable;

    /**
     * @Property securityIpList: IP whitelist.
     * 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
     */
    public securityIpList: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     * illustrate
     * You can call the DescribeRdsVpcs interface to view the available VPC IDs.
     * This parameter must be passed in.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: vSwitch ID.
     * illustrate
     * vSwitchId is required.
     * The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability Zone ID.
     * Description You can call the DescribeRegions interface to view the available Availability Zone ID.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property diskPerformanceLevel: Cloud disk PL level, default PL0. Selectable value:
     * PL0
     * PL1
     */
    public diskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property storageSize: Storage space size, unit GB, default 1GB.
     */
    public storageSize: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSupabaseProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSupabaseProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectId = this.getAtt('ProjectId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountPassword = props.accountPassword;
        this.projectName = props.projectName;
        this.projectSpec = props.projectSpec;
        this.securityIpList = props.securityIpList;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.diskPerformanceLevel = props.diskPerformanceLevel;
        this.storageSize = props.storageSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountPassword: this.accountPassword,
            projectName: this.projectName,
            projectSpec: this.projectSpec,
            securityIpList: this.securityIpList,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            diskPerformanceLevel: this.diskPerformanceLevel,
            storageSize: this.storageSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSupabaseProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
