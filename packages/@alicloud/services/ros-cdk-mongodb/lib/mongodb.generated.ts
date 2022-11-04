// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::MONGODB::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property backupId: Specific backup set Id.
     */
    readonly backupId?: string | ros.IResolvable;

    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string | ros.IResolvable;

    /**
     * @Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number | ros.IResolvable;

    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group. 
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string | ros.IResolvable;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
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
    errors.collect(ros.propertyValidator('businessInfo', ros.validateString)(properties.businessInfo));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('securityIpArray', ros.validateString)(properties.securityIpArray));
    errors.collect(ros.propertyValidator('backupId', ros.validateString)(properties.backupId));
    if(properties.storageEngine && (typeof properties.storageEngine) !== 'object') {
        errors.collect(ros.propertyValidator('storageEngine', ros.validateAllowedValues)({
          data: properties.storageEngine,
          allowedValues: ["WiredTiger","RocksDB","TerarkDB"],
        }));
    }
    errors.collect(ros.propertyValidator('storageEngine', ros.validateString)(properties.storageEngine));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateString)(properties.restoreTime));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["CLASSIC","VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('couponNo', ros.validateString)(properties.couponNo));
    errors.collect(ros.propertyValidator('tdeStatus', ros.validateBoolean)(properties.tdeStatus));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    if(properties.readonlyReplicas && (typeof properties.readonlyReplicas) !== 'object') {
        errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateAllowedValues)({
          data: properties.readonlyReplicas,
          allowedValues: [1,2,3,4,5],
        }));
    }
    errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateNumber)(properties.readonlyReplicas));
    if(properties.replicationFactor && (typeof properties.replicationFactor) !== 'object') {
        errors.collect(ros.propertyValidator('replicationFactor', ros.validateAllowedValues)({
          data: properties.replicationFactor,
          allowedValues: [3,5,7],
        }));
    }
    errors.collect(ros.propertyValidator('replicationFactor', ros.validateNumber)(properties.replicationFactor));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('databaseNames', ros.validateString)(properties.databaseNames));
    errors.collect(ros.propertyValidator('srcDbInstanceId', ros.validateString)(properties.srcDbInstanceId));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceStorage: ros.numberToRosTemplate(properties.dbInstanceStorage),
      AccountPassword: ros.stringToRosTemplate(properties.accountPassword),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      BackupId: ros.stringToRosTemplate(properties.backupId),
      BusinessInfo: ros.stringToRosTemplate(properties.businessInfo),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      CouponNo: ros.stringToRosTemplate(properties.couponNo),
      DatabaseNames: ros.stringToRosTemplate(properties.databaseNames),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      Period: ros.numberToRosTemplate(properties.period),
      ReadonlyReplicas: ros.numberToRosTemplate(properties.readonlyReplicas),
      ReplicationFactor: ros.numberToRosTemplate(properties.replicationFactor),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RestoreTime: ros.stringToRosTemplate(properties.restoreTime),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityIPArray: ros.stringToRosTemplate(properties.securityIpArray),
      SrcDBInstanceId: ros.stringToRosTemplate(properties.srcDbInstanceId),
      StorageEngine: ros.stringToRosTemplate(properties.storageEngine),
      Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
      TDEStatus: ros.booleanToRosTemplate(properties.tdeStatus),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VpcPasswordFree: ros.booleanToRosTemplate(properties.vpcPasswordFree),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::MONGODB::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    public readonly attrConnectionUri: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute ReplicaSetName: Name of replica set
     */
    public readonly attrReplicaSetName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    public dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    public dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    public accountPassword: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupId: Specific backup set Id.
     */
    public backupId: string | ros.IResolvable | undefined;

    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    public businessInfo: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    public couponNo: string | ros.IResolvable | undefined;

    /**
     * @Property databaseNames: The name of the database.
     */
    public databaseNames: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    public readonlyReplicas: number | ros.IResolvable | undefined;

    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    public replicationFactor: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    public restoreTime: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group. 
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    public securityIpArray: string | ros.IResolvable | undefined;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    public srcDbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    public storageEngine: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    public tdeStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    public vpcPasswordFree: boolean | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MONGODB::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionUri = this.getAtt('ConnectionURI');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbInstanceStatus = this.getAtt('DBInstanceStatus');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrReplicaSetName = this.getAtt('ReplicaSetName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.accountPassword = props.accountPassword;
        this.autoRenew = props.autoRenew;
        this.backupId = props.backupId;
        this.businessInfo = props.businessInfo;
        this.chargeType = props.chargeType;
        this.couponNo = props.couponNo;
        this.databaseNames = props.databaseNames;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.engineVersion = props.engineVersion;
        this.networkType = props.networkType;
        this.period = props.period;
        this.readonlyReplicas = props.readonlyReplicas;
        this.replicationFactor = props.replicationFactor;
        this.resourceGroupId = props.resourceGroupId;
        this.restoreTime = props.restoreTime;
        this.securityGroupId = props.securityGroupId;
        this.securityIpArray = props.securityIpArray;
        this.srcDbInstanceId = props.srcDbInstanceId;
        this.storageEngine = props.storageEngine;
        this.tags = props.tags;
        this.tdeStatus = props.tdeStatus;
        this.vpcId = props.vpcId;
        this.vpcPasswordFree = props.vpcPasswordFree;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceStorage: this.dbInstanceStorage,
            accountPassword: this.accountPassword,
            autoRenew: this.autoRenew,
            backupId: this.backupId,
            businessInfo: this.businessInfo,
            chargeType: this.chargeType,
            couponNo: this.couponNo,
            databaseNames: this.databaseNames,
            dbInstanceDescription: this.dbInstanceDescription,
            engineVersion: this.engineVersion,
            networkType: this.networkType,
            period: this.period,
            readonlyReplicas: this.readonlyReplicas,
            replicationFactor: this.replicationFactor,
            resourceGroupId: this.resourceGroupId,
            restoreTime: this.restoreTime,
            securityGroupId: this.securityGroupId,
            securityIpArray: this.securityIpArray,
            srcDbInstanceId: this.srcDbInstanceId,
            storageEngine: this.storageEngine,
            tags: this.tags,
            tdeStatus: this.tdeStatus,
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::Instance.Tags` resource.
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
 * Properties for defining a `ALIYUN::MONGODB::ServerlessInstance`
 */
export interface RosServerlessInstanceProps {

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version.Support 4.2
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodPriceType: Charge period for created instance.
     */
    readonly periodPriceType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string | ros.IResolvable;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger
     */
    readonly storageEngine?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosServerlessInstance.TagsProperty[];

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServerlessInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosServerlessInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosServerlessInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tdeStatus', ros.validateBoolean)(properties.tdeStatus));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('securityIpArray', ros.validateString)(properties.securityIpArray));
    if(properties.storageEngine && (typeof properties.storageEngine) !== 'object') {
        errors.collect(ros.propertyValidator('storageEngine', ros.validateAllowedValues)({
          data: properties.storageEngine,
          allowedValues: ["WiredTiger"],
        }));
    }
    errors.collect(ros.propertyValidator('storageEngine', ros.validateString)(properties.storageEngine));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["CLASSIC","VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    if(properties.periodPriceType && (typeof properties.periodPriceType) !== 'object') {
        errors.collect(ros.propertyValidator('periodPriceType', ros.validateAllowedValues)({
          data: properties.periodPriceType,
          allowedValues: ["Day","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('periodPriceType', ros.validateString)(properties.periodPriceType));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosServerlessInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosServerlessInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ServerlessInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosServerlessInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ServerlessInstance` resource.
 */
// @ts-ignore TS6133
function rosServerlessInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServerlessInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceStorage: ros.numberToRosTemplate(properties.dbInstanceStorage),
      AccountPassword: ros.stringToRosTemplate(properties.accountPassword),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodPriceType: ros.stringToRosTemplate(properties.periodPriceType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityIPArray: ros.stringToRosTemplate(properties.securityIpArray),
      StorageEngine: ros.stringToRosTemplate(properties.storageEngine),
      Tags: ros.listMapper(rosServerlessInstanceTagsPropertyToRosTemplate)(properties.tags),
      TDEStatus: ros.booleanToRosTemplate(properties.tdeStatus),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::MONGODB::ServerlessInstance`
 */
export class RosServerlessInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ServerlessInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    public readonly attrConnectionUri: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
     */
    public dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    public accountPassword: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Database instance version.Support 4.2
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodPriceType: Charge period for created instance.
     */
    public periodPriceType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    public securityIpArray: string | ros.IResolvable | undefined;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger
     */
    public storageEngine: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosServerlessInstance.TagsProperty[] | undefined;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    public tdeStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MONGODB::ServerlessInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerlessInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServerlessInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionUri = this.getAtt('ConnectionURI');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbInstanceStatus = this.getAtt('DBInstanceStatus');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.accountPassword = props.accountPassword;
        this.autoRenew = props.autoRenew;
        this.chargeType = props.chargeType;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.engineVersion = props.engineVersion;
        this.networkType = props.networkType;
        this.period = props.period;
        this.periodPriceType = props.periodPriceType;
        this.resourceGroupId = props.resourceGroupId;
        this.securityIpArray = props.securityIpArray;
        this.storageEngine = props.storageEngine;
        this.tags = props.tags;
        this.tdeStatus = props.tdeStatus;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceStorage: this.dbInstanceStorage,
            accountPassword: this.accountPassword,
            autoRenew: this.autoRenew,
            chargeType: this.chargeType,
            dbInstanceDescription: this.dbInstanceDescription,
            engineVersion: this.engineVersion,
            networkType: this.networkType,
            period: this.period,
            periodPriceType: this.periodPriceType,
            resourceGroupId: this.resourceGroupId,
            securityIpArray: this.securityIpArray,
            storageEngine: this.storageEngine,
            tags: this.tags,
            tdeStatus: this.tdeStatus,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServerlessInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServerlessInstance {
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
function RosServerlessInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ServerlessInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ServerlessInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosServerlessInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerlessInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::MONGODB::ShardingInstance`
 */
export interface RosShardingInstanceProps {

    /**
     * @Property configServer:
     */
    readonly configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property mongos:
     */
    readonly mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property replicaSet:
     */
    readonly replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string | ros.IResolvable;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosShardingInstance.TagsProperty[];

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosShardingInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosShardingInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosShardingInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tdeStatus', ros.validateBoolean)(properties.tdeStatus));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('securityIpArray', ros.validateString)(properties.securityIpArray));
    errors.collect(ros.propertyValidator('mongos', ros.requiredValidator)(properties.mongos));
    if(properties.mongos && (Array.isArray(properties.mongos) || (typeof properties.mongos) === 'string')) {
        errors.collect(ros.propertyValidator('mongos', ros.validateLength)({
            data: properties.mongos.length,
            min: 2,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('mongos', ros.listValidator(RosShardingInstance_MongosPropertyValidator))(properties.mongos));
    if(properties.storageEngine && (typeof properties.storageEngine) !== 'object') {
        errors.collect(ros.propertyValidator('storageEngine', ros.validateAllowedValues)({
          data: properties.storageEngine,
          allowedValues: ["WiredTiger","RocksDB","TerarkDB"],
        }));
    }
    errors.collect(ros.propertyValidator('storageEngine', ros.validateString)(properties.storageEngine));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateString)(properties.restoreTime));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["mongodb","dynamodb"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["CLASSIC","VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('configServer', ros.requiredValidator)(properties.configServer));
    if(properties.configServer && (Array.isArray(properties.configServer) || (typeof properties.configServer) === 'string')) {
        errors.collect(ros.propertyValidator('configServer', ros.validateLength)({
            data: properties.configServer.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('configServer', ros.listValidator(RosShardingInstance_ConfigServerPropertyValidator))(properties.configServer));
    errors.collect(ros.propertyValidator('srcDbInstanceId', ros.validateString)(properties.srcDbInstanceId));
    errors.collect(ros.propertyValidator('replicaSet', ros.requiredValidator)(properties.replicaSet));
    if(properties.replicaSet && (Array.isArray(properties.replicaSet) || (typeof properties.replicaSet) === 'string')) {
        errors.collect(ros.propertyValidator('replicaSet', ros.validateLength)({
            data: properties.replicaSet.length,
            min: 2,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('replicaSet', ros.listValidator(RosShardingInstance_ReplicaSetPropertyValidator))(properties.replicaSet));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosShardingInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosShardingInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosShardingInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance` resource.
 */
// @ts-ignore TS6133
function rosShardingInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosShardingInstancePropsValidator(properties).assertSuccess();
    }
    return {
      ConfigServer: ros.listMapper(rosShardingInstanceConfigServerPropertyToRosTemplate)(properties.configServer),
      Mongos: ros.listMapper(rosShardingInstanceMongosPropertyToRosTemplate)(properties.mongos),
      ReplicaSet: ros.listMapper(rosShardingInstanceReplicaSetPropertyToRosTemplate)(properties.replicaSet),
      AccountPassword: ros.stringToRosTemplate(properties.accountPassword),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      Period: ros.numberToRosTemplate(properties.period),
      ProtocolType: ros.stringToRosTemplate(properties.protocolType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RestoreTime: ros.stringToRosTemplate(properties.restoreTime),
      SecurityIPArray: ros.stringToRosTemplate(properties.securityIpArray),
      SrcDBInstanceId: ros.stringToRosTemplate(properties.srcDbInstanceId),
      StorageEngine: ros.stringToRosTemplate(properties.storageEngine),
      Tags: ros.listMapper(rosShardingInstanceTagsPropertyToRosTemplate)(properties.tags),
      TDEStatus: ros.booleanToRosTemplate(properties.tdeStatus),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::MONGODB::ShardingInstance`
 */
export class RosShardingInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configServer:
     */
    public configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property mongos:
     */
    public mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property replicaSet:
     */
    public replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    public accountPassword: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    public protocolType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    public restoreTime: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    public securityIpArray: string | ros.IResolvable | undefined;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    public srcDbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    public storageEngine: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosShardingInstance.TagsProperty[] | undefined;

    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    public tdeStatus: boolean | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MONGODB::ShardingInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosShardingInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbInstanceStatus = this.getAtt('DBInstanceStatus');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configServer = props.configServer;
        this.mongos = props.mongos;
        this.replicaSet = props.replicaSet;
        this.accountPassword = props.accountPassword;
        this.autoRenew = props.autoRenew;
        this.chargeType = props.chargeType;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.engineVersion = props.engineVersion;
        this.networkType = props.networkType;
        this.period = props.period;
        this.protocolType = props.protocolType;
        this.resourceGroupId = props.resourceGroupId;
        this.restoreTime = props.restoreTime;
        this.securityIpArray = props.securityIpArray;
        this.srcDbInstanceId = props.srcDbInstanceId;
        this.storageEngine = props.storageEngine;
        this.tags = props.tags;
        this.tdeStatus = props.tdeStatus;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configServer: this.configServer,
            mongos: this.mongos,
            replicaSet: this.replicaSet,
            accountPassword: this.accountPassword,
            autoRenew: this.autoRenew,
            chargeType: this.chargeType,
            dbInstanceDescription: this.dbInstanceDescription,
            engineVersion: this.engineVersion,
            networkType: this.networkType,
            period: this.period,
            protocolType: this.protocolType,
            resourceGroupId: this.resourceGroupId,
            restoreTime: this.restoreTime,
            securityIpArray: this.securityIpArray,
            srcDbInstanceId: this.srcDbInstanceId,
            storageEngine: this.storageEngine,
            tags: this.tags,
            tdeStatus: this.tdeStatus,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosShardingInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosShardingInstance {
    /**
     * @stability external
     */
    export interface ConfigServerProperty {
        /**
         * @Property storage: The storage space of config server. Valid value: 20. Unit: GB.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property class: The specification of config server.
         */
        readonly class: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigServerProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigServerProperty`
 *
 * @returns the result of the validation.
 */
function RosShardingInstance_ConfigServerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storage', ros.requiredValidator)(properties.storage));
    errors.collect(ros.propertyValidator('storage', ros.validateNumber)(properties.storage));
    errors.collect(ros.propertyValidator('class', ros.requiredValidator)(properties.class));
    errors.collect(ros.propertyValidator('class', ros.validateString)(properties.class));
    return errors.wrap('supplied properties not correct for "ConfigServerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ConfigServer` resource
 *
 * @param properties - the TypeScript properties of a `ConfigServerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ConfigServer` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceConfigServerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_ConfigServerPropertyValidator(properties).assertSuccess();
    return {
      Storage: ros.numberToRosTemplate(properties.storage),
      Class: ros.stringToRosTemplate(properties.class),
    };
}

export namespace RosShardingInstance {
    /**
     * @stability external
     */
    export interface MongosProperty {
        /**
         * @Property class: The specification of mongo.
         */
        readonly class: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MongosProperty`
 *
 * @param properties - the TypeScript properties of a `MongosProperty`
 *
 * @returns the result of the validation.
 */
function RosShardingInstance_MongosPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('class', ros.requiredValidator)(properties.class));
    errors.collect(ros.propertyValidator('class', ros.validateString)(properties.class));
    return errors.wrap('supplied properties not correct for "MongosProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Mongos` resource
 *
 * @param properties - the TypeScript properties of a `MongosProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Mongos` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceMongosPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_MongosPropertyValidator(properties).assertSuccess();
    return {
      Class: ros.stringToRosTemplate(properties.class),
    };
}

export namespace RosShardingInstance {
    /**
     * @stability external
     */
    export interface ReplicaSetProperty {
        /**
         * @Property storage: The storage space of shard.
     * Valid values: 10 to 2000. Unit: GB.
     * You can only specify this value in 10 GB increments.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property readonlyReplicas: The number of read-only nodes in shard node.
         */
        readonly readonlyReplicas?: number | ros.IResolvable;
        /**
         * @Property class: The specification of shard.
         */
        readonly class: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ReplicaSetProperty`
 *
 * @param properties - the TypeScript properties of a `ReplicaSetProperty`
 *
 * @returns the result of the validation.
 */
function RosShardingInstance_ReplicaSetPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storage', ros.requiredValidator)(properties.storage));
    errors.collect(ros.propertyValidator('storage', ros.validateNumber)(properties.storage));
    if(properties.readonlyReplicas && (typeof properties.readonlyReplicas) !== 'object') {
        errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateRange)({
            data: properties.readonlyReplicas,
            min: 0,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateNumber)(properties.readonlyReplicas));
    errors.collect(ros.propertyValidator('class', ros.requiredValidator)(properties.class));
    errors.collect(ros.propertyValidator('class', ros.validateString)(properties.class));
    return errors.wrap('supplied properties not correct for "ReplicaSetProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ReplicaSet` resource
 *
 * @param properties - the TypeScript properties of a `ReplicaSetProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.ReplicaSet` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceReplicaSetPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_ReplicaSetPropertyValidator(properties).assertSuccess();
    return {
      Storage: ros.numberToRosTemplate(properties.storage),
      ReadonlyReplicas: ros.numberToRosTemplate(properties.readonlyReplicas),
      Class: ros.stringToRosTemplate(properties.class),
    };
}

export namespace RosShardingInstance {
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
function RosShardingInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MONGODB::ShardingInstance.Tags` resource.
 */
// @ts-ignore TS6133
function rosShardingInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosShardingInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
