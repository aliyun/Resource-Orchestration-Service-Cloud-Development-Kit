import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './gpdb.generated';
export { RosDBInstance as DBInstanceProperty };
/**
 * Properties for defining a `DBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
 */
export interface DBInstanceProps {
    /**
     * Property engineVersion: The version of the database engine. For example: 6.0、7.0
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property zoneId: The zone ID of the instance, such as cn-hangzhou-d. You can call the DescribeRegions
     * operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property createSampleData: Whether to load the sample data set after the instance is created. The value can be:
     * true: load the sample dataset.
     * false: not to load the sample dataset
     */
    readonly createSampleData?: boolean | ros.IResolvable;
    /**
     * Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    readonly dbInstanceCategory?: string | ros.IResolvable;
    /**
     * Property dbInstanceClass: The instance type.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;
    /**
     * Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property dbInstanceGroupCount: The number of compute nodes in the instance.
     * The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
     */
    readonly dbInstanceGroupCount?: number | ros.IResolvable;
    /**
     * Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    readonly dbInstanceMode?: string | ros.IResolvable;
    /**
     * Property deployMode: The deployment mode of the instance.
     */
    readonly deployMode?: string | ros.IResolvable;
    /**
     * Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter. Otherwise, leave this parameter empty.
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * Property encryptionType: The type of the encryption. Default value: NULL. Valid values:
     * NULL: Encryption is disabled.
     * CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
     * Note: Disk encryption cannot be disabled after it is enabled.
     */
    readonly encryptionType?: string | ros.IResolvable;
    /**
     * Property idleTime: Idle release wait time. That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
     */
    readonly idleTime?: number | ros.IResolvable;
    /**
     * Property instanceSpec: The specification of segment nodes.
     * - When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.
     * - When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.
     * - When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
     * This parameter must be passed to create a storage elastic mode instance and a serverless version instance.
     */
    readonly instanceSpec?: string | ros.IResolvable;
    /**
     * Property masterNodeNum: The number of master nodes. Minimum is 1, max is 2.
     */
    readonly masterNodeNum?: number | ros.IResolvable;
    /**
     * Property payType: The billing method of the instance. Default value: Postpaid. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property period: The subscription period. While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: Unit of subscription period, it could be Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property privateIpAddress: Private IP address.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * Property prodType: Prod type. The value can be: standard, cost-effective. The default value is standard.
     */
    readonly prodType?: string | ros.IResolvable;
    /**
     * Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * Property segDiskPerformanceLevel: Seg disk performance level. The value can be:
     * pl0、pl1 and pl2
     */
    readonly segDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * Property segNodeNum: Calculate the number of nodes. The value can be:
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.
     * - When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.
     * - When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.
     */
    readonly segNodeNum?: number | ros.IResolvable;
    /**
     * Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     * This parameter must be passed in to create a storage elastic mode instance.
     * Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
     */
    readonly segStorageType?: string | ros.IResolvable;
    /**
     * Property serverlessMode: Mode of the Serverless instance. The value can be:
     * Manual: manual scheduling is the default value.
     * Auto: indicates automatic scheduling.
     */
    readonly serverlessMode?: string | ros.IResolvable;
    /**
     * Property serverlessResource: Computing resource threshold. The value ranges from 8 to 32. The step length is 8.
     * The unit is ACU. The default value is 32.
     */
    readonly serverlessResource?: number | ros.IResolvable;
    /**
     * Property standbyVSwitchId: The standby VSwitch ID of the instance.
     */
    readonly standbyVSwitchId?: string | ros.IResolvable;
    /**
     * Property standbyZoneId: The standby zone ID of the instance.
     */
    readonly standbyZoneId?: string | ros.IResolvable;
    /**
     * Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    readonly storageSize?: number | ros.IResolvable;
    /**
     * Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    readonly tags?: RosDBInstance.TagsProperty[];
    /**
     * Property vectorConfigurationStatus: the status of vector configuration. The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
     */
    readonly vectorConfigurationStatus?: string | ros.IResolvable;
    /**
     * Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * Represents a `DBInstance`.
 */
export interface IDBInstance extends ros.IResource {
    readonly props: DBInstanceProps;
    /**
     * Attribute ConnectionString: The endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute OrderId: The order ID of the instance.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute Port: The port used to connect to the instance.
     */
    readonly attrPort: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::DBInstance`, which is used to create an AnalyticDB for PostgreSQL instance in reserved storage mode.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
 */
export declare class DBInstance extends ros.Resource implements IDBInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConnectionString: The endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute OrderId: The order ID of the instance.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute Port: The port used to connect to the instance.
     */
    readonly attrPort: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps, enableResourcePropertyConstraint?: boolean);
}
