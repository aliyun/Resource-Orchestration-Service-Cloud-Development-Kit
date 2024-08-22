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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::Account`, which is used to create a database account for an AnalyticDB for PostgreSQL instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::Account";
    /**
     * @Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the privileged account.
     * The name can contain lowercase letters, digits, and underscores (_).
     * The name must start with a lowercase letter and end with a lowercase letter or a digit.
     * The name cannot start with gp.
     * The name must be 2 to 16 characters in length.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the privileged account.
     * The password must contain at least three of the following character types: uppercase
     * letters, lowercase letters, digits, and special characters.
     * Special characters include ! @ # $ % ^ & * ( ) _ + - =
     * The password must be 8 to 32 characters in length.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     * Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
     * region, including instance IDs.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the privileged account.
     */
    accountDescription: string | ros.IResolvable | undefined;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::DBInstance`, which is used to create an AnalyticDB for PostgreSQL instance in reserved storage mode.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::DBInstance";
    /**
     * @Attribute ConnectionString: The endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: The order ID of the instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute Port: The port used to connect to the instance.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engineVersion: The version of the database engine. For example: 6.0、7.0
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property createSampleData: Whether to load the sample data set after the instance is created. The value can be:
     * true: load the sample dataset.
     * false: not to load the sample dataset
     */
    createSampleData: boolean | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    dbInstanceCategory: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceClass: The instance type.
     */
    dbInstanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceGroupCount: The number of compute nodes in the instance.
     * The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
     */
    dbInstanceGroupCount: number | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    dbInstanceMode: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionType: The type of the encryption. Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    encryptionType: string | ros.IResolvable | undefined;
    /**
     * @Property idleTime: Idle release wait time. That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
     */
    idleTime: number | ros.IResolvable | undefined;
    /**
     * @Property instanceSpec: The specification of segment nodes.
     * - When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.
     * - When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.
     * - When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
     * This parameter must be passed to create a storage elastic mode instance and a serverless version instance.
     */
    instanceSpec: string | ros.IResolvable | undefined;
    /**
     * @Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
     */
    masterNodeNum: number | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of subscription period, it could be Month\/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: Private IP address.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property prodType: Prod type. The value can be: standard, cost-effective. The default value is standard.
     */
    prodType: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property segDiskPerformanceLevel: Seg disk performance level. The value can be:
     * pl0、pl1 and pl2
     */
    segDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property segNodeNum: Calculate the number of nodes. The value can be:
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.
     * - When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.
     */
    segNodeNum: number | ros.IResolvable | undefined;
    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     * This parameter must be passed in to create a storage elastic mode instance.
     * Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
     */
    segStorageType: string | ros.IResolvable | undefined;
    /**
     * @Property serverlessMode: Mode of the Serverless instance. The value can be:
     * Manual: manual scheduling is the default value.
     * Auto: indicates automatic scheduling.
     */
    serverlessMode: string | ros.IResolvable | undefined;
    /**
     * @Property serverlessResource: Computing resource threshold. The value ranges from 8 to 32. The step length is 8.
     * The unit is ACU. The default value is 32.
     */
    serverlessResource: number | ros.IResolvable | undefined;
    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    storageSize: number | ros.IResolvable | undefined;
    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    tags: RosDBInstance.TagsProperty[] | undefined;
    /**
     * @Property vectorConfigurationStatus: the status of vector configuration. The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
     */
    vectorConfigurationStatus: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::ElasticDBInstance`, which is used to create an AnalyticDB for PostgreSQL instance in elastic storage mode.
 * @Note This class does not contain additional functions, so it is recommended to use the `ElasticDBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
 */
export declare class RosElasticDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::ElasticDBInstance";
    /**
     * @Attribute ConnectionString: The endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: The order ID of the instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute Port: The port used to connect to the instance.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engineVersion: The version of the database engine. For example: 6.0、7.0
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    instanceSpec: string | ros.IResolvable;
    /**
     * @Property segNodeNum: The number of segment nodes.
     * For the high availability version, the value ranges from 4 to 512.
     * The basic version ranges from 2 to 512.
     */
    segNodeNum: number | ros.IResolvable;
    /**
     * @Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     */
    segStorageType: string | ros.IResolvable;
    /**
     * @Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    storageSize: number | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    dbInstanceCategory: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    dbInstanceMode: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionType: The type of the encryption. Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    encryptionType: string | ros.IResolvable | undefined;
    /**
     * @Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
     */
    masterNodeNum: number | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Unit of subscription period, it could be Month\/Year. Default value is Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: Private IP address.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    tags: RosElasticDBInstance.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosElasticDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosElasticDBInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::InstancePublicConnection`, which is used to allocate a public connection string to an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstancePublicConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
 */
export declare class RosInstancePublicConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GPDB::InstancePublicConnection";
    /**
     * @Attribute ConnectionString: The connection string of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    connectionStringPrefix: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property port: The port number of the instance.
     */
    port: number | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancePublicConnectionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
