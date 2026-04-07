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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::DBCluster`, which is used to create an ApsaraDB for ClickHouse cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
 */
export declare class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::DBCluster";
    /**
     * @Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * @Attribute Bid: BusinessID
     */
    readonly attrBid: ros.IResolvable;
    /**
     * @Attribute Category: The edition of the cluster.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute CommodityCode: Product Code
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * @Attribute ConnectionString: ConnectionString
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBClusterDescription: The description of the cluster.
     */
    readonly attrDbClusterDescription: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The id of DBCluster
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    readonly attrDbClusterNetworkType: ros.IResolvable;
    /**
     * @Attribute DBClusterType: The specification of the cluster.
     */
    readonly attrDbClusterType: ros.IResolvable;
    /**
     * @Attribute DBClusterVersion: Version, value:  19.15.2.2
     */
    readonly attrDbClusterVersion: ros.IResolvable;
    /**
     * @Attribute DBNodeClass: DBNodeClass
     */
    readonly attrDbNodeClass: ros.IResolvable;
    /**
     * @Attribute DBNodeCount: The number of nodes.
     */
    readonly attrDbNodeCount: ros.IResolvable;
    /**
     * @Attribute DBNodeStorage: The storage capacity of a single node.
     */
    readonly attrDbNodeStorage: ros.IResolvable;
    /**
     * @Attribute DbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    readonly attrDbNodeStorageType: ros.IResolvable;
    /**
     * @Attribute EncryptionKey: KMS key ID
     */
    readonly attrEncryptionKey: ros.IResolvable;
    /**
     * @Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    readonly attrEncryptionType: ros.IResolvable;
    /**
     * @Attribute Engine: Engine
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute EngineVersion: EngineVersion
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute IsExpired: IsExpired
     */
    readonly attrIsExpired: ros.IResolvable;
    /**
     * @Attribute LockMode: LockMode
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * @Attribute LockReason: Reason for lock
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * @Attribute PaymentType: PayType
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    readonly attrPeriod: ros.IResolvable;
    /**
     * @Attribute Port: Connection port
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: Internet connection address
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicPort: PublicPort
     */
    readonly attrPublicPort: ros.IResolvable;
    /**
     * @Attribute StorageType: StorageType
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * @Attribute VSwitchId: VSwitchId
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcCloudInstanceId: VpcCloudInstanceId
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * @Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: ZoneId
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The edition of the cluster. Valid values:
     * Basic: Single-replica Edition
     * HighAvailability: Double-replica Edition
     */
    category: string | ros.IResolvable;
    /**
     * @Property dbClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    dbClusterNetworkType: string | ros.IResolvable;
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
    dbClusterType: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: Version, value:  19.15.2.2
     */
    dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property dbNodeCount: The number of nodes.
     * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
     * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
     */
    dbNodeCount: number | ros.IResolvable;
    /**
     * @Property dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
     * Note self value is a multiple of 100.
     */
    dbNodeStorage: number | ros.IResolvable;
    /**
     * @Property dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    dbNodeStorageType: string | ros.IResolvable;
    /**
     * @Property paymentType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    dbClusterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: KMS key ID
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    encryptionType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The unit of the subscription duration.
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property usedTime: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 9, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    usedTime: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VpcId
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchBak: The ID of the secondary VSwitch.
     */
    vSwitchBak: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchBak2: The ID of the third VSwitch.
     */
    vSwitchBak2: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: VSwitchId
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zondIdBak2: The ID of the third zone.
     */
    zondIdBak2: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: ZoneId
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneIdBak: The ID of the secondary zone.
     */
    zoneIdBak: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
 */
export declare class RosEnterpriseDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBCluster";
    /**
     * @Attribute DBInstanceId: The ID of the database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute PrivateConnectionString: The private connection string.
     */
    readonly attrPrivateConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: The public connection string.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engine: The engine type.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property nodeCount: The number of nodes.
     */
    nodeCount: number | ros.IResolvable;
    /**
     * @Property nodeScaleMax: The maximum number of nodes for scaling.
     */
    nodeScaleMax: number | ros.IResolvable;
    /**
     * @Property nodeScaleMin: The minimum number of nodes for scaling.
     */
    nodeScaleMin: number | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property backupSetId: The ID of the backup set.
     */
    backupSetId: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: The description of the database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbTimeZone: The time zone of the database.
     */
    dbTimeZone: string | ros.IResolvable | undefined;
    /**
     * @Property deploySchema: The deployment schema.
     */
    deploySchema: string | ros.IResolvable | undefined;
    /**
     * @Property multiZone: Multi-zone configuration.
     */
    multiZone: Array<RosEnterpriseDBCluster.MultiZoneProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property publicConnectionSetting: The public connection setting.
     */
    publicConnectionSetting: RosEnterpriseDBCluster.PublicConnectionSettingProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceDbInstanceId: The ID of the source database instance.
     */
    sourceDbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property storageQuota: The storage quota.
     */
    storageQuota: number | ros.IResolvable | undefined;
    /**
     * @Property storageType: The type of storage.
     */
    storageType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to clickhouse_enterprise_db. Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosEnterpriseDBCluster.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEnterpriseDBCluster {
    /**
     * @stability external
     */
    interface MultiZoneProperty {
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
export declare namespace RosEnterpriseDBCluster {
    /**
     * @stability external
     */
    interface PublicConnectionSettingProperty {
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
export declare namespace RosEnterpriseDBCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterAccount`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusterAccount` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
 */
export declare class RosEnterpriseDBClusterAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBClusterAccount";
    /**
     * @Attribute Account: The name of the database account.
     */
    readonly attrAccount: ros.IResolvable;
    /**
     * @Attribute AccountType: The type of the database account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute Description: The description of the account.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DmlAuthSetting: The information about permissions.
     */
    readonly attrDmlAuthSetting: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property account: The name of the database account.
     */
    account: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the database account. Valid values:
     * - **NormalAccount**: Normal account number.
     * - **SuperAccount**: The privileged account.
     */
    accountType: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The cluster ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property password: Database account password. Set the following rules.
     * - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
     * - Oh-! @#$%^& *()_+-= is a special character.
     * - Length is 8~32 characters.
     */
    password: string | ros.IResolvable;
    /**
     * @Property description: The description of the account.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dmlAuthSetting: The information about permissions.
     */
    dmlAuthSetting: RosEnterpriseDBClusterAccount.DmlAuthSettingProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterAccountProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEnterpriseDBClusterAccount {
    /**
     * @stability external
     */
    interface DmlAuthSettingProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusterBackupPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
 */
export declare class RosEnterpriseDBClusterBackupPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy";
    /**
     * @Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    readonly attrBackupRetentionPeriod: ros.IResolvable;
    /**
     * @Attribute BackupState: Backup switch.
     */
    readonly attrBackupState: ros.IResolvable;
    /**
     * @Attribute PreferredBackupPeriod: The backup cycle.
     */
    readonly attrPreferredBackupPeriod: ros.IResolvable;
    /**
     * @Attribute PreferredBackupTime: The backup time window within which the backup task is performed.
     */
    readonly attrPreferredBackupTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    backupRetentionPeriod: number | ros.IResolvable;
    /**
     * @Property dbInstanceId: The cluster ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
     */
    preferredBackupPeriod: string | ros.IResolvable;
    /**
     * @Property preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
     */
    preferredBackupTime: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterBackupPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusterSecurityIP` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclustersecurityip
 */
export declare class RosEnterpriseDBClusterSecurityIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::EnterpriseDBClusterSecurityIP";
    /**
     * @Attribute GroupName: The name of the whitelist whose settings you want to modify.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable;
    /**
     * @Attribute SecurityIpType: The type of IP address.
     */
    readonly attrSecurityIpType: ros.IResolvable;
    /**
     * @Attribute WhitelistNetType: The network type of the whitelist.
     */
    readonly attrWhitelistNetType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The cluster ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property groupName: The name of the whitelist whose settings you want to modify.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property securityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    securityIpList: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterSecurityIPProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::SynDb`, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynDb` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
 */
export declare class RosSynDb extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::SynDb";
    /**
     * @Attribute DbClusterId: The id of clickhouse.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute RdsId: The id of RDS
     */
    readonly attrRdsId: ros.IResolvable;
    /**
     * @Attribute SynDbs: Sync Dbs
     */
    readonly attrSynDbs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ckPassword: The password of the database account
     */
    ckPassword: string | ros.IResolvable;
    /**
     * @Property ckUserName: The account of the clickhouse database.
     */
    ckUserName: string | ros.IResolvable;
    /**
     * @Property dbClusterId: Clickhouse cluster id.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property rdsId: The instance id of RDS.
     */
    rdsId: string | ros.IResolvable;
    /**
     * @Property rdsPassword: The password of the RDS database account.
     */
    rdsPassword: string | ros.IResolvable;
    /**
     * @Property rdsUserName: The account of the RDS database.
     */
    rdsUserName: string | ros.IResolvable;
    /**
     * @Property skipUnsupported: Skip unsupported table or not.
     */
    skipUnsupported: boolean | ros.IResolvable;
    /**
     * @Property synDbTables: The tables to syn.
     */
    synDbTables: Array<RosSynDb.SynDbTablesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clickhousePort: The port of clickhouse id.
     */
    clickhousePort: number | ros.IResolvable | undefined;
    /**
     * @Property limitUpper: The maximum number of rows to sync per second.
     */
    limitUpper: number | ros.IResolvable | undefined;
    /**
     * @Property rdsPort: The port of rds.
     */
    rdsPort: number | ros.IResolvable | undefined;
    /**
     * @Property rdsVpcId: The vpc of rds.
     */
    rdsVpcId: string | ros.IResolvable | undefined;
    /**
     * @Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    rdsVpcUrl: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynDbProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSynDb {
    /**
     * @stability external
     */
    interface SynDbTablesProperty {
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
