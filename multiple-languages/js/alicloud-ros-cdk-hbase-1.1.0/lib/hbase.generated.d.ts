import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
 */
export interface RosClusterProps {
    /**
     * @Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    readonly coreInstanceType: string | ros.IResolvable;
    /**
     * @Property engine: The type of the service. Valid values:
     * hbase
     * hbaseue
     * bds
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the engine. Valid values:
     * hbase:1.1, 2.0
     * hbaseue:2.0
     * bds:1.0
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property nodeCount: The number of nodes. Valid values: 1 to 100.
     * ApsaraDB for HBase in single-node mode: one node
     * ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
     * ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
     * nodes
     */
    readonly nodeCount: number | ros.IResolvable;
    /**
     * @Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property clusterName: The name of the instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * @Property coldStorageSize: The size of cold data storage.
     * If this parameter is set to 0, cold data storage is disabled.
     * If this parameter is set to a value greater than 0, cold data storage is enabled.
     * The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
     */
    readonly coldStorageSize?: number | ros.IResolvable;
    /**
     * @Property diskSize: The disk size of the node. Unit: GB.
     * For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
     * GB and the step size is 1 GB.
     * For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
     * from 400 GB to 64,000 GB and the step size is 40 GB.
     * For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
     * varies by instance type. The following list provides the mappings between disks sizes
     * and instance types:
     * hbase.d1.4xlarge =44000
     * hbase.d1.6xlarge =66000
     * hbase.d1.8xlarge =88000
     * hbase.i2.xlarge =894
     * hbase.i2.2xlarge =1788
     * hbase.i2.4xlarge =3576
     * hbase.i2.8xlarge =7152
     * hbase.d2s.5xlarge =58400
     * hbase.d2s.10xlarge =109500
     */
    readonly diskSize?: number | ros.IResolvable;
    /**
     * @Property diskType: The type of the disk. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     * cloud_essd_pl1
     */
    readonly diskType?: string | ros.IResolvable;
    /**
     * @Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
     * It shows that the current cloud disk version is unable to close after the encryption is turned on.
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * @Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    readonly masterInstanceType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period.
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription period. Valid values:
     * year
     * month
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBase::Cluster`, which is used to create an ApsaraDB for HBase cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBase::Cluster";
    /**
     * @Attribute ClusterId: The ID of the instance.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    readonly attrServiceConnAddrs: ros.IResolvable;
    /**
     * @Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    readonly attrSlbConnAddrs: ros.IResolvable;
    /**
     * @Attribute ThriftConn: Thrift Connection address list.
     */
    readonly attrThriftConn: ros.IResolvable;
    /**
     * @Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    readonly attrUiProxyConnAddrInfo: ros.IResolvable;
    /**
     * @Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    readonly attrZkConnAddrs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    coreInstanceType: string | ros.IResolvable;
    /**
     * @Property engine: The type of the service. Valid values:
     * hbase
     * hbaseue
     * bds
     */
    engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the engine. Valid values:
     * hbase:1.1, 2.0
     * hbaseue:2.0
     * bds:1.0
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property nodeCount: The number of nodes. Valid values: 1 to 100.
     * ApsaraDB for HBase in single-node mode: one node
     * ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
     * ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
     * nodes
     */
    nodeCount: number | ros.IResolvable;
    /**
     * @Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    payType: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property clusterName: The name of the instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    clusterName: string | ros.IResolvable | undefined;
    /**
     * @Property coldStorageSize: The size of cold data storage.
     * If this parameter is set to 0, cold data storage is disabled.
     * If this parameter is set to a value greater than 0, cold data storage is enabled.
     * The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
     */
    coldStorageSize: number | ros.IResolvable | undefined;
    /**
     * @Property diskSize: The disk size of the node. Unit: GB.
     * For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
     * GB and the step size is 1 GB.
     * For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
     * from 400 GB to 64,000 GB and the step size is 40 GB.
     * For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
     * varies by instance type. The following list provides the mappings between disks sizes
     * and instance types:
     * hbase.d1.4xlarge =44000
     * hbase.d1.6xlarge =66000
     * hbase.d1.8xlarge =88000
     * hbase.i2.xlarge =894
     * hbase.i2.2xlarge =1788
     * hbase.i2.4xlarge =3576
     * hbase.i2.8xlarge =7152
     * hbase.d2s.5xlarge =58400
     * hbase.d2s.10xlarge =109500
     */
    diskSize: number | ros.IResolvable | undefined;
    /**
     * @Property diskType: The type of the disk. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     * cloud_essd_pl1
     */
    diskType: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
     * It shows that the current cloud disk version is unable to close after the encryption is turned on.
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    masterInstanceType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period.
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription period. Valid values:
     * year
     * month
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMultiZoneCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
 */
export interface RosMultiZoneClusterProps {
    /**
     * @Property arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
     */
    readonly arbiterVSwitchId: string | ros.IResolvable;
    /**
     * @Property arbiterZoneId: Arbiter zond id.
     */
    readonly arbiterZoneId: string | ros.IResolvable;
    /**
     * @Property archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
     */
    readonly archVersion: string | ros.IResolvable;
    /**
     * @Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    readonly coreDiskSize: number | ros.IResolvable;
    /**
     * @Property coreDiskType: Core node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    readonly coreDiskType: string | ros.IResolvable;
    /**
     * @Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    readonly coreInstanceType: string | ros.IResolvable;
    /**
     * @Property coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
     */
    readonly coreNodeCount: number | ros.IResolvable;
    /**
     * @Property engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the engine. Valid values:
     * hbaseue:2.0
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    readonly logDiskSize: number | ros.IResolvable;
    /**
     * @Property logDiskType: Log node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    readonly logDiskType: string | ros.IResolvable;
    /**
     * @Property logInstanceType: Log instance type.
     */
    readonly logInstanceType: string | ros.IResolvable;
    /**
     * @Property logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
     */
    readonly logNodeCount: number | ros.IResolvable;
    /**
     * @Property multiZoneCombination: Availability zone combination.
     */
    readonly multiZoneCombination: string | ros.IResolvable;
    /**
     * @Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
     */
    readonly primaryVSwitchId: string | ros.IResolvable;
    /**
     * @Property primaryZoneId: Availability zone ID of the primary availability zone instance.
     */
    readonly primaryZoneId: string | ros.IResolvable;
    /**
     * @Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
     */
    readonly standbyVSwitchId: string | ros.IResolvable;
    /**
     * @Property standbyZoneId: Standby zone id.
     */
    readonly standbyZoneId: string | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property clusterName: The name of the instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * @Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    readonly masterInstanceType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period.
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription period. Valid values:
     * year
     * month
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBase::MultiZoneCluster`, which is used to create an ApsaraDB for HBase cluster that resides in multiple zones.
 * @Note This class does not contain additional functions, so it is recommended to use the `MultiZoneCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
 */
export declare class RosMultiZoneCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBase::MultiZoneCluster";
    /**
     * @Attribute ClusterId: The ID of the instance.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    readonly attrServiceConnAddrs: ros.IResolvable;
    /**
     * @Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    readonly attrSlbConnAddrs: ros.IResolvable;
    /**
     * @Attribute ThriftConn: Thrift Connection address list.
     */
    readonly attrThriftConn: ros.IResolvable;
    /**
     * @Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    readonly attrUiProxyConnAddrInfo: ros.IResolvable;
    /**
     * @Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    readonly attrZkConnAddrs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
     */
    arbiterVSwitchId: string | ros.IResolvable;
    /**
     * @Property arbiterZoneId: Arbiter zond id.
     */
    arbiterZoneId: string | ros.IResolvable;
    /**
     * @Property archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
     */
    archVersion: string | ros.IResolvable;
    /**
     * @Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    coreDiskSize: number | ros.IResolvable;
    /**
     * @Property coreDiskType: Core node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    coreDiskType: string | ros.IResolvable;
    /**
     * @Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    coreInstanceType: string | ros.IResolvable;
    /**
     * @Property coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
     */
    coreNodeCount: number | ros.IResolvable;
    /**
     * @Property engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the engine. Valid values:
     * hbaseue:2.0
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    logDiskSize: number | ros.IResolvable;
    /**
     * @Property logDiskType: Log node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    logDiskType: string | ros.IResolvable;
    /**
     * @Property logInstanceType: Log instance type.
     */
    logInstanceType: string | ros.IResolvable;
    /**
     * @Property logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
     */
    logNodeCount: number | ros.IResolvable;
    /**
     * @Property multiZoneCombination: Availability zone combination.
     */
    multiZoneCombination: string | ros.IResolvable;
    /**
     * @Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    payType: string | ros.IResolvable;
    /**
     * @Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
     */
    primaryVSwitchId: string | ros.IResolvable;
    /**
     * @Property primaryZoneId: Availability zone ID of the primary availability zone instance.
     */
    primaryZoneId: string | ros.IResolvable;
    /**
     * @Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
     */
    standbyVSwitchId: string | ros.IResolvable;
    /**
     * @Property standbyZoneId: Standby zone id.
     */
    standbyZoneId: string | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property clusterName: The name of the instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    clusterName: string | ros.IResolvable | undefined;
    /**
     * @Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    masterInstanceType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period.
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription period. Valid values:
     * year
     * month
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMultiZoneClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
