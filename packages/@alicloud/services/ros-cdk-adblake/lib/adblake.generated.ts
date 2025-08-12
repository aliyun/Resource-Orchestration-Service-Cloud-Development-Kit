// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !@#$%^&*()_+-=The password length is 8 to 32 characters.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account.
     */
    readonly accountType: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ADB Lake cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property engine: The engine of the account.Valid values: AnalyticDB \/ Clickhouse.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the account.
     */
    readonly accountDescription?: string | ros.IResolvable;

    /**
     * @Property ramUser: Bind the RAM user to the cluster database common account
     */
    readonly ramUser?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('ramUser', ros.validateString)(properties.ramUser));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('accountType', ros.requiredValidator)(properties.accountType));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: ["Normal","Super"],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["Clickhouse","AnalyticDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    if(properties.accountName && (Array.isArray(properties.accountName) || (typeof properties.accountName) === 'string')) {
        errors.collect(ros.propertyValidator('accountName', ros.validateLength)({
            data: properties.accountName.length,
            min: 2,
            max: 16,
          }));
    }
    if(properties.accountName && (typeof properties.accountName) !== 'object') {
        errors.collect(ros.propertyValidator('accountName', ros.validateAllowedPattern)({
          data: properties.accountName,
          reg: /^[a-z][a-z0-9_]{0,14}[a-z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    if(properties.accountPassword && (Array.isArray(properties.accountPassword) || (typeof properties.accountPassword) === 'string')) {
        errors.collect(ros.propertyValidator('accountPassword', ros.validateLength)({
            data: properties.accountPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::Account` resource.
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
      'AccountType': ros.stringToRosTemplate(properties.accountType),
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'AccountDescription': ros.stringToRosTemplate(properties.accountDescription),
      'RamUser': ros.stringToRosTemplate(properties.ramUser),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::Account`, which is used to create a database account for an AnalyticDB for MySQL Data Lakehouse Edition cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::Account";

    /**
     * @Attribute AccountName: The name of the account.
     */
    public readonly attrAccountName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !@#$%^&*()_+-=The password length is 8 to 32 characters.
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account.
     */
    public accountType: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the ADB Lake cluster.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property engine: The engine of the account.Valid values: AnalyticDB \/ Clickhouse.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property accountDescription: The description of the account.
     */
    public accountDescription: string | ros.IResolvable | undefined;

    /**
     * @Property ramUser: Bind the RAM user to the cluster database common account
     */
    public ramUser: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountName = this.getAtt('AccountName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.accountType = props.accountType;
        this.dbClusterId = props.dbClusterId;
        this.engine = props.engine;
        this.accountDescription = props.accountDescription;
        this.ramUser = props.ramUser;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            accountType: this.accountType,
            dbClusterId: this.dbClusterId,
            engine: this.engine,
            accountDescription: this.accountDescription,
            ramUser: this.ramUser,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export interface RosDBClusterProps {

    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 5.0.
     */
    readonly dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go.
     * Prepaid: subscription.
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property vpcId: The virtual private cloud (VPC) ID of the cluster.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the cluster.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID.
     * Note You can call the  DescribeRegions  operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the backup set that you want to use to restore data.
     * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * @Property cloneSourceRegionId: The ID of the source region where the cluster is located.
     */
    readonly cloneSourceRegionId?: string | ros.IResolvable;

    /**
     * @Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly computeResource?: string | ros.IResolvable;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     * The description cannot start with http:\/\/ or https:\/\/.
     * The description must be 2 to 256 characters in length
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * @Property dbClusterNetworkType: The network type of the cluster. Valid values:
     * VPC
     */
    readonly dbClusterNetworkType?: string | ros.IResolvable;

    /**
     * @Property diskEncryption: Specifies whether to encrypt the disk. Valid values:
     * true
     * false (default)
     */
    readonly diskEncryption?: boolean | ros.IResolvable;

    /**
     * @Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
     * true (default)
     * false
     */
    readonly enableDefaultResourcePool?: boolean | ros.IResolvable;

    /**
     * @Property kmsId:
     */
    readonly kmsId?: string | ros.IResolvable;

    /**
     * @Property period: The subscription duration of the subscription cluster.
     * Valid values when Period is set to Year: 1 to 3 (integer).
     * Valid values when Period is set to Month: 1 to 9 (integer).
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property periodType: The subscription type of the subscription cluster. Valid values:
     * Year: subscription on a yearly basis.
     * Month: subscription on a monthly basis.
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * @Property productForm: Valid values:
     * IntegrationForm
     * LegacyForm
     */
    readonly productForm?: string | ros.IResolvable;

    /**
     * @Property productVersion: The version of the cluster.Note If only ProductForm is set to IntegrationForm, enter this parameter.
     */
    readonly productVersion?: string | ros.IResolvable;

    /**
     * @Property reservedNodeCount: The number of reserved nodes. Must be 1 for basic version and multiple 
     * of 3 for enterprise version.
     */
    readonly reservedNodeCount?: number | ros.IResolvable;

    /**
     * @Property reservedNodeSize: The size of each reserved node.
     */
    readonly reservedNodeSize?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restoreToTime: The point in time to which you want to restore data from the backup set.
     */
    readonly restoreToTime?: string | ros.IResolvable;

    /**
     * @Property restoreType: The method that you want to use to restore data. Valid values:
     * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
     * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
     */
    readonly restoreType?: string | ros.IResolvable;

    /**
     * @Property secondaryVSwitchId: The secondary vSwitch ID of the cluster.
     */
    readonly secondaryVSwitchId?: string | ros.IResolvable;

    /**
     * @Property secondaryZoneId: The secondary zone ID.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * @Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    readonly sourceDbClusterId?: string | ros.IResolvable;

    /**
     * @Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly storageResource?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosDBClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('storageResource', ros.validateString)(properties.storageResource));
    errors.collect(ros.propertyValidator('restoreToTime', ros.validateString)(properties.restoreToTime));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.productForm && (typeof properties.productForm) !== 'object') {
        errors.collect(ros.propertyValidator('productForm', ros.validateAllowedValues)({
          data: properties.productForm,
          allowedValues: ["IntegrationForm","LegacyForm"],
        }));
    }
    errors.collect(ros.propertyValidator('productForm', ros.validateString)(properties.productForm));
    if(properties.dbClusterNetworkType && (typeof properties.dbClusterNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('dbClusterNetworkType', ros.validateAllowedValues)({
          data: properties.dbClusterNetworkType,
          allowedValues: ["VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('dbClusterNetworkType', ros.validateString)(properties.dbClusterNetworkType));
    if(properties.productVersion && (typeof properties.productVersion) !== 'object') {
        errors.collect(ros.propertyValidator('productVersion', ros.validateAllowedValues)({
          data: properties.productVersion,
          allowedValues: ["BasicVersion","EnterpriseVersion"],
        }));
    }
    errors.collect(ros.propertyValidator('productVersion', ros.validateString)(properties.productVersion));
    if(properties.reservedNodeCount && (typeof properties.reservedNodeCount) !== 'object') {
        errors.collect(ros.propertyValidator('reservedNodeCount', ros.validateRange)({
            data: properties.reservedNodeCount,
            min: 1,
            max: 2147483646,
          }));
    }
    errors.collect(ros.propertyValidator('reservedNodeCount', ros.validateNumber)(properties.reservedNodeCount));
    errors.collect(ros.propertyValidator('diskEncryption', ros.validateBoolean)(properties.diskEncryption));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.requiredValidator)(properties.dbClusterVersion));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.validateString)(properties.dbClusterVersion));
    if(properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
          data: properties.restoreType,
          allowedValues: ["backup","timepoint"],
        }));
    }
    errors.collect(ros.propertyValidator('restoreType', ros.validateString)(properties.restoreType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDBCluster_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('enableDefaultResourcePool', ros.validateBoolean)(properties.enableDefaultResourcePool));
    errors.collect(ros.propertyValidator('cloneSourceRegionId', ros.validateString)(properties.cloneSourceRegionId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateString)(properties.dbClusterDescription));
    errors.collect(ros.propertyValidator('secondaryVSwitchId', ros.validateString)(properties.secondaryVSwitchId));
    if(properties.reservedNodeSize && (typeof properties.reservedNodeSize) !== 'object') {
        errors.collect(ros.propertyValidator('reservedNodeSize', ros.validateAllowedValues)({
          data: properties.reservedNodeSize,
          allowedValues: [8,12,16,24,32],
        }));
    }
    errors.collect(ros.propertyValidator('reservedNodeSize', ros.validateNumber)(properties.reservedNodeSize));
    errors.collect(ros.propertyValidator('computeResource', ros.validateString)(properties.computeResource));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('backupSetId', ros.validateString)(properties.backupSetId));
    errors.collect(ros.propertyValidator('secondaryZoneId', ros.validateString)(properties.secondaryZoneId));
    errors.collect(ros.propertyValidator('sourceDbClusterId', ros.validateString)(properties.sourceDbClusterId));
    errors.collect(ros.propertyValidator('kmsId', ros.validateString)(properties.kmsId));
    return errors.wrap('supplied properties not correct for "RosDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster` resource.
 */
// @ts-ignore TS6133
function rosDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterVersion': ros.stringToRosTemplate(properties.dbClusterVersion),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'VPCId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'BackupSetId': ros.stringToRosTemplate(properties.backupSetId),
      'CloneSourceRegionId': ros.stringToRosTemplate(properties.cloneSourceRegionId),
      'ComputeResource': ros.stringToRosTemplate(properties.computeResource),
      'DBClusterDescription': ros.stringToRosTemplate(properties.dbClusterDescription),
      'DBClusterNetworkType': ros.stringToRosTemplate(properties.dbClusterNetworkType),
      'DiskEncryption': ros.booleanToRosTemplate(properties.diskEncryption),
      'EnableDefaultResourcePool': ros.booleanToRosTemplate(properties.enableDefaultResourcePool),
      'KmsId': ros.stringToRosTemplate(properties.kmsId),
      'Period': ros.stringToRosTemplate(properties.period),
      'PeriodType': ros.stringToRosTemplate(properties.periodType),
      'ProductForm': ros.stringToRosTemplate(properties.productForm),
      'ProductVersion': ros.stringToRosTemplate(properties.productVersion),
      'ReservedNodeCount': ros.numberToRosTemplate(properties.reservedNodeCount),
      'ReservedNodeSize': ros.numberToRosTemplate(properties.reservedNodeSize),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RestoreToTime': ros.stringToRosTemplate(properties.restoreToTime),
      'RestoreType': ros.stringToRosTemplate(properties.restoreType),
      'SecondaryVSwitchId': ros.stringToRosTemplate(properties.secondaryVSwitchId),
      'SecondaryZoneId': ros.stringToRosTemplate(properties.secondaryZoneId),
      'SourceDbClusterId': ros.stringToRosTemplate(properties.sourceDbClusterId),
      'StorageResource': ros.stringToRosTemplate(properties.storageResource),
      'Tags': ros.listMapper(rosDBClusterTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::DBCluster`, which type is used to create an AnalyticDB for MySQL Data Lakehouse Edition cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::DBCluster";

    /**
     * @Attribute ConnectionString: The public endpoint that is used to connect to the cluster.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * @Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 5.0.
     */
    public dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go.
     * Prepaid: subscription.
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property vpcId: The virtual private cloud (VPC) ID of the cluster.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the cluster.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID.
     * Note You can call the  DescribeRegions  operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the backup set that you want to use to restore data.
     * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
     */
    public backupSetId: string | ros.IResolvable | undefined;

    /**
     * @Property cloneSourceRegionId: The ID of the source region where the cluster is located.
     */
    public cloneSourceRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    public computeResource: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     * The description cannot start with http:\/\/ or https:\/\/.
     * The description must be 2 to 256 characters in length
     */
    public dbClusterDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterNetworkType: The network type of the cluster. Valid values:
     * VPC
     */
    public dbClusterNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property diskEncryption: Specifies whether to encrypt the disk. Valid values:
     * true
     * false (default)
     */
    public diskEncryption: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
     * true (default)
     * false
     */
    public enableDefaultResourcePool: boolean | ros.IResolvable | undefined;

    /**
     * @Property kmsId:
     */
    public kmsId: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration of the subscription cluster.
     * Valid values when Period is set to Year: 1 to 3 (integer).
     * Valid values when Period is set to Month: 1 to 9 (integer).
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property periodType: The subscription type of the subscription cluster. Valid values:
     * Year: subscription on a yearly basis.
     * Month: subscription on a monthly basis.
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    public periodType: string | ros.IResolvable | undefined;

    /**
     * @Property productForm: Valid values:
     * IntegrationForm
     * LegacyForm
     */
    public productForm: string | ros.IResolvable | undefined;

    /**
     * @Property productVersion: The version of the cluster.Note If only ProductForm is set to IntegrationForm, enter this parameter.
     */
    public productVersion: string | ros.IResolvable | undefined;

    /**
     * @Property reservedNodeCount: The number of reserved nodes. Must be 1 for basic version and multiple 
     * of 3 for enterprise version.
     */
    public reservedNodeCount: number | ros.IResolvable | undefined;

    /**
     * @Property reservedNodeSize: The size of each reserved node.
     */
    public reservedNodeSize: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restoreToTime: The point in time to which you want to restore data from the backup set.
     */
    public restoreToTime: string | ros.IResolvable | undefined;

    /**
     * @Property restoreType: The method that you want to use to restore data. Valid values:
     * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
     * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
     */
    public restoreType: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryVSwitchId: The secondary vSwitch ID of the cluster.
     */
    public secondaryVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryZoneId: The secondary zone ID.
     */
    public secondaryZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    public sourceDbClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    public storageResource: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDBCluster.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbClusterId = this.getAtt('DBClusterId');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterVersion = props.dbClusterVersion;
        this.payType = props.payType;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.backupSetId = props.backupSetId;
        this.cloneSourceRegionId = props.cloneSourceRegionId;
        this.computeResource = props.computeResource;
        this.dbClusterDescription = props.dbClusterDescription;
        this.dbClusterNetworkType = props.dbClusterNetworkType;
        this.diskEncryption = props.diskEncryption;
        this.enableDefaultResourcePool = props.enableDefaultResourcePool;
        this.kmsId = props.kmsId;
        this.period = props.period;
        this.periodType = props.periodType;
        this.productForm = props.productForm;
        this.productVersion = props.productVersion;
        this.reservedNodeCount = props.reservedNodeCount;
        this.reservedNodeSize = props.reservedNodeSize;
        this.resourceGroupId = props.resourceGroupId;
        this.restoreToTime = props.restoreToTime;
        this.restoreType = props.restoreType;
        this.secondaryVSwitchId = props.secondaryVSwitchId;
        this.secondaryZoneId = props.secondaryZoneId;
        this.sourceDbClusterId = props.sourceDbClusterId;
        this.storageResource = props.storageResource;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterVersion: this.dbClusterVersion,
            payType: this.payType,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            backupSetId: this.backupSetId,
            cloneSourceRegionId: this.cloneSourceRegionId,
            computeResource: this.computeResource,
            dbClusterDescription: this.dbClusterDescription,
            dbClusterNetworkType: this.dbClusterNetworkType,
            diskEncryption: this.diskEncryption,
            enableDefaultResourcePool: this.enableDefaultResourcePool,
            kmsId: this.kmsId,
            period: this.period,
            periodType: this.periodType,
            productForm: this.productForm,
            productVersion: this.productVersion,
            reservedNodeCount: this.reservedNodeCount,
            reservedNodeSize: this.reservedNodeSize,
            resourceGroupId: this.resourceGroupId,
            restoreToTime: this.restoreToTime,
            restoreType: this.restoreType,
            secondaryVSwitchId: this.secondaryVSwitchId,
            secondaryZoneId: this.secondaryZoneId,
            sourceDbClusterId: this.sourceDbClusterId,
            storageResource: this.storageResource,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBCluster {
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
function RosDBCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::DBCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosDBClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
 */
export interface RosResourceGroupProps {

    /**
     * @Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property engine: Database engine, value:
     * AnalyticDB (default): AnalyticDB for mysql engine.
     * Sparkwarehouse: Sparkwarehous engine.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the resource group.
     * The name can be up to 255 characters in length.
     * The name must start with a letter or digit.
     * The name can contain letters, digits, hyphens (-), and underscores (_).
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property groupType: The type of the resource group. Valid values:
     * Interactive
     * Job
     * Note For more information about resource groups, see Resource group overview.
     */
    readonly groupType: string | ros.IResolvable;

    /**
     * @Property autoStopInterval: Automatically stop time, the unit is minutes (m).
     */
    readonly autoStopInterval?: string | ros.IResolvable;

    /**
     * @Property clusterMode: The mode of cluster. Default: AutoScale.
     */
    readonly clusterMode?: string | ros.IResolvable;

    /**
     * @Property clusterSizeResource: A reserved parameter.
     */
    readonly clusterSizeResource?: string | ros.IResolvable;

    /**
     * @Property enableSpot: Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
     * True
     * False
     */
    readonly enableSpot?: boolean | ros.IResolvable;

    /**
     * @Property engineParams: Engine configuration.
     */
    readonly engineParams?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property maxClusterCount: A reserved parameter.
     */
    readonly maxClusterCount?: number | ros.IResolvable;

    /**
     * @Property maxComputeResource: The maximum reserved computing resources.
     * If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
     * If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
     */
    readonly maxComputeResource?: string | ros.IResolvable;

    /**
     * @Property minClusterCount: A reserved parameter.
     */
    readonly minClusterCount?: number | ros.IResolvable;

    /**
     * @Property minComputeResource: The minimum reserved computing resources.
     * When GroupType is set to Interactive, set this parameter to 16ACU.
     * When GroupType is set to Job, set this parameter to 0ACU.
     */
    readonly minComputeResource?: string | ros.IResolvable;

    /**
     * @Property rules: The job resubmission rules.
     */
    readonly rules?: Array<RosResourceGroup.RulesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosResourceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    if(properties.groupName && (Array.isArray(properties.groupName) || (typeof properties.groupName) === 'string')) {
        errors.collect(ros.propertyValidator('groupName', ros.validateLength)({
            data: properties.groupName.length,
            min: 1,
            max: 255,
          }));
    }
    if(properties.groupName && (typeof properties.groupName) !== 'object') {
        errors.collect(ros.propertyValidator('groupName', ros.validateAllowedPattern)({
          data: properties.groupName,
          reg: /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,254}$/
        }));
    }
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('engineParams', ros.hashValidator(ros.validateAny))(properties.engineParams));
    errors.collect(ros.propertyValidator('clusterMode', ros.validateString)(properties.clusterMode));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('autoStopInterval', ros.validateString)(properties.autoStopInterval));
    errors.collect(ros.propertyValidator('maxComputeResource', ros.validateString)(properties.maxComputeResource));
    errors.collect(ros.propertyValidator('enableSpot', ros.validateBoolean)(properties.enableSpot));
    if(properties.rules && (Array.isArray(properties.rules) || (typeof properties.rules) === 'string')) {
        errors.collect(ros.propertyValidator('rules', ros.validateLength)({
            data: properties.rules.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('rules', ros.listValidator(RosResourceGroup_RulesPropertyValidator))(properties.rules));
    errors.collect(ros.propertyValidator('minClusterCount', ros.validateNumber)(properties.minClusterCount));
    errors.collect(ros.propertyValidator('groupType', ros.requiredValidator)(properties.groupType));
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["Interactive","Job"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('clusterSizeResource', ros.validateString)(properties.clusterSizeResource));
    errors.collect(ros.propertyValidator('minComputeResource', ros.validateString)(properties.minComputeResource));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["SparkWarehouse","AnalyticDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('maxClusterCount', ros.validateNumber)(properties.maxClusterCount));
    return errors.wrap('supplied properties not correct for "RosResourceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::ResourceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::ResourceGroup` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'GroupType': ros.stringToRosTemplate(properties.groupType),
      'AutoStopInterval': ros.stringToRosTemplate(properties.autoStopInterval),
      'ClusterMode': ros.stringToRosTemplate(properties.clusterMode),
      'ClusterSizeResource': ros.stringToRosTemplate(properties.clusterSizeResource),
      'EnableSpot': ros.booleanToRosTemplate(properties.enableSpot),
      'EngineParams': ros.hashMapper(ros.objectToRosTemplate)(properties.engineParams),
      'MaxClusterCount': ros.numberToRosTemplate(properties.maxClusterCount),
      'MaxComputeResource': ros.stringToRosTemplate(properties.maxComputeResource),
      'MinClusterCount': ros.numberToRosTemplate(properties.minClusterCount),
      'MinComputeResource': ros.stringToRosTemplate(properties.minComputeResource),
      'Rules': ros.listMapper(rosResourceGroupRulesPropertyToRosTemplate)(properties.rules),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::ResourceGroup`, which is used to create a resource group for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
 */
export class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::ResourceGroup";

    /**
     * @Attribute GroupName: The name of the resource group.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute GroupType: The type of the resource group.
     */
    public readonly attrGroupType: ros.IResolvable;

    /**
     * @Attribute GroupUsers: The list of users in the resource group.
     */
    public readonly attrGroupUsers: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property engine: Database engine, value:
     * AnalyticDB (default): AnalyticDB for mysql engine.
     * Sparkwarehouse: Sparkwarehous engine.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the resource group.
     * The name can be up to 255 characters in length.
     * The name must start with a letter or digit.
     * The name can contain letters, digits, hyphens (-), and underscores (_).
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property groupType: The type of the resource group. Valid values:
     * Interactive
     * Job
     * Note For more information about resource groups, see Resource group overview.
     */
    public groupType: string | ros.IResolvable;

    /**
     * @Property autoStopInterval: Automatically stop time, the unit is minutes (m).
     */
    public autoStopInterval: string | ros.IResolvable | undefined;

    /**
     * @Property clusterMode: The mode of cluster. Default: AutoScale.
     */
    public clusterMode: string | ros.IResolvable | undefined;

    /**
     * @Property clusterSizeResource: A reserved parameter.
     */
    public clusterSizeResource: string | ros.IResolvable | undefined;

    /**
     * @Property enableSpot: Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
     * True
     * False
     */
    public enableSpot: boolean | ros.IResolvable | undefined;

    /**
     * @Property engineParams: Engine configuration.
     */
    public engineParams: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property maxClusterCount: A reserved parameter.
     */
    public maxClusterCount: number | ros.IResolvable | undefined;

    /**
     * @Property maxComputeResource: The maximum reserved computing resources.
     * If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
     * If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
     */
    public maxComputeResource: string | ros.IResolvable | undefined;

    /**
     * @Property minClusterCount: A reserved parameter.
     */
    public minClusterCount: number | ros.IResolvable | undefined;

    /**
     * @Property minComputeResource: The minimum reserved computing resources.
     * When GroupType is set to Interactive, set this parameter to 16ACU.
     * When GroupType is set to Job, set this parameter to 0ACU.
     */
    public minComputeResource: string | ros.IResolvable | undefined;

    /**
     * @Property rules: The job resubmission rules.
     */
    public rules: Array<RosResourceGroup.RulesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = this.getAtt('GroupName');
        this.attrGroupType = this.getAtt('GroupType');
        this.attrGroupUsers = this.getAtt('GroupUsers');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.engine = props.engine;
        this.groupName = props.groupName;
        this.groupType = props.groupType;
        this.autoStopInterval = props.autoStopInterval;
        this.clusterMode = props.clusterMode;
        this.clusterSizeResource = props.clusterSizeResource;
        this.enableSpot = props.enableSpot;
        this.engineParams = props.engineParams;
        this.maxClusterCount = props.maxClusterCount;
        this.maxComputeResource = props.maxComputeResource;
        this.minClusterCount = props.minClusterCount;
        this.minComputeResource = props.minComputeResource;
        this.rules = props.rules;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            engine: this.engine,
            groupName: this.groupName,
            groupType: this.groupType,
            autoStopInterval: this.autoStopInterval,
            clusterMode: this.clusterMode,
            clusterSizeResource: this.clusterSizeResource,
            enableSpot: this.enableSpot,
            engineParams: this.engineParams,
            maxClusterCount: this.maxClusterCount,
            maxComputeResource: this.maxComputeResource,
            minClusterCount: this.minClusterCount,
            minComputeResource: this.minComputeResource,
            rules: this.rules,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosResourceGroup {
    /**
     * @stability external
     */
    export interface RulesProperty {
        /**
         * @Property groupName: The name of the resource group.
     * The name can be up to 255 characters in length.
     * The name must start with a letter or digit.
     * The name can contain letters, digits, hyphens (-), and underscores (_).
         */
        readonly groupName: string | ros.IResolvable;
        /**
         * @Property queryTime: The execution duration of the query. Unit: milliseconds.
         */
        readonly queryTime: string | ros.IResolvable;
        /**
         * @Property targetGroupName: The name of the resource group to which you want to resubmit the query job.
         */
        readonly targetGroupName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RulesProperty`
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceGroup_RulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('queryTime', ros.requiredValidator)(properties.queryTime));
    errors.collect(ros.propertyValidator('queryTime', ros.validateString)(properties.queryTime));
    errors.collect(ros.propertyValidator('targetGroupName', ros.requiredValidator)(properties.targetGroupName));
    errors.collect(ros.propertyValidator('targetGroupName', ros.validateString)(properties.targetGroupName));
    return errors.wrap('supplied properties not correct for "RulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::ResourceGroup.Rules` resource
 *
 * @param properties - the TypeScript properties of a `RulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::ResourceGroup.Rules` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceGroup_RulesPropertyValidator(properties).assertSuccess();
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'QueryTime': ros.stringToRosTemplate(properties.queryTime),
      'TargetGroupName': ros.stringToRosTemplate(properties.targetGroupName),
    };
}

/**
 * Properties for defining a `RosResourceGroupAccountBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
 */
export interface RosResourceGroupAccountBindingProps {

    /**
     * @Property accountName: The name of the account.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the database cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the resource group.
     */
    readonly groupName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosResourceGroupAccountBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupAccountBindingProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupAccountBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    if(properties.groupName && (Array.isArray(properties.groupName) || (typeof properties.groupName) === 'string')) {
        errors.collect(ros.propertyValidator('groupName', ros.validateLength)({
            data: properties.groupName.length,
            min: 1,
            max: 255,
          }));
    }
    if(properties.groupName && (typeof properties.groupName) !== 'object') {
        errors.collect(ros.propertyValidator('groupName', ros.validateAllowedPattern)({
          data: properties.groupName,
          reg: /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,254}$/
        }));
    }
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    if(properties.accountName && (Array.isArray(properties.accountName) || (typeof properties.accountName) === 'string')) {
        errors.collect(ros.propertyValidator('accountName', ros.validateLength)({
            data: properties.accountName.length,
            min: 2,
            max: 16,
          }));
    }
    if(properties.accountName && (typeof properties.accountName) !== 'object') {
        errors.collect(ros.propertyValidator('accountName', ros.validateAllowedPattern)({
          data: properties.accountName,
          reg: /^[a-z][a-z0-9_]{0,14}[a-z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosResourceGroupAccountBindingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::ResourceGroupAccountBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupAccountBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ADBLake::ResourceGroupAccountBinding` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupAccountBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupAccountBindingPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::ResourceGroupAccountBinding`, which is used to associate a resource group with a database account.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroupAccountBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
 */
export class RosResourceGroupAccountBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::ResourceGroupAccountBinding";

    /**
     * @Attribute GroupName: The name of the resource group.
     */
    public readonly attrGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: The name of the account.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property dbClusterId: The ID of the database cluster.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the resource group.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupAccountBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroupAccountBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = this.getAtt('GroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.dbClusterId = props.dbClusterId;
        this.groupName = props.groupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            dbClusterId: this.dbClusterId,
            groupName: this.groupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupAccountBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
