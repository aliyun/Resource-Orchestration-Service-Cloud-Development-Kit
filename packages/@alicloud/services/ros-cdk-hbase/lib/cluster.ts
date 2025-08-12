import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './hbase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `Cluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
 */
export interface ClusterProps {

    /**
     * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    readonly coreInstanceType: string | ros.IResolvable;

    /**
     * Property engine: The type of the service. Valid values:
     * hbase
     * hbaseue
     * bds
     */
    readonly engine: string | ros.IResolvable;

    /**
     * Property engineVersion: The version of the engine. Valid values:
     * hbase:1.1, 2.0
     * hbaseue:2.0
     * bds:1.0
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * Property nodeCount: The number of nodes. Valid values: 1 to 100.
     * ApsaraDB for HBase in single-node mode: one node
     * ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
     * ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
     * nodes
     */
    readonly nodeCount: number | ros.IResolvable;

    /**
     * Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of the zone.
     */
    readonly zoneId: string | ros.IResolvable;

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
     * Property coldStorageSize: The size of cold data storage.
     * If this parameter is set to 0, cold data storage is disabled.
     * If this parameter is set to a value greater than 0, cold data storage is enabled.
     * The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
     */
    readonly coldStorageSize?: number | ros.IResolvable;

    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property diskSize: The disk size of the node. Unit: GB.
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
     * Property diskType: The type of the disk. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     * cloud_essd_pl1
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
     * It shows that the current cloud disk version is unable to close after the encryption is turned on.
     */
    readonly encryptionKey?: string | ros.IResolvable;

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

    /**
     * Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Represents a `Cluster`.
 */
export interface ICluster extends ros.IResource {
    readonly props: ClusterProps;

    /**
     * Attribute ClusterId: The ID of the instance.
     */
    readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    readonly attrServiceConnAddrs: ros.IResolvable | string;

    /**
     * Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    readonly attrSlbConnAddrs: ros.IResolvable | string;

    /**
     * Attribute ThriftConn: Thrift Connection address list.
     */
    readonly attrThriftConn: ros.IResolvable | string;

    /**
     * Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    readonly attrUiProxyConnAddrInfo: ros.IResolvable | string;

    /**
     * Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    readonly attrZkConnAddrs: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBase::Cluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
 */
export class Cluster extends ros.Resource implements ICluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: The ID of the instance.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    public readonly attrServiceConnAddrs: ros.IResolvable | string;

    /**
     * Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    public readonly attrSlbConnAddrs: ros.IResolvable | string;

    /**
     * Attribute ThriftConn: Thrift Connection address list.
     */
    public readonly attrThriftConn: ros.IResolvable | string;

    /**
     * Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    public readonly attrUiProxyConnAddrInfo: ros.IResolvable | string;

    /**
     * Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    public readonly attrZkConnAddrs: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCluster = new RosCluster(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod,
            coldStorageSize: props.coldStorageSize,
            engineVersion: props.engineVersion,
            resourceGroupId: props.resourceGroupId,
            nodeCount: props.nodeCount,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            period: props.period,
            encryptionKey: props.encryptionKey,
            deletionProtection: props.deletionProtection,
            payType: props.payType,
            masterInstanceType: props.masterInstanceType,
            diskType: props.diskType,
            vpcId: props.vpcId,
            securityIpList: props.securityIpList,
            coreInstanceType: props.coreInstanceType,
            diskSize: props.diskSize,
            clusterName: props.clusterName,
            engine: props.engine,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrServiceConnAddrs = rosCluster.attrServiceConnAddrs;
        this.attrSlbConnAddrs = rosCluster.attrSlbConnAddrs;
        this.attrThriftConn = rosCluster.attrThriftConn;
        this.attrUiProxyConnAddrInfo = rosCluster.attrUiProxyConnAddrInfo;
        this.attrZkConnAddrs = rosCluster.attrZkConnAddrs;
    }
}
