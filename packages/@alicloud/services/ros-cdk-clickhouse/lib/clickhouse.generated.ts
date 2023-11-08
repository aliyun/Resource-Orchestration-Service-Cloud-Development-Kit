// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ClickHouse::DBCluster`
 */
export interface RosDBClusterProps {

    /**
     * @Property category: The edition of the cluster. Valid values:
     * Basic: Single-replica Edition
     * HighAvailability: Double-replica Edition
     */
    readonly category: string | ros.IResolvable;

    /**
     * @Property dbClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    readonly dbClusterNetworkType: string | ros.IResolvable;

    /**
     * @Property dbClusterType: The specification of the cluster.
     * If the cluster is of the Single-replica Edition, the following values are valid:
     * S4: 4 cores, 16 GB.
     * S8: 8 cores, 32 GB.
     * S16: 16 cores, 64 GB.
     * S32: 32 cores, 128 GB.
     * S64: 64 cores, 256 GB.
     * S104: 104 cores, 384 GB.
     * If the cluster is of the Double-replica Edition, the following values are valid:
     * C4: 4 cores, 16 GB.
     * C8: 8 cores, 32 GB.
     * C16: 16 cores, 64 GB.
     * C32: 32 cores, 128 GB.
     * C64: 64 cores, 256 GB.
     * C104: 104 cores, 384 GB.
     */
    readonly dbClusterType: string | ros.IResolvable;

    /**
     * @Property dbClusterVersion: Version, value:  19.15.2.2
     */
    readonly dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property dbNodeCount: The number of nodes.
     * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
     * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
     */
    readonly dbNodeCount: number | ros.IResolvable;

    /**
     * @Property dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
     * Note self value is a multiple of 100.
     */
    readonly dbNodeStorage: number | ros.IResolvable;

    /**
     * @Property dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    readonly dbNodeStorageType: string | ros.IResolvable;

    /**
     * @Property paymentType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * @Property encryptionKey: KMS key ID
     */
    readonly encryptionKey?: string | ros.IResolvable;

    /**
     * @Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    readonly encryptionType?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property usedTime: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 9, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    readonly usedTime?: number | ros.IResolvable;

    /**
     * @Property vpcId: VpcId
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitchId
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: ZoneId
     */
    readonly zoneId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dbNodeStorageType', ros.requiredValidator)(properties.dbNodeStorageType));
    errors.collect(ros.propertyValidator('dbNodeStorageType', ros.validateString)(properties.dbNodeStorageType));
    errors.collect(ros.propertyValidator('dbNodeStorage', ros.requiredValidator)(properties.dbNodeStorage));
    errors.collect(ros.propertyValidator('dbNodeStorage', ros.validateNumber)(properties.dbNodeStorage));
    errors.collect(ros.propertyValidator('encryptionType', ros.validateString)(properties.encryptionType));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.dbClusterDescription && (Array.isArray(properties.dbClusterDescription) || (typeof properties.dbClusterDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateLength)({
            data: properties.dbClusterDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbClusterDescription', ros.validateString)(properties.dbClusterDescription));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('dbClusterNetworkType', ros.requiredValidator)(properties.dbClusterNetworkType));
    errors.collect(ros.propertyValidator('dbClusterNetworkType', ros.validateString)(properties.dbClusterNetworkType));
    errors.collect(ros.propertyValidator('dbClusterType', ros.requiredValidator)(properties.dbClusterType));
    errors.collect(ros.propertyValidator('dbClusterType', ros.validateString)(properties.dbClusterType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.requiredValidator)(properties.dbClusterVersion));
    errors.collect(ros.propertyValidator('dbClusterVersion', ros.validateString)(properties.dbClusterVersion));
    errors.collect(ros.propertyValidator('dbNodeCount', ros.requiredValidator)(properties.dbNodeCount));
    errors.collect(ros.propertyValidator('dbNodeCount', ros.validateNumber)(properties.dbNodeCount));
    if(properties.usedTime && (typeof properties.usedTime) !== 'object') {
        errors.collect(ros.propertyValidator('usedTime', ros.validateAllowedValues)({
          data: properties.usedTime,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('usedTime', ros.validateNumber)(properties.usedTime));
    errors.collect(ros.propertyValidator('paymentType', ros.requiredValidator)(properties.paymentType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    return errors.wrap('supplied properties not correct for "RosDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::DBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::DBCluster` resource.
 */
// @ts-ignore TS6133
function rosDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      Category: ros.stringToRosTemplate(properties.category),
      DBClusterNetworkType: ros.stringToRosTemplate(properties.dbClusterNetworkType),
      DBClusterType: ros.stringToRosTemplate(properties.dbClusterType),
      DBClusterVersion: ros.stringToRosTemplate(properties.dbClusterVersion),
      DBNodeCount: ros.numberToRosTemplate(properties.dbNodeCount),
      DBNodeStorage: ros.numberToRosTemplate(properties.dbNodeStorage),
      DbNodeStorageType: ros.stringToRosTemplate(properties.dbNodeStorageType),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      DBClusterDescription: ros.stringToRosTemplate(properties.dbClusterDescription),
      EncryptionKey: ros.stringToRosTemplate(properties.encryptionKey),
      EncryptionType: ros.stringToRosTemplate(properties.encryptionType),
      Period: ros.stringToRosTemplate(properties.period),
      UsedTime: ros.numberToRosTemplate(properties.usedTime),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ClickHouse::DBCluster`
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::DBCluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AliUid: AliUid
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * @Attribute Bid: BusinessID
     */
    public readonly attrBid: ros.IResolvable;

    /**
     * @Attribute Category: The edition of the cluster.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute CommodityCode: Product Code
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * @Attribute ConnectionString: ConnectionString
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBClusterDescription: The description of the cluster.
     */
    public readonly attrDbClusterDescription: ros.IResolvable;

    /**
     * @Attribute DBClusterId: The id of DBCluster
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * @Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    public readonly attrDbClusterNetworkType: ros.IResolvable;

    /**
     * @Attribute DBClusterType: The specification of the cluster.
     */
    public readonly attrDbClusterType: ros.IResolvable;

    /**
     * @Attribute DBClusterVersion: Version, value:  19.15.2.2
     */
    public readonly attrDbClusterVersion: ros.IResolvable;

    /**
     * @Attribute DBNodeClass: DBNodeClass
     */
    public readonly attrDbNodeClass: ros.IResolvable;

    /**
     * @Attribute DBNodeCount: The number of nodes.
     */
    public readonly attrDbNodeCount: ros.IResolvable;

    /**
     * @Attribute DBNodeStorage: The storage capacity of a single node.
     */
    public readonly attrDbNodeStorage: ros.IResolvable;

    /**
     * @Attribute DbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    public readonly attrDbNodeStorageType: ros.IResolvable;

    /**
     * @Attribute EncryptionKey: KMS key ID
     */
    public readonly attrEncryptionKey: ros.IResolvable;

    /**
     * @Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    public readonly attrEncryptionType: ros.IResolvable;

    /**
     * @Attribute Engine: Engine
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * @Attribute EngineVersion: EngineVersion
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute IsExpired: IsExpired
     */
    public readonly attrIsExpired: ros.IResolvable;

    /**
     * @Attribute LockMode: LockMode
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * @Attribute LockReason: Reason for lock
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * @Attribute PaymentType: PayType
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    public readonly attrPeriod: ros.IResolvable;

    /**
     * @Attribute Port: Connection port
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: Internet connection address
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicPort: PublicPort
     */
    public readonly attrPublicPort: ros.IResolvable;

    /**
     * @Attribute StorageType: StorageType
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * @Attribute VSwitchId: VSwitchId
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcCloudInstanceId: VpcCloudInstanceId
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * @Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: ZoneId
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The edition of the cluster. Valid values:
     * Basic: Single-replica Edition
     * HighAvailability: Double-replica Edition
     */
    public category: string | ros.IResolvable;

    /**
     * @Property dbClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    public dbClusterNetworkType: string | ros.IResolvable;

    /**
     * @Property dbClusterType: The specification of the cluster.
     * If the cluster is of the Single-replica Edition, the following values are valid:
     * S4: 4 cores, 16 GB.
     * S8: 8 cores, 32 GB.
     * S16: 16 cores, 64 GB.
     * S32: 32 cores, 128 GB.
     * S64: 64 cores, 256 GB.
     * S104: 104 cores, 384 GB.
     * If the cluster is of the Double-replica Edition, the following values are valid:
     * C4: 4 cores, 16 GB.
     * C8: 8 cores, 32 GB.
     * C16: 16 cores, 64 GB.
     * C32: 32 cores, 128 GB.
     * C64: 64 cores, 256 GB.
     * C104: 104 cores, 384 GB.
     */
    public dbClusterType: string | ros.IResolvable;

    /**
     * @Property dbClusterVersion: Version, value:  19.15.2.2
     */
    public dbClusterVersion: string | ros.IResolvable;

    /**
     * @Property dbNodeCount: The number of nodes.
     * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
     * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
     */
    public dbNodeCount: number | ros.IResolvable;

    /**
     * @Property dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
     * Note self value is a multiple of 100.
     */
    public dbNodeStorage: number | ros.IResolvable;

    /**
     * @Property dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    public dbNodeStorageType: string | ros.IResolvable;

    /**
     * @Property paymentType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    public paymentType: string | ros.IResolvable;

    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    public dbClusterDescription: string | ros.IResolvable | undefined;

    /**
     * @Property encryptionKey: KMS key ID
     */
    public encryptionKey: string | ros.IResolvable | undefined;

    /**
     * @Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    public encryptionType: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property usedTime: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 9, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    public usedTime: number | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VpcId
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: VSwitchId
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: ZoneId
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ClickHouse::DBCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliUid = this.getAtt('AliUid');
        this.attrBid = this.getAtt('Bid');
        this.attrCategory = this.getAtt('Category');
        this.attrCommodityCode = this.getAtt('CommodityCode');
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbClusterDescription = this.getAtt('DBClusterDescription');
        this.attrDbClusterId = this.getAtt('DBClusterId');
        this.attrDbClusterNetworkType = this.getAtt('DBClusterNetworkType');
        this.attrDbClusterType = this.getAtt('DBClusterType');
        this.attrDbClusterVersion = this.getAtt('DBClusterVersion');
        this.attrDbNodeClass = this.getAtt('DBNodeClass');
        this.attrDbNodeCount = this.getAtt('DBNodeCount');
        this.attrDbNodeStorage = this.getAtt('DBNodeStorage');
        this.attrDbNodeStorageType = this.getAtt('DbNodeStorageType');
        this.attrEncryptionKey = this.getAtt('EncryptionKey');
        this.attrEncryptionType = this.getAtt('EncryptionType');
        this.attrEngine = this.getAtt('Engine');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrIsExpired = this.getAtt('IsExpired');
        this.attrLockMode = this.getAtt('LockMode');
        this.attrLockReason = this.getAtt('LockReason');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPeriod = this.getAtt('Period');
        this.attrPort = this.getAtt('Port');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrPublicPort = this.getAtt('PublicPort');
        this.attrStorageType = this.getAtt('StorageType');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcCloudInstanceId = this.getAtt('VpcCloudInstanceId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.dbClusterNetworkType = props.dbClusterNetworkType;
        this.dbClusterType = props.dbClusterType;
        this.dbClusterVersion = props.dbClusterVersion;
        this.dbNodeCount = props.dbNodeCount;
        this.dbNodeStorage = props.dbNodeStorage;
        this.dbNodeStorageType = props.dbNodeStorageType;
        this.paymentType = props.paymentType;
        this.dbClusterDescription = props.dbClusterDescription;
        this.encryptionKey = props.encryptionKey;
        this.encryptionType = props.encryptionType;
        this.period = props.period;
        this.usedTime = props.usedTime;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            dbClusterNetworkType: this.dbClusterNetworkType,
            dbClusterType: this.dbClusterType,
            dbClusterVersion: this.dbClusterVersion,
            dbNodeCount: this.dbNodeCount,
            dbNodeStorage: this.dbNodeStorage,
            dbNodeStorageType: this.dbNodeStorageType,
            paymentType: this.paymentType,
            dbClusterDescription: this.dbClusterDescription,
            encryptionKey: this.encryptionKey,
            encryptionType: this.encryptionType,
            period: this.period,
            usedTime: this.usedTime,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ClickHouse::SynDb`
 */
export interface RosSynDbProps {

    /**
     * @Property ckPassword: The password of the database account
     */
    readonly ckPassword: string | ros.IResolvable;

    /**
     * @Property ckUserName: The account of the clickhouse database.
     */
    readonly ckUserName: string | ros.IResolvable;

    /**
     * @Property dbClusterId: Clickhouse cluster id.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property rdsId: The instance id of RDS.
     */
    readonly rdsId: string | ros.IResolvable;

    /**
     * @Property rdsPassword: The password of the RDS database account.
     */
    readonly rdsPassword: string | ros.IResolvable;

    /**
     * @Property rdsUserName: The account of the RDS database.
     */
    readonly rdsUserName: string | ros.IResolvable;

    /**
     * @Property skipUnsupported: Skip unsupported table or not.
     */
    readonly skipUnsupported: boolean | ros.IResolvable;

    /**
     * @Property synDbTables: The tables to syn.
     */
    readonly synDbTables: Array<RosSynDb.SynDbTablesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clickhousePort: The port of clickhouse id.
     */
    readonly clickhousePort?: number | ros.IResolvable;

    /**
     * @Property limitUpper: The maximum number of rows to sync per second.
     */
    readonly limitUpper?: number | ros.IResolvable;

    /**
     * @Property rdsPort: The port of rds.
     */
    readonly rdsPort?: number | ros.IResolvable;

    /**
     * @Property rdsVpcId: The vpc of rds.
     */
    readonly rdsVpcId?: string | ros.IResolvable;

    /**
     * @Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    readonly rdsVpcUrl?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSynDbProps`
 *
 * @param properties - the TypeScript properties of a `RosSynDbProps`
 *
 * @returns the result of the validation.
 */
function RosSynDbPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rdsVpcUrl', ros.validateString)(properties.rdsVpcUrl));
    errors.collect(ros.propertyValidator('limitUpper', ros.validateNumber)(properties.limitUpper));
    errors.collect(ros.propertyValidator('skipUnsupported', ros.requiredValidator)(properties.skipUnsupported));
    errors.collect(ros.propertyValidator('skipUnsupported', ros.validateBoolean)(properties.skipUnsupported));
    errors.collect(ros.propertyValidator('rdsId', ros.requiredValidator)(properties.rdsId));
    errors.collect(ros.propertyValidator('rdsId', ros.validateString)(properties.rdsId));
    errors.collect(ros.propertyValidator('rdsPassword', ros.requiredValidator)(properties.rdsPassword));
    errors.collect(ros.propertyValidator('rdsPassword', ros.validateString)(properties.rdsPassword));
    errors.collect(ros.propertyValidator('rdsUserName', ros.requiredValidator)(properties.rdsUserName));
    errors.collect(ros.propertyValidator('rdsUserName', ros.validateString)(properties.rdsUserName));
    errors.collect(ros.propertyValidator('ckPassword', ros.requiredValidator)(properties.ckPassword));
    errors.collect(ros.propertyValidator('ckPassword', ros.validateString)(properties.ckPassword));
    errors.collect(ros.propertyValidator('ckUserName', ros.requiredValidator)(properties.ckUserName));
    errors.collect(ros.propertyValidator('ckUserName', ros.validateString)(properties.ckUserName));
    errors.collect(ros.propertyValidator('clickhousePort', ros.validateNumber)(properties.clickhousePort));
    errors.collect(ros.propertyValidator('synDbTables', ros.requiredValidator)(properties.synDbTables));
    if(properties.synDbTables && (Array.isArray(properties.synDbTables) || (typeof properties.synDbTables) === 'string')) {
        errors.collect(ros.propertyValidator('synDbTables', ros.validateLength)({
            data: properties.synDbTables.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('synDbTables', ros.listValidator(RosSynDb_SynDbTablesPropertyValidator))(properties.synDbTables));
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('rdsPort', ros.validateNumber)(properties.rdsPort));
    errors.collect(ros.propertyValidator('rdsVpcId', ros.validateString)(properties.rdsVpcId));
    return errors.wrap('supplied properties not correct for "RosSynDbProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::SynDb` resource
 *
 * @param properties - the TypeScript properties of a `RosSynDbProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::SynDb` resource.
 */
// @ts-ignore TS6133
function rosSynDbPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSynDbPropsValidator(properties).assertSuccess();
    }
    return {
      CkPassword: ros.stringToRosTemplate(properties.ckPassword),
      CkUserName: ros.stringToRosTemplate(properties.ckUserName),
      DbClusterId: ros.stringToRosTemplate(properties.dbClusterId),
      RdsId: ros.stringToRosTemplate(properties.rdsId),
      RdsPassword: ros.stringToRosTemplate(properties.rdsPassword),
      RdsUserName: ros.stringToRosTemplate(properties.rdsUserName),
      SkipUnsupported: ros.booleanToRosTemplate(properties.skipUnsupported),
      SynDbTables: ros.listMapper(rosSynDbSynDbTablesPropertyToRosTemplate)(properties.synDbTables),
      ClickhousePort: ros.numberToRosTemplate(properties.clickhousePort),
      LimitUpper: ros.numberToRosTemplate(properties.limitUpper),
      RdsPort: ros.numberToRosTemplate(properties.rdsPort),
      RdsVpcId: ros.stringToRosTemplate(properties.rdsVpcId),
      RdsVpcUrl: ros.stringToRosTemplate(properties.rdsVpcUrl),
    };
}

/**
 * A ROS template type:  `ALIYUN::ClickHouse::SynDb`
 */
export class RosSynDb extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::SynDb";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DbClusterId: The id of clickhouse.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * @Attribute RdsId: The id of RDS
     */
    public readonly attrRdsId: ros.IResolvable;

    /**
     * @Attribute SynDbs: Sync Dbs
     */
    public readonly attrSynDbs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ckPassword: The password of the database account
     */
    public ckPassword: string | ros.IResolvable;

    /**
     * @Property ckUserName: The account of the clickhouse database.
     */
    public ckUserName: string | ros.IResolvable;

    /**
     * @Property dbClusterId: Clickhouse cluster id.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property rdsId: The instance id of RDS.
     */
    public rdsId: string | ros.IResolvable;

    /**
     * @Property rdsPassword: The password of the RDS database account.
     */
    public rdsPassword: string | ros.IResolvable;

    /**
     * @Property rdsUserName: The account of the RDS database.
     */
    public rdsUserName: string | ros.IResolvable;

    /**
     * @Property skipUnsupported: Skip unsupported table or not.
     */
    public skipUnsupported: boolean | ros.IResolvable;

    /**
     * @Property synDbTables: The tables to syn.
     */
    public synDbTables: Array<RosSynDb.SynDbTablesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clickhousePort: The port of clickhouse id.
     */
    public clickhousePort: number | ros.IResolvable | undefined;

    /**
     * @Property limitUpper: The maximum number of rows to sync per second.
     */
    public limitUpper: number | ros.IResolvable | undefined;

    /**
     * @Property rdsPort: The port of rds.
     */
    public rdsPort: number | ros.IResolvable | undefined;

    /**
     * @Property rdsVpcId: The vpc of rds.
     */
    public rdsVpcId: string | ros.IResolvable | undefined;

    /**
     * @Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    public rdsVpcUrl: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ClickHouse::SynDb`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynDbProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSynDb.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusterId = this.getAtt('DbClusterId');
        this.attrRdsId = this.getAtt('RdsId');
        this.attrSynDbs = this.getAtt('SynDbs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ckPassword = props.ckPassword;
        this.ckUserName = props.ckUserName;
        this.dbClusterId = props.dbClusterId;
        this.rdsId = props.rdsId;
        this.rdsPassword = props.rdsPassword;
        this.rdsUserName = props.rdsUserName;
        this.skipUnsupported = props.skipUnsupported;
        this.synDbTables = props.synDbTables;
        this.clickhousePort = props.clickhousePort;
        this.limitUpper = props.limitUpper;
        this.rdsPort = props.rdsPort;
        this.rdsVpcId = props.rdsVpcId;
        this.rdsVpcUrl = props.rdsVpcUrl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ckPassword: this.ckPassword,
            ckUserName: this.ckUserName,
            dbClusterId: this.dbClusterId,
            rdsId: this.rdsId,
            rdsPassword: this.rdsPassword,
            rdsUserName: this.rdsUserName,
            skipUnsupported: this.skipUnsupported,
            synDbTables: this.synDbTables,
            clickhousePort: this.clickhousePort,
            limitUpper: this.limitUpper,
            rdsPort: this.rdsPort,
            rdsVpcId: this.rdsVpcId,
            rdsVpcUrl: this.rdsVpcUrl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSynDbPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSynDb {
    /**
     * @stability external
     */
    export interface SynDbTablesProperty {
        /**
         * @Property schema: Database name.
         */
        readonly schema: string | ros.IResolvable;
        /**
         * @Property tables: Table names
         */
        readonly tables: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SynDbTablesProperty`
 *
 * @param properties - the TypeScript properties of a `SynDbTablesProperty`
 *
 * @returns the result of the validation.
 */
function RosSynDb_SynDbTablesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('schema', ros.requiredValidator)(properties.schema));
    errors.collect(ros.propertyValidator('schema', ros.validateString)(properties.schema));
    errors.collect(ros.propertyValidator('tables', ros.requiredValidator)(properties.tables));
    if(properties.tables && (Array.isArray(properties.tables) || (typeof properties.tables) === 'string')) {
        errors.collect(ros.propertyValidator('tables', ros.validateLength)({
            data: properties.tables.length,
            min: undefined,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('tables', ros.listValidator(ros.validateString))(properties.tables));
    return errors.wrap('supplied properties not correct for "SynDbTablesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::SynDb.SynDbTables` resource
 *
 * @param properties - the TypeScript properties of a `SynDbTablesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::SynDb.SynDbTables` resource.
 */
// @ts-ignore TS6133
function rosSynDbSynDbTablesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynDb_SynDbTablesPropertyValidator(properties).assertSuccess();
    return {
      Schema: ros.stringToRosTemplate(properties.schema),
      Tables: ros.listMapper(ros.stringToRosTemplate)(properties.tables),
    };
}
