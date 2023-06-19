import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstance as DBInstanceProperty };

/**
 * Properties for defining a `ALIYUN::GPDB::DBInstance`
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
     * Property periodUnit: Unit of subscription period, it could be Month/Year. Default value is Month.
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
     * Property storageSize: The storage capacity of per segment node. Unit: GB. Minimum is 50, max is 4000, step is 50.
     */
    readonly storageSize?: number | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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
 * A ROS resource type:  `ALIYUN::GPDB::DBInstance`
 */
export class DBInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ConnectionString: The endpoint of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Attribute OrderId: The order ID of the instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute Port: The port used to connect to the instance.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GPDB::DBInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBInstance = new RosDBInstance(this, id,  {
            masterNodeNum: props.masterNodeNum,
            instanceSpec: props.instanceSpec,
            privateIpAddress: props.privateIpAddress,
            idleTime: props.idleTime,
            segNodeNum: props.segNodeNum,
            segStorageType: props.segStorageType,
            encryptionKey: props.encryptionKey,
            dbInstanceGroupCount: props.dbInstanceGroupCount,
            dbInstanceCategory: props.dbInstanceCategory,
            vectorConfigurationStatus: props.vectorConfigurationStatus,
            securityIpList: props.securityIpList,
            serverlessResource: props.serverlessResource,
            tags: props.tags,
            dbInstanceDescription: props.dbInstanceDescription,
            encryptionType: props.encryptionType,
            serverlessMode: props.serverlessMode,
            engineVersion: props.engineVersion,
            createSampleData: props.createSampleData,
            zoneId: props.zoneId,
            vpcId: props.vpcId,
            dbInstanceClass: props.dbInstanceClass,
            vSwitchId: props.vSwitchId,
            period: props.period,
            storageSize: props.storageSize,
            payType: props.payType === undefined || props.payType === null ? 'Postpaid' : props.payType,
            dbInstanceMode: props.dbInstanceMode,
            segDiskPerformanceLevel: props.segDiskPerformanceLevel,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
        this.attrConnectionString = rosDBInstance.attrConnectionString;
        this.attrDbInstanceId = rosDBInstance.attrDbInstanceId;
        this.attrOrderId = rosDBInstance.attrOrderId;
        this.attrPort = rosDBInstance.attrPort;
    }
}
