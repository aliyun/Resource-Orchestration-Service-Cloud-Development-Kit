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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::Account";
    /**
     * @Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the account.The database account name must meet the following requirements:Start with a lowercase letter and end with a lowercase letter or number.Consists of lowercase letters, numbers, or underscores (_).The length is 2 to 16 characters.Reserved user names such as root, admin, and opsadmin cannot be used.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the account.The password must meet the following requirements:Database account password.It consists of any three of uppercase letters, lowercase letters, numbers, and special characters.Special symbols include: !@#$%^&*()_+-=The password length is 8 to 32 characters.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the account.Valid values: Normal: normal account. Super: super account.
     */
    accountType: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ADB Lake cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property engine: The engine of the account.Valid values: AnalyticDB \/ Clickhouse.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the account.
     */
    accountDescription: string | ros.IResolvable | undefined;
    /**
     * @Property ramUser: Bind the RAM user to the cluster database common account
     */
    ramUser: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export interface RosDBClusterProps {
    /**
     * @Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly computeResource: string | ros.IResolvable;
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
     * @Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly storageResource: string | ros.IResolvable;
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
     * @Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    readonly sourceDbClusterId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::DBCluster`, which is used to create an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export declare class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::DBCluster";
    /**
     * @Attribute ConnectionString: The public endpoint that is used to connect to the cluster.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute OrderId: The order ID.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    computeResource: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 5.0.
     */
    dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go.
     * Prepaid: subscription.
     */
    payType: string | ros.IResolvable;
    /**
     * @Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    storageResource: string | ros.IResolvable;
    /**
     * @Property vpcId: The virtual private cloud (VPC) ID of the cluster.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the cluster.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID.
     * Note You can call the  DescribeRegions  operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property backupSetId: The ID of the backup set that you want to use to restore data.
     * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
     */
    backupSetId: string | ros.IResolvable | undefined;
    /**
     * @Property cloneSourceRegionId: The ID of the source region where the cluster is located.
     */
    cloneSourceRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     * The description cannot start with http:\/\/ or https:\/\/.
     * The description must be 2 to 256 characters in length
     */
    dbClusterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterNetworkType: The network type of the cluster. Valid values:
     * VPC
     */
    dbClusterNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property diskEncryption: Specifies whether to encrypt the disk. Valid values:
     * true
     * false (default)
     */
    diskEncryption: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
     * true (default)
     * false
     */
    enableDefaultResourcePool: boolean | ros.IResolvable | undefined;
    /**
     * @Property kmsId:
     */
    kmsId: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration of the subscription cluster.
     * Valid values when Period is set to Year: 1 to 3 (integer).
     * Valid values when Period is set to Month: 1 to 9 (integer).
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property periodType: The subscription type of the subscription cluster. Valid values:
     * Year: subscription on a yearly basis.
     * Month: subscription on a monthly basis.
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    periodType: string | ros.IResolvable | undefined;
    /**
     * @Property productForm: Valid values:
     * IntegrationForm
     * LegacyForm
     */
    productForm: string | ros.IResolvable | undefined;
    /**
     * @Property reservedNodeCount: The number of reserved nodes. Must be 1 for basic version and multiple
     * of 3 for enterprise version.
     */
    reservedNodeCount: number | ros.IResolvable | undefined;
    /**
     * @Property reservedNodeSize: The size of each reserved node.
     */
    reservedNodeSize: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restoreToTime: The point in time to which you want to restore data from the backup set.
     */
    restoreToTime: string | ros.IResolvable | undefined;
    /**
     * @Property restoreType: The method that you want to use to restore data. Valid values:
     * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
     * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
     */
    restoreType: string | ros.IResolvable | undefined;
    /**
     * @Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    sourceDbClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDBCluster.TagsProperty[] | undefined;
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
export declare namespace RosDBCluster {
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
    readonly engineParams?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::ResourceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
 */
export declare class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::ResourceGroup";
    /**
     * @Attribute GroupName: The name of the resource group.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute GroupType: The type of the resource group.
     */
    readonly attrGroupType: ros.IResolvable;
    /**
     * @Attribute GroupUsers: The list of users in the resource group.
     */
    readonly attrGroupUsers: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property engine: Database engine, value:
     * AnalyticDB (default): AnalyticDB for mysql engine.
     * Sparkwarehouse: Sparkwarehous engine.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property groupName: The name of the resource group.
     * The name can be up to 255 characters in length.
     * The name must start with a letter or digit.
     * The name can contain letters, digits, hyphens (-), and underscores (_).
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property groupType: The type of the resource group. Valid values:
     * Interactive
     * Job
     * Note For more information about resource groups, see Resource group overview.
     */
    groupType: string | ros.IResolvable;
    /**
     * @Property autoStopInterval: Automatically stop time, the unit is minutes (m).
     */
    autoStopInterval: string | ros.IResolvable | undefined;
    /**
     * @Property clusterMode: The mode of cluster. Default: AutoScale.
     */
    clusterMode: string | ros.IResolvable | undefined;
    /**
     * @Property clusterSizeResource: A reserved parameter.
     */
    clusterSizeResource: string | ros.IResolvable | undefined;
    /**
     * @Property enableSpot: Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
     * True
     * False
     */
    enableSpot: boolean | ros.IResolvable | undefined;
    /**
     * @Property engineParams: Engine configuration.
     */
    engineParams: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property maxClusterCount: A reserved parameter.
     */
    maxClusterCount: number | ros.IResolvable | undefined;
    /**
     * @Property maxComputeResource: The maximum reserved computing resources.
     * If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
     * If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
     */
    maxComputeResource: string | ros.IResolvable | undefined;
    /**
     * @Property minClusterCount: A reserved parameter.
     */
    minClusterCount: number | ros.IResolvable | undefined;
    /**
     * @Property minComputeResource: The minimum reserved computing resources.
     * When GroupType is set to Interactive, set this parameter to 16ACU.
     * When GroupType is set to Job, set this parameter to 0ACU.
     */
    minComputeResource: string | ros.IResolvable | undefined;
    /**
     * @Property rules: The job resubmission rules.
     */
    rules: Array<RosResourceGroup.RulesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosResourceGroup {
    /**
     * @stability external
     */
    interface RulesProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::ResourceGroupAccountBinding`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroupAccountBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
 */
export declare class RosResourceGroupAccountBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADBLake::ResourceGroupAccountBinding";
    /**
     * @Attribute GroupName: The name of the resource group.
     */
    readonly attrGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the account.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the database cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property groupName: The name of the resource group.
     */
    groupName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupAccountBindingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
