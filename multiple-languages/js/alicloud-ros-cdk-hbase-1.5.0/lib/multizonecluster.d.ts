import * as ros from '@alicloud/ros-cdk-core';
import { RosMultiZoneCluster } from './hbase.generated';
export { RosMultiZoneCluster as MultiZoneClusterProperty };
/**
 * Properties for defining a `MultiZoneCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
 */
export interface MultiZoneClusterProps {
    /**
     * Property arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
     */
    readonly arbiterVSwitchId: string | ros.IResolvable;
    /**
     * Property arbiterZoneId: Arbiter zond id.
     */
    readonly arbiterZoneId: string | ros.IResolvable;
    /**
     * Property archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
     */
    readonly archVersion: string | ros.IResolvable;
    /**
     * Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    readonly coreDiskSize: number | ros.IResolvable;
    /**
     * Property coreDiskType: Core node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    readonly coreDiskType: string | ros.IResolvable;
    /**
     * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    readonly coreInstanceType: string | ros.IResolvable;
    /**
     * Property coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
     */
    readonly coreNodeCount: number | ros.IResolvable;
    /**
     * Property engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * Property engineVersion: The version of the engine. Valid values:
     * hbaseue:2.0
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * Property logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    readonly logDiskSize: number | ros.IResolvable;
    /**
     * Property logDiskType: Log node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    readonly logDiskType: string | ros.IResolvable;
    /**
     * Property logInstanceType: Log instance type.
     */
    readonly logInstanceType: string | ros.IResolvable;
    /**
     * Property logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
     */
    readonly logNodeCount: number | ros.IResolvable;
    /**
     * Property multiZoneCombination: Availability zone combination.
     */
    readonly multiZoneCombination: string | ros.IResolvable;
    /**
     * Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
     */
    readonly primaryVSwitchId: string | ros.IResolvable;
    /**
     * Property primaryZoneId: Availability zone ID of the primary availability zone instance.
     */
    readonly primaryZoneId: string | ros.IResolvable;
    /**
     * Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
     */
    readonly standbyVSwitchId: string | ros.IResolvable;
    /**
     * Property standbyZoneId: Standby zone id.
     */
    readonly standbyZoneId: string | ros.IResolvable;
    /**
     * Property autoRenewPeriod: The auto-renewal period. Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * Property clusterName: The name of the instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    readonly masterInstanceType?: string | ros.IResolvable;
    /**
     * Property period: The subscription period.
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: The unit of the subscription period. Valid values:
     * year
     * month
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBase::MultiZoneCluster`, which is used to create an ApsaraDB for HBase cluster that resides in multiple zones.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMultiZoneCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
 */
export declare class MultiZoneCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MultiZoneClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: The ID of the instance.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    readonly attrServiceConnAddrs: ros.IResolvable;
    /**
     * Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    readonly attrSlbConnAddrs: ros.IResolvable;
    /**
     * Attribute ThriftConn: Thrift Connection address list.
     */
    readonly attrThriftConn: ros.IResolvable;
    /**
     * Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    readonly attrUiProxyConnAddrInfo: ros.IResolvable;
    /**
     * Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    readonly attrZkConnAddrs: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MultiZoneClusterProps, enableResourcePropertyConstraint?: boolean);
}
