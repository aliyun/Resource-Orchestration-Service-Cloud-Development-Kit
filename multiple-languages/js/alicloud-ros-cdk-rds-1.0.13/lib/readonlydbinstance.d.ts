import * as ros from '@alicloud/ros-cdk-core';
import { RosReadOnlyDBInstance } from './rds.generated';
export { RosReadOnlyDBInstance as ReadOnlyDBInstanceProperty };
/**
 * Properties for defining a `ALIYUN::RDS::ReadOnlyDBInstance`
 */
export interface ReadOnlyDBInstanceProps {
    /**
     * Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The ID of the master instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    readonly dbInstanceStorage: number | ros.IResolvable;
    /**
     * Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property category: The RDS edition of the read-only instance. Valid values:
     * Basic: Basic Edition.
     * HighAvailability: High-availability Edition. This is the default value.
     * AlwaysOn: Cluster Edition.
     * Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
     */
    readonly category?: string | ros.IResolvable;
    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property dbInstanceStorageType: The type of storage media that is used by the instance. Valid values:
     * local_ssd: local SSDs
     * cloud_ssd: standard SSDs
     * cloud_essd: ESSDs of performance level 1 (PL1)
     * cloud_essd2: ESSDs of PL2
     * cloud_essd3: ESSDs of PL3
     */
    readonly dbInstanceStorageType?: string | ros.IResolvable;
    /**
     * Property payType: The billing method.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodType: Charge period for created instances.
     */
    readonly periodType?: string | ros.IResolvable;
    /**
     * Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: The tags of an instance.
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
        [key: string]: (any);
    };
    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
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
     * Attribute ConnectionString: DB instance connection url by Intranet.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Attribute Port: Intranet port of created DB instance.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RDS::ReadOnlyDBInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ReadOnlyDBInstanceProps, enableResourcePropertyConstraint?: boolean);
}
