import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './adblake.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBCluster as DBClusterProperty };

/**
 * Properties for defining a `DBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export interface DBClusterProps {

    /**
     * Property dbClusterVersion: The version of the cluster. Set the value to 5.0.
     */
    readonly dbClusterVersion: string | ros.IResolvable;

    /**
     * Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go.
     * Prepaid: subscription.
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property vpcId: The virtual private cloud (VPC) ID of the cluster.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch ID of the cluster.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID.
     * Note You can call the  DescribeRegions  operation to query the most recent zone list.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property backupSetId: The ID of the backup set that you want to use to restore data.
     * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * Property cloneSourceRegionId: The ID of the source region where the cluster is located.
     */
    readonly cloneSourceRegionId?: string | ros.IResolvable;

    /**
     * Property computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly computeResource?: string | ros.IResolvable;

    /**
     * Property dbClusterDescription: The description of the cluster.
     * The description cannot start with http:\/\/ or https:\/\/.
     * The description must be 2 to 256 characters in length
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * Property dbClusterNetworkType: The network type of the cluster. Valid values:
     * VPC
     */
    readonly dbClusterNetworkType?: string | ros.IResolvable;

    /**
     * Property diskEncryption: Specifies whether to encrypt the disk. Valid values:
     * true
     * false (default)
     */
    readonly diskEncryption?: boolean | ros.IResolvable;

    /**
     * Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
     * true (default)
     * false
     */
    readonly enableDefaultResourcePool?: boolean | ros.IResolvable;

    /**
     * Property kmsId:
     */
    readonly kmsId?: string | ros.IResolvable;

    /**
     * Property period: The subscription duration of the subscription cluster.
     * Valid values when Period is set to Year: 1 to 3 (integer).
     * Valid values when Period is set to Month: 1 to 9 (integer).
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * Property periodType: The subscription type of the subscription cluster. Valid values:
     * Year: subscription on a yearly basis.
     * Month: subscription on a monthly basis.
     * Note This parameter must be specified when PayType is set to Prepaid.
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * Property productForm: Valid values:
     * IntegrationForm
     * LegacyForm
     */
    readonly productForm?: string | ros.IResolvable;

    /**
     * Property productVersion: The version of the cluster.Note If only ProductForm is set to IntegrationForm, enter this parameter.
     */
    readonly productVersion?: string | ros.IResolvable;

    /**
     * Property reservedNodeCount: The number of reserved nodes. Must be 1 for basic version and multiple 
     * of 3 for enterprise version.
     */
    readonly reservedNodeCount?: number | ros.IResolvable;

    /**
     * Property reservedNodeSize: The size of each reserved node.
     */
    readonly reservedNodeSize?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property restoreToTime: The point in time to which you want to restore data from the backup set.
     */
    readonly restoreToTime?: string | ros.IResolvable;

    /**
     * Property restoreType: The method that you want to use to restore data. Valid values:
     * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
     * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
     */
    readonly restoreType?: string | ros.IResolvable;

    /**
     * Property secondaryVSwitchId: The secondary vSwitch ID of the cluster.
     */
    readonly secondaryVSwitchId?: string | ros.IResolvable;

    /**
     * Property secondaryZoneId: The secondary zone ID.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;

    /**
     * Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
     */
    readonly sourceDbClusterId?: string | ros.IResolvable;

    /**
     * Property storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
     * Note This parameter must be specified with a unit.
     */
    readonly storageResource?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];
}

/**
 * Represents a `DBCluster`.
 */
export interface IDBCluster extends ros.IResource {
    readonly props: DBClusterProps;

    /**
     * Attribute ConnectionString: The public endpoint that is used to connect to the cluster.
     */
    readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
     */
    readonly attrDbClusterId: ros.IResolvable | string;

    /**
     * Attribute OrderId: The order ID.
     */
    readonly attrOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADBLake::DBCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
export class DBCluster extends ros.Resource implements IDBCluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConnectionString: The public endpoint that is used to connect to the cluster.
     */
    public readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable | string;

    /**
     * Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBCluster = new RosDBCluster(this, id,  {
            periodType: props.periodType,
            storageResource: props.storageResource,
            restoreToTime: props.restoreToTime,
            resourceGroupId: props.resourceGroupId,
            productForm: props.productForm,
            dbClusterNetworkType: props.dbClusterNetworkType,
            productVersion: props.productVersion,
            reservedNodeCount: props.reservedNodeCount,
            diskEncryption: props.diskEncryption,
            dbClusterVersion: props.dbClusterVersion,
            restoreType: props.restoreType,
            tags: props.tags,
            enableDefaultResourcePool: props.enableDefaultResourcePool,
            cloneSourceRegionId: props.cloneSourceRegionId,
            zoneId: props.zoneId,
            vpcId: props.vpcId,
            vSwitchId: props.vSwitchId,
            dbClusterDescription: props.dbClusterDescription,
            secondaryVSwitchId: props.secondaryVSwitchId,
            reservedNodeSize: props.reservedNodeSize,
            computeResource: props.computeResource,
            period: props.period,
            payType: props.payType === undefined || props.payType === null ? 'Postpaid' : props.payType,
            backupSetId: props.backupSetId,
            secondaryZoneId: props.secondaryZoneId,
            sourceDbClusterId: props.sourceDbClusterId,
            kmsId: props.kmsId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
        this.attrConnectionString = rosDBCluster.attrConnectionString;
        this.attrDbClusterId = rosDBCluster.attrDbClusterId;
        this.attrOrderId = rosDBCluster.attrOrderId;
    }
}
