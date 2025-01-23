import * as ros from '@alicloud/ros-cdk-core';
import { RosReadOnlyDBInstance } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosReadOnlyDBInstance as ReadOnlyDBInstanceProperty };

/**
 * Properties for defining a `ReadOnlyDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-readonlydbinstance
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
     * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs. This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance. Valid values:- **true**: enables the feature.- **false** (default): disables the feature.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

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
     * Cannot begin with http:\/\/ or https:\/\/.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Can be a null string.
     */
    readonly tags?: { [key: string]: (any) };

    /**
     * Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides. This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    readonly targetDedicatedHostIdForMaster?: string | ros.IResolvable;

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
 * Represents a `ReadOnlyDBInstance`.
 */
export interface IReadOnlyDBInstance extends ros.IResource {
    readonly props: ReadOnlyDBInstanceProps;

    /**
     * Attribute ConnectionString: DB instance connection url by Intranet.
     */
    readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute Port: Intranet port of created DB instance.
     */
    readonly attrPort: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::ReadOnlyDBInstance`, which is used to create a read-only ApsaraDB RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosReadOnlyDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-readonlydbinstance
 */
export class ReadOnlyDBInstance extends ros.Resource implements IReadOnlyDBInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ReadOnlyDBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute Port: Intranet port of created DB instance.
     */
    public readonly attrPort: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ReadOnlyDBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosReadOnlyDBInstance = new RosReadOnlyDBInstance(this, id,  {
            periodType: props.periodType === undefined || props.periodType === null ? 'Month' : props.periodType,
            targetDedicatedHostIdForMaster: props.targetDedicatedHostIdForMaster,
            category: props.category,
            engineVersion: props.engineVersion,
            privateIpAddress: props.privateIpAddress,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            vpcId: props.vpcId,
            dbInstanceClass: props.dbInstanceClass,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            payType: props.payType === undefined || props.payType === null ? 'Postpaid' : props.payType,
            deletionProtection: props.deletionProtection,
            dbInstanceStorageType: props.dbInstanceStorageType,
            dbInstanceId: props.dbInstanceId,
            dbInstanceStorage: props.dbInstanceStorage,
            dbInstanceDescription: props.dbInstanceDescription,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosReadOnlyDBInstance;
        this.attrConnectionString = rosReadOnlyDBInstance.attrConnectionString;
        this.attrDbInstanceId = rosReadOnlyDBInstance.attrDbInstanceId;
        this.attrPort = rosReadOnlyDBInstance.attrPort;
    }
}
