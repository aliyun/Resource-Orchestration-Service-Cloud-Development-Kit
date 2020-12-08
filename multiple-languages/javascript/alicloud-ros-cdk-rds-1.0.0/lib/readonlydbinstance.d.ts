import * as ros from '@alicloud/ros-cdk-core';
import { RosReadOnlyDBInstance } from './rds.generated';
export { RosReadOnlyDBInstance as ReadOnlyDBInstanceProperty };
/**
 * Properties for defining a `ALIYUN::RDS::ReadOnlyDBInstance`
 */
export interface ReadOnlyDBInstanceProps {
    /**
     * @Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    readonly dbInstanceClass: string;
    /**
     * @Property dbInstanceId: The ID of the master instance.
     */
    readonly dbInstanceId: string;
    /**
     * @Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    readonly dbInstanceStorage: number;
    /**
     * @Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values:
     * - 5.6
     * - 5.7
     * - 8.0
     * - 2017_ent
     */
    readonly engineVersion: string;
    /**
     * @Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    readonly zoneId: string;
    /**
     * @Property category: The edition of the instance. Valid values:
     * - Basic
     * - HighAvailability
     * - AlwaysOn
     */
    readonly category?: string;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * - local_ssd/ephemeral_ssd: local SSDs.
     * - cloud_ssd: SSDs.
     * - cloud_essd: ESSDs.
     */
    readonly dbInstanceStorageType?: string;
    /**
     * @Property payType: The billing method. The system only supports Pay-As-You-Go. Valid value: Postpaid.
     */
    readonly payType?: string;
    /**
     * @Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    readonly privateIpAddress?: string;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    readonly tags?: {
        [key: string]: any;
    }[];
    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::RDS::ReadOnlyDBInstance`
 */
export declare class ReadOnlyDBInstance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ConnectionString: DB instance connection url by Intranet.
     */
    readonly attrConnectionString: any;
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute Port: Intranet port of created DB instance.
     */
    readonly attrPort: any;
    /**
     * Create a new `ALIYUN::RDS::ReadOnlyDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ReadOnlyDBInstanceProps, enableResourcePropertyConstraint?: boolean);
}
