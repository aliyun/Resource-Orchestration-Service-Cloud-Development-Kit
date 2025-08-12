import * as ros from '@alicloud/ros-cdk-core';
import { RosElasticDBInstance } from './gpdb.generated';
export { RosElasticDBInstance as ElasticDBInstanceProperty };
/**
 * Properties for defining a `ElasticDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
 */
export interface ElasticDBInstanceProps {
    /**
     * Property engineVersion: The version of the database engine. For example: 6.0、7.0
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * Property instanceSpec: The specification of segment nodes. For example: 2C16G, 4C32G, 16C128G.
     */
    readonly instanceSpec: string | ros.IResolvable;
    /**
     * Property segNodeNum: The number of segment nodes.
     * For the high availability version, the value ranges from 4 to 512.
     * The basic version ranges from 2 to 512.
     */
    readonly segNodeNum: number | ros.IResolvable;
    /**
     * Property segStorageType: The disk type of segment nodes. For example: cloud_essd, cloud_efficiency.
     */
    readonly segStorageType: string | ros.IResolvable;
    /**
     * Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    readonly storageSize: number | ros.IResolvable;
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
     * Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
     * This parameter must be passed in to create a storage reservation mode instance.
     */
    readonly dbInstanceCategory?: string | ros.IResolvable;
    /**
     * Property dbInstanceDescription: The description of the instance. The description cannot exceed 256 characters in length.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property dbInstanceMode: The db instance mode. Valid values: StorageElastic, Serverless, Classic.
     */
    readonly dbInstanceMode?: string | ros.IResolvable;
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
     * Property securityIpList: The whitelist of IP addresses that are allowed to access the instance. Default value:
     * 127.0.0.1.
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * Property tags: The list of instance tags in the form of key\/value pairs.
     * You can define a maximum of 20 tags for instance.
     */
    readonly tags?: RosElasticDBInstance.TagsProperty[];
    /**
     * Property vpcId: The VPC ID of the instance. If you set the InstanceNetworkType parameter to VPC, you
     * must also specify the VPCId parameter. The specified region of the VPC must be the
     * same as the RegionId value.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * Represents a `ElasticDBInstance`.
 */
export interface IElasticDBInstance extends ros.IResource {
    readonly props: ElasticDBInstanceProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::ElasticDBInstance`, which is used to create an AnalyticDB for PostgreSQL instance in elastic storage mode.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosElasticDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
 */
export declare class ElasticDBInstance extends ros.Resource implements IElasticDBInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ElasticDBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
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
    constructor(scope: ros.Construct, id: string, props: ElasticDBInstanceProps, enableResourcePropertyConstraint?: boolean);
}
