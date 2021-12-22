import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './adb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBCluster as DBClusterProperty };

/**
 * Properties for defining a `ALIYUN::ADB::DBCluster`
 */
export interface DBClusterProps {

    /**
     * Property dbClusterCategory: The edition of the cluster.
     * Valid values when the cluster is in reserved mode:
     * Basic
     * Cluster
     * When the cluster is in elastic mode, set the value to MixedStorage.
     */
    readonly dbClusterCategory: string | ros.IResolvable;

    /**
     * Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
     */
    readonly dbClusterVersion: string | ros.IResolvable;

    /**
     * Property mode: The mode of the cluster. Valid values:
     * Reserver: the reserved mode
     * Flexible: the elastic mode
     */
    readonly mode: string | ros.IResolvable;

    /**
     * Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC.
     *
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property computeResource: The computing resource of the cluster. This parameter is required in elastic mode.
     */
    readonly computeResource?: string | ros.IResolvable;

    /**
     * Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
     * Basic Edition: T8, T16, T32, and T52
     * Cluster Edition: C8 and C32
     */
    readonly dbClusterClass?: string | ros.IResolvable;

    /**
     * Property dbClusterDescription: The description of the cluster.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * Property dbNodeGroupCount: The number of node groups. This parameter is required in reserved mode. Valid values:
     * T8, T16, T32, and T52: 1
     * C8 and C32: 1 to 128
     */
    readonly dbNodeGroupCount?: number | ros.IResolvable;

    /**
     * Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
     * T8: 100 to 500
     * T16 and T32: 100 to 2000
     * T52: 100 to 4000
     * C8: 100 to 1000
     * C32: 100 to 8000
     * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
     */
    readonly dbNodeStorage?: number | ros.IResolvable;

    /**
     * Property elasticIoResource: Elastic IO Unit
     * Note the flexible mode cluster will use this parameter.
     */
    readonly elasticIoResource?: number | ros.IResolvable;

    /**
     * Property executorCount: ExecutorCount
     */
    readonly executorCount?: number | ros.IResolvable;

    /**
     * Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * Valid values when the Period parameter is set to Year: 1, 2, and 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
     * Year: subscription on a yearly basis
     * Month: subscription on a monthly basis
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ADB::DBCluster`
 */
export class DBCluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ConnectionString: Vpc connection string.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * Attribute OrderId: The ID of the order.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ADB::DBCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBCluster = new RosDBCluster(this, id,  {
            dbNodeStorage: props.dbNodeStorage,
            periodType: props.periodType,
            dbClusterCategory: props.dbClusterCategory,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            vpcId: props.vpcId,
            vSwitchId: props.vSwitchId,
            mode: props.mode,
            dbClusterDescription: props.dbClusterDescription,
            computeResource: props.computeResource,
            period: props.period,
            payType: props.payType,
            elasticIoResource: props.elasticIoResource,
            dbClusterVersion: props.dbClusterVersion === undefined || props.dbClusterVersion === null ? '3.0' : props.dbClusterVersion,
            dbNodeGroupCount: props.dbNodeGroupCount,
            executorCount: props.executorCount,
            dbClusterClass: props.dbClusterClass,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
        this.attrConnectionString = rosDBCluster.attrConnectionString;
        this.attrDbClusterId = rosDBCluster.attrDbClusterId;
        this.attrOrderId = rosDBCluster.attrOrderId;
    }
}
