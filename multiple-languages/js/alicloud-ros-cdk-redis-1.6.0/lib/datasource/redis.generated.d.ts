import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: The name of the account that you want to query.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Account`, which is used to query an account in an ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Account";
    /**
     * @Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute AccountPrivilege: The permission of the account. Default value: RoleReadWrite. Valid values:
* RoleReadOnly: The account has the read-only permissions.
* RoleReadWrite: The account has the read and write permissions.
     */
    readonly attrAccountPrivilege: ros.IResolvable;
    /**
     * @Attribute AccountType: The type of the account. Valid values:
* Normal: standard account
* Super: super account
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute Description: The description of the account.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the Redis instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the account that you want to query.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export interface RosAccountsProps {
    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the Redis account.
     */
    readonly accountName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Accounts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Accounts";
    /**
     * @Attribute AccountNames: The list of The Redis account names.
     */
    readonly attrAccountNames: ros.IResolvable;
    /**
     * @Attribute Accounts: The list of The Redis accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the Redis instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the Redis account.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
 */
export interface RosInstanceProps {
    /**
     * @Property dbInstanceId: Database instance id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Instance`, which is used to query the information about a Tair (Redis OSS-compatible) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Instance";
    /**
     * @Attribute ArchitectureType: Architecture type.
     */
    readonly attrArchitectureType: ros.IResolvable;
    /**
     * @Attribute Bandwidth: Bandwidth.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute Capacity: Capacity.
     */
    readonly attrCapacity: ros.IResolvable;
    /**
     * @Attribute CloudType: Cloud category.
     */
    readonly attrCloudType: ros.IResolvable;
    /**
     * @Attribute Config: Config.
     */
    readonly attrConfig: ros.IResolvable;
    /**
     * @Attribute ConnectionDomain: Connection domain.
     */
    readonly attrConnectionDomain: ros.IResolvable;
    /**
     * @Attribute CreateTime: Create time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: Database instance id.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DBInstanceName: Instance name.
     */
    readonly attrDbInstanceName: ros.IResolvable;
    /**
     * @Attribute EndTime: End time.
     */
    readonly attrEndTime: ros.IResolvable;
    /**
     * @Attribute EngineVersion: Engine version.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute HasRenewChangeOrder: Has renew change order.
     */
    readonly attrHasRenewChangeOrder: ros.IResolvable;
    /**
     * @Attribute InstanceClass: Instance class.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * @Attribute InstanceReleaseProtection: Instance release protection.
     */
    readonly attrInstanceReleaseProtection: ros.IResolvable;
    /**
     * @Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute IsRds: is RDS.
     */
    readonly attrIsRds: ros.IResolvable;
    /**
     * @Attribute MaintainEndTime: Maintain end time.
     */
    readonly attrMaintainEndTime: ros.IResolvable;
    /**
     * @Attribute MaintainStartTime: Maintain start time.
     */
    readonly attrMaintainStartTime: ros.IResolvable;
    /**
     * @Attribute NetworkType: Network type.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * @Attribute PackageType: Package type.
     */
    readonly attrPackageType: ros.IResolvable;
    /**
     * @Attribute PaymentType: Payment type.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Port: Port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PrivateIp: Private IP.
     */
    readonly attrPrivateIp: ros.IResolvable;
    /**
     * @Attribute Qps: QPS.
     */
    readonly attrQps: ros.IResolvable;
    /**
     * @Attribute ReadOnlyCount: The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    readonly attrReadOnlyCount: ros.IResolvable;
    /**
     * @Attribute ReplacateId: Replacate id.
     */
    readonly attrReplacateId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: Resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecondaryZoneId: The ID of the standby zone.
     */
    readonly attrSecondaryZoneId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: Security group id.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    readonly attrSecurityIpGroupAttribute: ros.IResolvable;
    /**
     * @Attribute SecurityIpGroupName: Security IP group name.
     */
    readonly attrSecurityIpGroupName: ros.IResolvable;
    /**
     * @Attribute SecurityIps: Security IPs.
     */
    readonly attrSecurityIps: ros.IResolvable;
    /**
     * @Attribute ShardCount: The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    readonly attrShardCount: ros.IResolvable;
    /**
     * @Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VSwitchId: Vswitch id.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcAuthMode: Vpc auth mode.
     */
    readonly attrVpcAuthMode: ros.IResolvable;
    /**
     * @Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * @Attribute VpcId: Vpc id.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: Zone id.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Database instance id.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstanceClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
 */
export interface RosInstanceClassesProps {
    /**
     * @Property acceptLanguage: The language of the return values. Valid values:
     *  zh-CN: Chinese. This is the default value.
     *  en-US: English.
     */
    readonly acceptLanguage?: string | ros.IResolvable;
    /**
     * @Property engine: The engine type. Valid values:
     * Redis
     * Memcache
     */
    readonly engine?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Note Default value: PrePaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.
     *  Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
     *  Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read\/write splitting architecture.
     */
    readonly nodeId?: string | ros.IResolvable;
    /**
     * @Property orderType: The order type. Valid values:
     * BUY: the orders that are used to purchase instances.
     * UPGRADE: the orders that are used to upgrade instances.
     * DOWNGRADE: the orders that are used to downgrade instances.
     */
    readonly orderType?: string | ros.IResolvable;
    /**
     * @Property productType: The edition or series of instances. Valid values:
     *  Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
     *  Tair_scm: persistent memory-optimized instances
     *  Tair_essd: storage-optimized instances
     */
    readonly productType?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the instance.
     *  Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::InstanceClasses`, which is used to query Tair (Redis OSS-compatible) instance types.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceClasses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
 */
export declare class RosInstanceClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::InstanceClasses";
    /**
     * @Attribute InstanceClassIds: The list of db instance class ids.
     */
    readonly attrInstanceClassIds: ros.IResolvable;
    /**
     * @Attribute InstanceClasses: The list of instance classes.
     */
    readonly attrInstanceClasses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceptLanguage: The language of the return values. Valid values:
     *  zh-CN: Chinese. This is the default value.
     *  en-US: English.
     */
    acceptLanguage: string | ros.IResolvable | undefined;
    /**
     * @Property engine: The engine type. Valid values:
     * Redis
     * Memcache
     */
    engine: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Note Default value: PrePaid.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.
     *  Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
     *  Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read\/write splitting architecture.
     */
    nodeId: string | ros.IResolvable | undefined;
    /**
     * @Property orderType: The order type. Valid values:
     * BUY: the orders that are used to purchase instances.
     * UPGRADE: the orders that are used to upgrade instances.
     * DOWNGRADE: the orders that are used to downgrade instances.
     */
    orderType: string | ros.IResolvable | undefined;
    /**
     * @Property productType: The edition or series of instances. Valid values:
     *  Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
     *  Tair_scm: persistent memory-optimized instances
     *  Tair_essd: storage-optimized instances
     */
    productType: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the instance.
     *  Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceClassesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
 */
export interface RosInstancesProps {
    /**
     * @Property architectureType: The architecture of the instance. Valid values:
     * cluster: The instance is a cluster instance.
     * standard: The instance is a standard instance.
     * rwsplit: The instance is a read\/write splitting instance.
     */
    readonly architectureType?: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property editionType: The edition of the instance. Valid values:
     * Community: Community Edition
     * Enterprise: Enhance Edition (Tair)
     */
    readonly editionType?: string | ros.IResolvable;
    /**
     * @Property engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property expired: Specifies whether the instance has expired. Valid values:
     * true: The instance has expired.
     * false: The instance has not expired.
     */
    readonly expired?: string | ros.IResolvable;
    /**
     * @Property globalInstance: Specifies whether to return the child instances of distributed instances. Valid values:
     * true: Only child instances are returned.
     * false: Child instances are not returned.
     */
    readonly globalInstance?: string | ros.IResolvable;
    /**
     * @Property instanceClass: The instance type.
     */
    readonly instanceClass?: string | ros.IResolvable;
    /**
     * @Property instanceIds: The IDs of instances.
     * If you specify multiple instance IDs, separate the instance IDs with commas (,).
     */
    readonly instanceIds?: string | ros.IResolvable;
    /**
     * @Property instanceStatus: The state of the instance. Valid values:
     * Normal: The instance is normal.
     * Creating: The instance is being created.
     * Changing: The configurations of the instance are being changed.
     * Inactive: The instance is disabled.
     * Flushing: The instance is being released.
     * Released: The instance is released.
     * Transforming: The instance is being transformed.
     * Unavailable: The instance is suspended.
     * Error: The instance cannot be created.
     * Migrating: The instance is being migrated.
     * BackupRecovering: The instance is being restored from a backup.
     * MinorVersionUpgrading: The minor version of the instance is being updated.
     * NetworkModifying: The network type of the instance is being changed.
     * SSLModifying: The SSL certificate of the instance is being changed.
     * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
     *
     */
    readonly instanceStatus?: string | ros.IResolvable;
    /**
     * @Property instanceType: The category of the instance. Valid values:
     * Tair
     * Redis
     * Memcache
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC: classic network
     * VPC: Virtual Private Cloud (VPC)
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property privateIp: The private IP address of the instance.
     */
    readonly privateIp?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
     */
    readonly searchKey?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::REDIS::Instances`, which is used to query the information about Tair (Redis OSS-compatible) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::REDIS::Instances";
    /**
     * @Attribute InstanceIds: The list of The Redis instance Ids.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of The Redis instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property architectureType: The architecture of the instance. Valid values:
     * cluster: The instance is a cluster instance.
     * standard: The instance is a standard instance.
     * rwsplit: The instance is a read\/write splitting instance.
     */
    architectureType: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property editionType: The edition of the instance. Valid values:
     * Community: Community Edition
     * Enterprise: Enhance Edition (Tair)
     */
    editionType: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: The database engine version of the instance. Valid values: 2.8, 4.0, and 5.0.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property expired: Specifies whether the instance has expired. Valid values:
     * true: The instance has expired.
     * false: The instance has not expired.
     */
    expired: string | ros.IResolvable | undefined;
    /**
     * @Property globalInstance: Specifies whether to return the child instances of distributed instances. Valid values:
     * true: Only child instances are returned.
     * false: Child instances are not returned.
     */
    globalInstance: string | ros.IResolvable | undefined;
    /**
     * @Property instanceClass: The instance type.
     */
    instanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property instanceIds: The IDs of instances.
     * If you specify multiple instance IDs, separate the instance IDs with commas (,).
     */
    instanceIds: string | ros.IResolvable | undefined;
    /**
     * @Property instanceStatus: The state of the instance. Valid values:
     * Normal: The instance is normal.
     * Creating: The instance is being created.
     * Changing: The configurations of the instance are being changed.
     * Inactive: The instance is disabled.
     * Flushing: The instance is being released.
     * Released: The instance is released.
     * Transforming: The instance is being transformed.
     * Unavailable: The instance is suspended.
     * Error: The instance cannot be created.
     * Migrating: The instance is being migrated.
     * BackupRecovering: The instance is being restored from a backup.
     * MinorVersionUpgrading: The minor version of the instance is being updated.
     * NetworkModifying: The network type of the instance is being changed.
     * SSLModifying: The SSL certificate of the instance is being changed.
     * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
     *
     */
    instanceStatus: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The category of the instance. Valid values:
     * Tair
     * Redis
     * Memcache
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * CLASSIC: classic network
     * VPC: Virtual Private Cloud (VPC)
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property privateIp: The private IP address of the instance.
     */
    privateIp: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property searchKey: The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.
     */
    searchKey: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the instance.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
