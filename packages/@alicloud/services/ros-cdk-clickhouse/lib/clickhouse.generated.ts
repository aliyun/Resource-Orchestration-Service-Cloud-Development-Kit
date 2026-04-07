// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
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
     * @Property period: The unit of the subscription duration.
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
     * @Property vSwitchBak: The ID of the secondary VSwitch.
     */
    readonly vSwitchBak?: string | ros.IResolvable;

    /**
     * @Property vSwitchBak2: The ID of the third VSwitch.
     */
    readonly vSwitchBak2?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitchId
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zondIdBak2: The ID of the third zone.
     */
    readonly zondIdBak2?: string | ros.IResolvable;

    /**
     * @Property zoneId: ZoneId
     */
    readonly zoneId?: string | ros.IResolvable;

    /**
     * @Property zoneIdBak: The ID of the secondary zone.
     */
    readonly zoneIdBak?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dbNodeStorage', ros.requiredValidator)(properties.dbNodeStorage));
    errors.collect(ros.propertyValidator('dbNodeStorage', ros.validateNumber)(properties.dbNodeStorage));
    errors.collect(ros.propertyValidator('dbNodeStorageType', ros.requiredValidator)(properties.dbNodeStorageType));
    errors.collect(ros.propertyValidator('dbNodeStorageType', ros.validateString)(properties.dbNodeStorageType));
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
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('vSwitchBak', ros.validateString)(properties.vSwitchBak));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('dbClusterNetworkType', ros.requiredValidator)(properties.dbClusterNetworkType));
    errors.collect(ros.propertyValidator('dbClusterNetworkType', ros.validateString)(properties.dbClusterNetworkType));
    errors.collect(ros.propertyValidator('zondIdBak2', ros.validateString)(properties.zondIdBak2));
    errors.collect(ros.propertyValidator('zoneIdBak', ros.validateString)(properties.zoneIdBak));
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
    errors.collect(ros.propertyValidator('vSwitchBak2', ros.validateString)(properties.vSwitchBak2));
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
      'Category': ros.stringToRosTemplate(properties.category),
      'DBClusterNetworkType': ros.stringToRosTemplate(properties.dbClusterNetworkType),
      'DBClusterType': ros.stringToRosTemplate(properties.dbClusterType),
      'DBClusterVersion': ros.stringToRosTemplate(properties.dbClusterVersion),
      'DBNodeCount': ros.numberToRosTemplate(properties.dbNodeCount),
      'DBNodeStorage': ros.numberToRosTemplate(properties.dbNodeStorage),
      'DbNodeStorageType': ros.stringToRosTemplate(properties.dbNodeStorageType),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'DBClusterDescription': ros.stringToRosTemplate(properties.dbClusterDescription),
      'EncryptionKey': ros.stringToRosTemplate(properties.encryptionKey),
      'EncryptionType': ros.stringToRosTemplate(properties.encryptionType),
      'Period': ros.stringToRosTemplate(properties.period),
      'UsedTime': ros.numberToRosTemplate(properties.usedTime),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchBak': ros.stringToRosTemplate(properties.vSwitchBak),
      'VSwitchBak2': ros.stringToRosTemplate(properties.vSwitchBak2),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZondIdBak2': ros.stringToRosTemplate(properties.zondIdBak2),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'ZoneIdBak': ros.stringToRosTemplate(properties.zoneIdBak),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::DBCluster`, which is used to create an ApsaraDB for ClickHouse cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::DBCluster";

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
     * @Property period: The unit of the subscription duration.
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
     * @Property vSwitchBak: The ID of the secondary VSwitch.
     */
    public vSwitchBak: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchBak2: The ID of the third VSwitch.
     */
    public vSwitchBak2: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: VSwitchId
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zondIdBak2: The ID of the third zone.
     */
    public zondIdBak2: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: ZoneId
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneIdBak: The ID of the secondary zone.
     */
    public zoneIdBak: string | ros.IResolvable | undefined;

    /**
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
        this.vSwitchBak = props.vSwitchBak;
        this.vSwitchBak2 = props.vSwitchBak2;
        this.vSwitchId = props.vSwitchId;
        this.zondIdBak2 = props.zondIdBak2;
        this.zoneId = props.zoneId;
        this.zoneIdBak = props.zoneIdBak;
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
            vSwitchBak: this.vSwitchBak,
            vSwitchBak2: this.vSwitchBak2,
            vSwitchId: this.vSwitchId,
            zondIdBak2: this.zondIdBak2,
            zoneId: this.zoneId,
            zoneIdBak: this.zoneIdBak,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEnterpriseDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
 */
export interface RosEnterpriseDBClusterProps {

    /**
     * @Property engine: The engine type.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property nodeCount: The number of nodes.
     */
    readonly nodeCount: number | ros.IResolvable;

    /**
     * @Property nodeScaleMax: The maximum number of nodes for scaling.
     */
    readonly nodeScaleMax: number | ros.IResolvable;

    /**
     * @Property nodeScaleMin: The minimum number of nodes for scaling.
     */
    readonly nodeScaleMin: number | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the backup set.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbTimeZone: The time zone of the database.
     */
    readonly dbTimeZone?: string | ros.IResolvable;

    /**
     * @Property deploySchema: The deployment schema.
     */
    readonly deploySchema?: string | ros.IResolvable;

    /**
     * @Property multiZone: Multi-zone configuration.
     */
    readonly multiZone?: Array<RosEnterpriseDBCluster.MultiZoneProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property publicConnectionSetting: The public connection setting.
     */
    readonly publicConnectionSetting?: RosEnterpriseDBCluster.PublicConnectionSettingProperty | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property sourceDbInstanceId: The ID of the source database instance.
     */
    readonly sourceDbInstanceId?: string | ros.IResolvable;

    /**
     * @Property storageQuota: The storage quota.
     */
    readonly storageQuota?: number | ros.IResolvable;

    /**
     * @Property storageType: The type of storage.
     */
    readonly storageType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to clickhouse_enterprise_db. Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEnterpriseDBCluster.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosEnterpriseDBClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterProps`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.multiZone && (Array.isArray(properties.multiZone) || (typeof properties.multiZone) === 'string')) {
        errors.collect(ros.propertyValidator('multiZone', ros.validateLength)({
            data: properties.multiZone.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('multiZone', ros.listValidator(RosEnterpriseDBCluster_MultiZonePropertyValidator))(properties.multiZone));
    errors.collect(ros.propertyValidator('nodeScaleMin', ros.requiredValidator)(properties.nodeScaleMin));
    if(properties.nodeScaleMin && (typeof properties.nodeScaleMin) !== 'object') {
        errors.collect(ros.propertyValidator('nodeScaleMin', ros.validateRange)({
            data: properties.nodeScaleMin,
            min: 4,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('nodeScaleMin', ros.validateNumber)(properties.nodeScaleMin));
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('nodeCount', ros.requiredValidator)(properties.nodeCount));
    if(properties.nodeCount && (typeof properties.nodeCount) !== 'object') {
        errors.collect(ros.propertyValidator('nodeCount', ros.validateRange)({
            data: properties.nodeCount,
            min: 2,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('nodeCount', ros.validateNumber)(properties.nodeCount));
    errors.collect(ros.propertyValidator('dbTimeZone', ros.validateString)(properties.dbTimeZone));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('sourceDbInstanceId', ros.validateString)(properties.sourceDbInstanceId));
    errors.collect(ros.propertyValidator('backupSetId', ros.validateString)(properties.backupSetId));
    if(properties.deploySchema && (typeof properties.deploySchema) !== 'object') {
        errors.collect(ros.propertyValidator('deploySchema', ros.validateAllowedValues)({
          data: properties.deploySchema,
          allowedValues: ["single_az","multi_az"],
        }));
    }
    errors.collect(ros.propertyValidator('deploySchema', ros.validateString)(properties.deploySchema));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('nodeScaleMax', ros.requiredValidator)(properties.nodeScaleMax));
    if(properties.nodeScaleMax && (typeof properties.nodeScaleMax) !== 'object') {
        errors.collect(ros.propertyValidator('nodeScaleMax', ros.validateRange)({
            data: properties.nodeScaleMax,
            min: 4,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('nodeScaleMax', ros.validateNumber)(properties.nodeScaleMax));
    errors.collect(ros.propertyValidator('publicConnectionSetting', RosEnterpriseDBCluster_PublicConnectionSettingPropertyValidator)(properties.publicConnectionSetting));
    if(properties.storageQuota && (typeof properties.storageQuota) !== 'object') {
        errors.collect(ros.propertyValidator('storageQuota', ros.validateRange)({
            data: properties.storageQuota,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('storageQuota', ros.validateNumber)(properties.storageQuota));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["clickhouse"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosEnterpriseDBCluster_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosEnterpriseDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnterpriseDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'Engine': ros.stringToRosTemplate(properties.engine),
      'NodeCount': ros.numberToRosTemplate(properties.nodeCount),
      'NodeScaleMax': ros.numberToRosTemplate(properties.nodeScaleMax),
      'NodeScaleMin': ros.numberToRosTemplate(properties.nodeScaleMin),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'BackupSetId': ros.stringToRosTemplate(properties.backupSetId),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'DBTimeZone': ros.stringToRosTemplate(properties.dbTimeZone),
      'DeploySchema': ros.stringToRosTemplate(properties.deploySchema),
      'MultiZone': ros.listMapper(rosEnterpriseDBClusterMultiZonePropertyToRosTemplate)(properties.multiZone),
      'PublicConnectionSetting': rosEnterpriseDBClusterPublicConnectionSettingPropertyToRosTemplate(properties.publicConnectionSetting),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SourceDBInstanceId': ros.stringToRosTemplate(properties.sourceDbInstanceId),
      'StorageQuota': ros.numberToRosTemplate(properties.storageQuota),
      'StorageType': ros.stringToRosTemplate(properties.storageType),
      'Tags': ros.listMapper(rosEnterpriseDBClusterTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
 */
export class RosEnterpriseDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBCluster";

    /**
     * @Attribute DBInstanceId: The ID of the database instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute PrivateConnectionString: The private connection string.
     */
    public readonly attrPrivateConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: The public connection string.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property engine: The engine type.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property nodeCount: The number of nodes.
     */
    public nodeCount: number | ros.IResolvable;

    /**
     * @Property nodeScaleMax: The maximum number of nodes for scaling.
     */
    public nodeScaleMax: number | ros.IResolvable;

    /**
     * @Property nodeScaleMin: The minimum number of nodes for scaling.
     */
    public nodeScaleMin: number | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the backup set.
     */
    public backupSetId: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbTimeZone: The time zone of the database.
     */
    public dbTimeZone: string | ros.IResolvable | undefined;

    /**
     * @Property deploySchema: The deployment schema.
     */
    public deploySchema: string | ros.IResolvable | undefined;

    /**
     * @Property multiZone: Multi-zone configuration.
     */
    public multiZone: Array<RosEnterpriseDBCluster.MultiZoneProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property publicConnectionSetting: The public connection setting.
     */
    public publicConnectionSetting: RosEnterpriseDBCluster.PublicConnectionSettingProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceDbInstanceId: The ID of the source database instance.
     */
    public sourceDbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property storageQuota: The storage quota.
     */
    public storageQuota: number | ros.IResolvable | undefined;

    /**
     * @Property storageType: The type of storage.
     */
    public storageType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to clickhouse_enterprise_db. Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosEnterpriseDBCluster.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnterpriseDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrPrivateConnectionString = this.getAtt('PrivateConnectionString');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.engine = props.engine;
        this.nodeCount = props.nodeCount;
        this.nodeScaleMax = props.nodeScaleMax;
        this.nodeScaleMin = props.nodeScaleMin;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.backupSetId = props.backupSetId;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbTimeZone = props.dbTimeZone;
        this.deploySchema = props.deploySchema;
        this.multiZone = props.multiZone;
        this.publicConnectionSetting = props.publicConnectionSetting;
        this.resourceGroupId = props.resourceGroupId;
        this.sourceDbInstanceId = props.sourceDbInstanceId;
        this.storageQuota = props.storageQuota;
        this.storageType = props.storageType;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            engine: this.engine,
            nodeCount: this.nodeCount,
            nodeScaleMax: this.nodeScaleMax,
            nodeScaleMin: this.nodeScaleMin,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            backupSetId: this.backupSetId,
            dbInstanceDescription: this.dbInstanceDescription,
            dbTimeZone: this.dbTimeZone,
            deploySchema: this.deploySchema,
            multiZone: this.multiZone,
            publicConnectionSetting: this.publicConnectionSetting,
            resourceGroupId: this.resourceGroupId,
            sourceDbInstanceId: this.sourceDbInstanceId,
            storageQuota: this.storageQuota,
            storageType: this.storageType,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnterpriseDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEnterpriseDBCluster {
    /**
     * @stability external
     */
    export interface MultiZoneProperty {
        /**
         * @Property zoneId: The zone ID in multi-zone configuration.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The VSwitch IDs in the zone.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MultiZoneProperty`
 *
 * @param properties - the TypeScript properties of a `MultiZoneProperty`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBCluster_MultiZonePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    return errors.wrap('supplied properties not correct for "MultiZoneProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster.MultiZone` resource
 *
 * @param properties - the TypeScript properties of a `MultiZoneProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster.MultiZone` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterMultiZonePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEnterpriseDBCluster_MultiZonePropertyValidator(properties).assertSuccess();
    return {
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
    };
}

export namespace RosEnterpriseDBCluster {
    /**
     * @stability external
     */
    export interface PublicConnectionSettingProperty {
        /**
         * @Property connectionPrefix: The public connection string prefix.
         */
        readonly connectionPrefix: string | ros.IResolvable;
        /**
         * @Property enablePublicConnection: Enable the ClickHouse cluster.
         */
        readonly enablePublicConnection: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PublicConnectionSettingProperty`
 *
 * @param properties - the TypeScript properties of a `PublicConnectionSettingProperty`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBCluster_PublicConnectionSettingPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionPrefix', ros.requiredValidator)(properties.connectionPrefix));
    errors.collect(ros.propertyValidator('connectionPrefix', ros.validateString)(properties.connectionPrefix));
    errors.collect(ros.propertyValidator('enablePublicConnection', ros.requiredValidator)(properties.enablePublicConnection));
    errors.collect(ros.propertyValidator('enablePublicConnection', ros.validateBoolean)(properties.enablePublicConnection));
    return errors.wrap('supplied properties not correct for "PublicConnectionSettingProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster.PublicConnectionSetting` resource
 *
 * @param properties - the TypeScript properties of a `PublicConnectionSettingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster.PublicConnectionSetting` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterPublicConnectionSettingPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEnterpriseDBCluster_PublicConnectionSettingPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionPrefix': ros.stringToRosTemplate(properties.connectionPrefix),
      'EnablePublicConnection': ros.booleanToRosTemplate(properties.enablePublicConnection),
    };
}

export namespace RosEnterpriseDBCluster {
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
function RosEnterpriseDBCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBCluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEnterpriseDBCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosEnterpriseDBClusterAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
 */
export interface RosEnterpriseDBClusterAccountProps {

    /**
     * @Property account: The name of the database account.
     */
    readonly account: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the database account. Valid values:
     * - **NormalAccount**: Normal account number.
     * - **SuperAccount**: The privileged account.
     */
    readonly accountType: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property password: Database account password. Set the following rules.
     * - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
     * - Oh-! @#$%^& *()_+-= is a special character.
     * - Length is 8~32 characters.
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property description: The description of the account.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property dmlAuthSetting: The information about permissions.
     */
    readonly dmlAuthSetting?: RosEnterpriseDBClusterAccount.DmlAuthSettingProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEnterpriseDBClusterAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterAccountProps`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBClusterAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('account', ros.requiredValidator)(properties.account));
    errors.collect(ros.propertyValidator('account', ros.validateString)(properties.account));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('accountType', ros.requiredValidator)(properties.accountType));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: ["NormalAccount","SuperAccount"],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('dmlAuthSetting', RosEnterpriseDBClusterAccount_DmlAuthSettingPropertyValidator)(properties.dmlAuthSetting));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosEnterpriseDBClusterAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterAccount` resource
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterAccount` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnterpriseDBClusterAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'Account': ros.stringToRosTemplate(properties.account),
      'AccountType': ros.stringToRosTemplate(properties.accountType),
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'Password': ros.stringToRosTemplate(properties.password),
      'Description': ros.stringToRosTemplate(properties.description),
      'DmlAuthSetting': rosEnterpriseDBClusterAccountDmlAuthSettingPropertyToRosTemplate(properties.dmlAuthSetting),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterAccount`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusterAccount` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
 */
export class RosEnterpriseDBClusterAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBClusterAccount";

    /**
     * @Attribute Account: The name of the database account.
     */
    public readonly attrAccount: ros.IResolvable;

    /**
     * @Attribute AccountType: The type of the database account.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * @Attribute Description: The description of the account.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DmlAuthSetting: The information about permissions.
     */
    public readonly attrDmlAuthSetting: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property account: The name of the database account.
     */
    public account: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the database account. Valid values:
     * - **NormalAccount**: Normal account number.
     * - **SuperAccount**: The privileged account.
     */
    public accountType: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The cluster ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property password: Database account password. Set the following rules.
     * - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
     * - Oh-! @#$%^& *()_+-= is a special character.
     * - Length is 8~32 characters.
     */
    public password: string | ros.IResolvable;

    /**
     * @Property description: The description of the account.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property dmlAuthSetting: The information about permissions.
     */
    public dmlAuthSetting: RosEnterpriseDBClusterAccount.DmlAuthSettingProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnterpriseDBClusterAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccount = this.getAtt('Account');
        this.attrAccountType = this.getAtt('AccountType');
        this.attrDescription = this.getAtt('Description');
        this.attrDmlAuthSetting = this.getAtt('DmlAuthSetting');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.account = props.account;
        this.accountType = props.accountType;
        this.dbInstanceId = props.dbInstanceId;
        this.password = props.password;
        this.description = props.description;
        this.dmlAuthSetting = props.dmlAuthSetting;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            account: this.account,
            accountType: this.accountType,
            dbInstanceId: this.dbInstanceId,
            password: this.password,
            description: this.description,
            dmlAuthSetting: this.dmlAuthSetting,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnterpriseDBClusterAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEnterpriseDBClusterAccount {
    /**
     * @stability external
     */
    export interface DmlAuthSettingProperty {
        /**
         * @Property ddlAuthority: Whether to grant the DDL permission to the database account. Value description:
     * - **true**: allows DDL.
     * - **false**: DDL is disabled.
         */
        readonly ddlAuthority: boolean | ros.IResolvable;
        /**
         * @Property dmlAuthority: Whether to grant the DML permission to the database account. The values are as follows:
     * - **0**: Queries that allow reading, writing, and changing settings
     * - **1**: Only queries for reading data are allowed.
     * - **2**: allows queries to read data and change settings.
         */
        readonly dmlAuthority: number | ros.IResolvable;
        /**
         * @Property allowDictionaries: List of dictionaries that require authorization.
         */
        readonly allowDictionaries?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property allowDatabases: The list of databases that require authorization.
         */
        readonly allowDatabases?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DmlAuthSettingProperty`
 *
 * @param properties - the TypeScript properties of a `DmlAuthSettingProperty`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBClusterAccount_DmlAuthSettingPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ddlAuthority', ros.requiredValidator)(properties.ddlAuthority));
    errors.collect(ros.propertyValidator('ddlAuthority', ros.validateBoolean)(properties.ddlAuthority));
    errors.collect(ros.propertyValidator('dmlAuthority', ros.requiredValidator)(properties.dmlAuthority));
    if(properties.dmlAuthority && (typeof properties.dmlAuthority) !== 'object') {
        errors.collect(ros.propertyValidator('dmlAuthority', ros.validateAllowedValues)({
          data: properties.dmlAuthority,
          allowedValues: [0,1,2],
        }));
    }
    errors.collect(ros.propertyValidator('dmlAuthority', ros.validateNumber)(properties.dmlAuthority));
    errors.collect(ros.propertyValidator('allowDictionaries', ros.listValidator(ros.validateString))(properties.allowDictionaries));
    errors.collect(ros.propertyValidator('allowDatabases', ros.listValidator(ros.validateString))(properties.allowDatabases));
    return errors.wrap('supplied properties not correct for "DmlAuthSettingProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterAccount.DmlAuthSetting` resource
 *
 * @param properties - the TypeScript properties of a `DmlAuthSettingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterAccount.DmlAuthSetting` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterAccountDmlAuthSettingPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEnterpriseDBClusterAccount_DmlAuthSettingPropertyValidator(properties).assertSuccess();
    return {
      'DdlAuthority': ros.booleanToRosTemplate(properties.ddlAuthority),
      'DmlAuthority': ros.numberToRosTemplate(properties.dmlAuthority),
      'AllowDictionaries': ros.listMapper(ros.stringToRosTemplate)(properties.allowDictionaries),
      'AllowDatabases': ros.listMapper(ros.stringToRosTemplate)(properties.allowDatabases),
    };
}

/**
 * Properties for defining a `RosEnterpriseDBClusterBackupPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
 */
export interface RosEnterpriseDBClusterBackupPolicyProps {

    /**
     * @Property backupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    readonly backupRetentionPeriod: number | ros.IResolvable;

    /**
     * @Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
     */
    readonly preferredBackupPeriod: string | ros.IResolvable;

    /**
     * @Property preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
     */
    readonly preferredBackupTime: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEnterpriseDBClusterBackupPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterBackupPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBClusterBackupPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.requiredValidator)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.validateString)(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.requiredValidator)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('backupRetentionPeriod', ros.requiredValidator)(properties.backupRetentionPeriod));
    errors.collect(ros.propertyValidator('backupRetentionPeriod', ros.validateNumber)(properties.backupRetentionPeriod));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    return errors.wrap('supplied properties not correct for "RosEnterpriseDBClusterBackupPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterBackupPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterBackupPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnterpriseDBClusterBackupPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupRetentionPeriod': ros.numberToRosTemplate(properties.backupRetentionPeriod),
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'PreferredBackupPeriod': ros.stringToRosTemplate(properties.preferredBackupPeriod),
      'PreferredBackupTime': ros.stringToRosTemplate(properties.preferredBackupTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusterBackupPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
 */
export class RosEnterpriseDBClusterBackupPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy";

    /**
     * @Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    public readonly attrBackupRetentionPeriod: ros.IResolvable;

    /**
     * @Attribute BackupState: Backup switch.
     */
    public readonly attrBackupState: ros.IResolvable;

    /**
     * @Attribute PreferredBackupPeriod: The backup cycle.
     */
    public readonly attrPreferredBackupPeriod: ros.IResolvable;

    /**
     * @Attribute PreferredBackupTime: The backup time window within which the backup task is performed.
     */
    public readonly attrPreferredBackupTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    public backupRetentionPeriod: number | ros.IResolvable;

    /**
     * @Property dbInstanceId: The cluster ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
     */
    public preferredBackupPeriod: string | ros.IResolvable;

    /**
     * @Property preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
     */
    public preferredBackupTime: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterBackupPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnterpriseDBClusterBackupPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupRetentionPeriod = this.getAtt('BackupRetentionPeriod');
        this.attrBackupState = this.getAtt('BackupState');
        this.attrPreferredBackupPeriod = this.getAtt('PreferredBackupPeriod');
        this.attrPreferredBackupTime = this.getAtt('PreferredBackupTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupRetentionPeriod = props.backupRetentionPeriod;
        this.dbInstanceId = props.dbInstanceId;
        this.preferredBackupPeriod = props.preferredBackupPeriod;
        this.preferredBackupTime = props.preferredBackupTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupRetentionPeriod: this.backupRetentionPeriod,
            dbInstanceId: this.dbInstanceId,
            preferredBackupPeriod: this.preferredBackupPeriod,
            preferredBackupTime: this.preferredBackupTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnterpriseDBClusterBackupPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEnterpriseDBClusterSecurityIP`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
 */
export interface RosEnterpriseDBClusterSecurityIPProps {

    /**
     * @Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the whitelist whose settings you want to modify.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    readonly securityIpList: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEnterpriseDBClusterSecurityIPProps`
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterSecurityIPProps`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBClusterSecurityIPPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('securityIpList', ros.requiredValidator)(properties.securityIpList));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    return errors.wrap('supplied properties not correct for "RosEnterpriseDBClusterSecurityIPProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP` resource
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterSecurityIPProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterSecurityIPPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnterpriseDBClusterSecurityIPPropsValidator(properties).assertSuccess();
    }
    return {
      'DbInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'SecurityIpList': ros.stringToRosTemplate(properties.securityIpList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusterSecurityIP` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
 */
export class RosEnterpriseDBClusterSecurityIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP";

    /**
     * @Attribute GroupName: The name of the whitelist whose settings you want to modify.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    public readonly attrSecurityIpList: ros.IResolvable;

    /**
     * @Attribute SecurityIpType: The type of IP address.
     */
    public readonly attrSecurityIpType: ros.IResolvable;

    /**
     * @Attribute WhitelistNetType: The network type of the whitelist.
     */
    public readonly attrWhitelistNetType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The cluster ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property groupName: The name of the whitelist whose settings you want to modify.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    public securityIpList: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterSecurityIPProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnterpriseDBClusterSecurityIP.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = this.getAtt('GroupName');
        this.attrSecurityIpList = this.getAtt('SecurityIpList');
        this.attrSecurityIpType = this.getAtt('SecurityIpType');
        this.attrWhitelistNetType = this.getAtt('WhitelistNetType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.groupName = props.groupName;
        this.securityIpList = props.securityIpList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            groupName: this.groupName,
            securityIpList: this.securityIpList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnterpriseDBClusterSecurityIPPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSynDb`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
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
      'CkPassword': ros.stringToRosTemplate(properties.ckPassword),
      'CkUserName': ros.stringToRosTemplate(properties.ckUserName),
      'DbClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'RdsId': ros.stringToRosTemplate(properties.rdsId),
      'RdsPassword': ros.stringToRosTemplate(properties.rdsPassword),
      'RdsUserName': ros.stringToRosTemplate(properties.rdsUserName),
      'SkipUnsupported': ros.booleanToRosTemplate(properties.skipUnsupported),
      'SynDbTables': ros.listMapper(rosSynDbSynDbTablesPropertyToRosTemplate)(properties.synDbTables),
      'ClickhousePort': ros.numberToRosTemplate(properties.clickhousePort),
      'LimitUpper': ros.numberToRosTemplate(properties.limitUpper),
      'RdsPort': ros.numberToRosTemplate(properties.rdsPort),
      'RdsVpcId': ros.stringToRosTemplate(properties.rdsVpcId),
      'RdsVpcUrl': ros.stringToRosTemplate(properties.rdsVpcUrl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::SynDb`, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynDb` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
 */
export class RosSynDb extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::SynDb";

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
      'Schema': ros.stringToRosTemplate(properties.schema),
      'Tables': ros.listMapper(ros.stringToRosTemplate)(properties.tables),
    };
}
