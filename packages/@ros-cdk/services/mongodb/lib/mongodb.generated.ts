// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::MONGODB::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,1000], increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property backupId: Specific backup set Id.
     */
    readonly backupId?: string;

    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;

    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string;

    /**
     * @Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property engineVersion: Database instance version.Support 3.2, 3.4, 4.0
     */
    readonly engineVersion?: string;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;

    /**
     * @Property period: The subscription period of the instance.Unit: months.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;

    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number;

    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB
     */
    readonly storageEngine?: string;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string;
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
    errors.collect(ros.propertyValidator('couponNo', ros.validateString)(properties.couponNo));
    errors.collect(ros.propertyValidator('businessInfo', ros.validateString)(properties.businessInfo));
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["3.2","3.4","4.0","4.2"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    if(properties.readonlyReplicas && (typeof properties.readonlyReplicas) !== 'object') {
        errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateAllowedValues)({
          data: properties.readonlyReplicas,
          allowedValues: [1,2,3,4,5],
        }));
    }
    errors.collect(ros.propertyValidator('readonlyReplicas', ros.validateNumber)(properties.readonlyReplicas));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
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
    errors.collect(ros.propertyValidator('backupId', ros.validateString)(properties.backupId));
    errors.collect(ros.propertyValidator('vpcPasswordFree', ros.validateBoolean)(properties.vpcPasswordFree));
    if(properties.storageEngine && (typeof properties.storageEngine) !== 'object') {
        errors.collect(ros.propertyValidator('storageEngine', ros.validateAllowedValues)({
          data: properties.storageEngine,
          allowedValues: ["WiredTiger","RocksDB"],
        }));
    }
    errors.collect(ros.propertyValidator('storageEngine', ros.validateString)(properties.storageEngine));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateString)(properties.restoreTime));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PostPaid","PrePaid"],
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
    errors.collect(ros.propertyValidator('databaseNames', ros.validateString)(properties.databaseNames));
    errors.collect(ros.propertyValidator('srcDbInstanceId', ros.validateString)(properties.srcDbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
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
      SecurityIPArray: ros.stringToRosTemplate(properties.securityIpArray),
      SrcDBInstanceId: ros.stringToRosTemplate(properties.srcDbInstanceId),
      StorageEngine: ros.stringToRosTemplate(properties.storageEngine),
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
    public readonly attrConnectionUri: any;

    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: any;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute ReplicaSetName: Name of replica set
     */
    public readonly attrReplicaSetName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    public dbInstanceClass: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,1000], increased every 5 GB, Unit in GB
     */
    public dbInstanceStorage: number;

    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    public accountPassword: string | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupId: Specific backup set Id.
     */
    public backupId: string | undefined;

    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    public businessInfo: string | undefined;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    public chargeType: string | undefined;

    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    public couponNo: string | undefined;

    /**
     * @Property databaseNames: The name of the database.
     */
    public databaseNames: string | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | undefined;

    /**
     * @Property engineVersion: Database instance version.Support 3.2, 3.4, 4.0
     */
    public engineVersion: string | undefined;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    public networkType: string | undefined;

    /**
     * @Property period: The subscription period of the instance.Unit: months.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | undefined;

    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    public readonlyReplicas: number | undefined;

    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    public replicationFactor: number | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    public restoreTime: string | undefined;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    public securityIpArray: string | undefined;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    public srcDbInstanceId: string | undefined;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB
     */
    public storageEngine: string | undefined;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    public vpcId: string | undefined;

    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    public vpcPasswordFree: boolean | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::MONGODB::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionUri = ros.Token.asString(this.getAtt('ConnectionURI'));
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));
        this.attrDbInstanceStatus = ros.Token.asString(this.getAtt('DBInstanceStatus'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrReplicaSetName = ros.Token.asString(this.getAtt('ReplicaSetName'));

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
        this.securityIpArray = props.securityIpArray;
        this.srcDbInstanceId = props.srcDbInstanceId;
        this.storageEngine = props.storageEngine;
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
            securityIpArray: this.securityIpArray,
            srcDbInstanceId: this.srcDbInstanceId,
            storageEngine: this.storageEngine,
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
    readonly accountPassword?: string;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property engineVersion: Database instance version.Support 3.2, 3.4, 4.0
     */
    readonly engineVersion?: string;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    readonly networkType?: string;

    /**
     * @Property period: The subscription period of the instance.Unit: months.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number;

    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    readonly securityIpArray?: string;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB
     */
    readonly storageEngine?: string;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string;
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
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["3.2","3.4","4.0","4.2"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
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
          allowedValues: ["WiredTiger","RocksDB"],
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
          allowedValues: ["PostPaid","PrePaid"],
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
            max: 1,
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
      RestoreTime: ros.stringToRosTemplate(properties.restoreTime),
      SecurityIPArray: ros.stringToRosTemplate(properties.securityIpArray),
      SrcDBInstanceId: ros.stringToRosTemplate(properties.srcDbInstanceId),
      StorageEngine: ros.stringToRosTemplate(properties.storageEngine),
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
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    public readonly attrDbInstanceStatus: any;

    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    public readonly attrOrderId: any;

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
    public accountPassword: string | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    public chargeType: string | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | undefined;

    /**
     * @Property engineVersion: Database instance version.Support 3.2, 3.4, 4.0
     */
    public engineVersion: string | undefined;

    /**
     * @Property networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    public networkType: string | undefined;

    /**
     * @Property period: The subscription period of the instance.Unit: months.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    public period: number | undefined;

    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    public protocolType: string | undefined;

    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    public restoreTime: string | undefined;

    /**
     * @Property securityIpArray: Security ips to add or remove.
     */
    public securityIpArray: string | undefined;

    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    public srcDbInstanceId: string | undefined;

    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB
     */
    public storageEngine: string | undefined;

    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::MONGODB::ShardingInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosShardingInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));
        this.attrDbInstanceStatus = ros.Token.asString(this.getAtt('DBInstanceStatus'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));

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
        this.restoreTime = props.restoreTime;
        this.securityIpArray = props.securityIpArray;
        this.srcDbInstanceId = props.srcDbInstanceId;
        this.storageEngine = props.storageEngine;
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
            restoreTime: this.restoreTime,
            securityIpArray: this.securityIpArray,
            srcDbInstanceId: this.srcDbInstanceId,
            storageEngine: this.storageEngine,
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
        readonly storage: number;
        /**
         * @Property class: The specification of config server.
         */
        readonly class: string;
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
        readonly class: string;
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
        readonly storage: number;
        /**
         * @Property class: The specification of shard.
         */
        readonly class: string;
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
      Class: ros.stringToRosTemplate(properties.class),
    };
}
