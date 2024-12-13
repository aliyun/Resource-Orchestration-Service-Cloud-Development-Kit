// Generated from the AliCloud ROS Resource Specification

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
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('coldStorageSize', ros.validateNumber)(properties.coldStorageSize));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["1.0","1.1","2.0"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('nodeCount', ros.requiredValidator)(properties.nodeCount));
    errors.collect(ros.propertyValidator('nodeCount', ros.validateNumber)(properties.nodeCount));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('masterInstanceType', ros.validateString)(properties.masterInstanceType));
    if(properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedValues)({
          data: properties.diskType,
          allowedValues: ["cloud_efficiency","cloud_essd_pl1","cloud_ssd","local_hdd_pro","local_ssd_pro"],
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('coreInstanceType', ros.requiredValidator)(properties.coreInstanceType));
    errors.collect(ros.propertyValidator('coreInstanceType', ros.validateString)(properties.coreInstanceType));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    if(properties.clusterName && (typeof properties.clusterName) !== 'object') {
        errors.collect(ros.propertyValidator('clusterName', ros.validateAllowedPattern)({
          data: properties.clusterName,
          reg: /^[a-zA-Z0-9_-]{2,30}$/
        }));
    }
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["hbase","hbaseue","bds"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBase::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBase::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'CoreInstanceType': ros.stringToRosTemplate(properties.coreInstanceType),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'NodeCount': ros.numberToRosTemplate(properties.nodeCount),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'ClusterName': ros.stringToRosTemplate(properties.clusterName),
      'ColdStorageSize': ros.numberToRosTemplate(properties.coldStorageSize),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'DiskSize': ros.numberToRosTemplate(properties.diskSize),
      'DiskType': ros.stringToRosTemplate(properties.diskType),
      'EncryptionKey': ros.stringToRosTemplate(properties.encryptionKey),
      'MasterInstanceType': ros.stringToRosTemplate(properties.masterInstanceType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityIPList': ros.stringToRosTemplate(properties.securityIpList),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBase::Cluster`, which is used to create an ApsaraDB for HBase cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBase::Cluster";

    /**
     * @Attribute ClusterId: The ID of the instance.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    public readonly attrServiceConnAddrs: ros.IResolvable;

    /**
     * @Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    public readonly attrSlbConnAddrs: ros.IResolvable;

    /**
     * @Attribute ThriftConn: Thrift Connection address list.
     */
    public readonly attrThriftConn: ros.IResolvable;

    /**
     * @Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    public readonly attrUiProxyConnAddrInfo: ros.IResolvable;

    /**
     * @Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    public readonly attrZkConnAddrs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    public coreInstanceType: string | ros.IResolvable;

    /**
     * @Property engine: The type of the service. Valid values:
     * hbase
     * hbaseue
     * bds
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the engine. Valid values:
     * hbase:1.1, 2.0
     * hbaseue:2.0
     * bds:1.0
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property nodeCount: The number of nodes. Valid values: 1 to 100.
     * ApsaraDB for HBase in single-node mode: one node
     * ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
     * ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
     * nodes
     */
    public nodeCount: number | ros.IResolvable;

    /**
     * @Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property clusterName: The name of the instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    public clusterName: string | ros.IResolvable | undefined;

    /**
     * @Property coldStorageSize: The size of cold data storage.
     * If this parameter is set to 0, cold data storage is disabled.
     * If this parameter is set to a value greater than 0, cold data storage is enabled.
     * The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
     */
    public coldStorageSize: number | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

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
    public diskSize: number | ros.IResolvable | undefined;

    /**
     * @Property diskType: The type of the disk. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     * cloud_essd_pl1
     */
    public diskType: string | ros.IResolvable | undefined;

    /**
     * @Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
     * It shows that the current cloud disk version is unable to close after the encryption is turned on.
     */
    public encryptionKey: string | ros.IResolvable | undefined;

    /**
     * @Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    public masterInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period.
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription period. Valid values:
     * year
     * month
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrServiceConnAddrs = this.getAtt('ServiceConnAddrs');
        this.attrSlbConnAddrs = this.getAtt('SlbConnAddrs');
        this.attrThriftConn = this.getAtt('ThriftConn');
        this.attrUiProxyConnAddrInfo = this.getAtt('UiProxyConnAddrInfo');
        this.attrZkConnAddrs = this.getAtt('ZkConnAddrs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.coreInstanceType = props.coreInstanceType;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.nodeCount = props.nodeCount;
        this.payType = props.payType;
        this.zoneId = props.zoneId;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.clusterName = props.clusterName;
        this.coldStorageSize = props.coldStorageSize;
        this.deletionProtection = props.deletionProtection;
        this.diskSize = props.diskSize;
        this.diskType = props.diskType;
        this.encryptionKey = props.encryptionKey;
        this.masterInstanceType = props.masterInstanceType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resourceGroupId = props.resourceGroupId;
        this.securityIpList = props.securityIpList;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            coreInstanceType: this.coreInstanceType,
            engine: this.engine,
            engineVersion: this.engineVersion,
            nodeCount: this.nodeCount,
            payType: this.payType,
            zoneId: this.zoneId,
            autoRenewPeriod: this.autoRenewPeriod,
            clusterName: this.clusterName,
            coldStorageSize: this.coldStorageSize,
            deletionProtection: this.deletionProtection,
            diskSize: this.diskSize,
            diskType: this.diskType,
            encryptionKey: this.encryptionKey,
            masterInstanceType: this.masterInstanceType,
            period: this.period,
            periodUnit: this.periodUnit,
            resourceGroupId: this.resourceGroupId,
            securityIpList: this.securityIpList,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosMultiZoneClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosMultiZoneClusterProps`
 *
 * @returns the result of the validation.
 */
function RosMultiZoneClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('standbyZoneId', ros.requiredValidator)(properties.standbyZoneId));
    errors.collect(ros.propertyValidator('standbyZoneId', ros.validateString)(properties.standbyZoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('masterInstanceType', ros.validateString)(properties.masterInstanceType));
    errors.collect(ros.propertyValidator('logDiskSize', ros.requiredValidator)(properties.logDiskSize));
    errors.collect(ros.propertyValidator('logDiskSize', ros.validateNumber)(properties.logDiskSize));
    errors.collect(ros.propertyValidator('standbyVSwitchId', ros.requiredValidator)(properties.standbyVSwitchId));
    errors.collect(ros.propertyValidator('standbyVSwitchId', ros.validateString)(properties.standbyVSwitchId));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('coreInstanceType', ros.requiredValidator)(properties.coreInstanceType));
    errors.collect(ros.propertyValidator('coreInstanceType', ros.validateString)(properties.coreInstanceType));
    if(properties.clusterName && (typeof properties.clusterName) !== 'object') {
        errors.collect(ros.propertyValidator('clusterName', ros.validateAllowedPattern)({
          data: properties.clusterName,
          reg: /^[a-zA-Z0-9_-]{2,30}$/
        }));
    }
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["hbaseue"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('arbiterZoneId', ros.requiredValidator)(properties.arbiterZoneId));
    errors.collect(ros.propertyValidator('arbiterZoneId', ros.validateString)(properties.arbiterZoneId));
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('primaryZoneId', ros.requiredValidator)(properties.primaryZoneId));
    errors.collect(ros.propertyValidator('primaryZoneId', ros.validateString)(properties.primaryZoneId));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["2.0"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('multiZoneCombination', ros.requiredValidator)(properties.multiZoneCombination));
    errors.collect(ros.propertyValidator('multiZoneCombination', ros.validateString)(properties.multiZoneCombination));
    errors.collect(ros.propertyValidator('coreNodeCount', ros.requiredValidator)(properties.coreNodeCount));
    errors.collect(ros.propertyValidator('coreNodeCount', ros.validateNumber)(properties.coreNodeCount));
    errors.collect(ros.propertyValidator('archVersion', ros.requiredValidator)(properties.archVersion));
    if(properties.archVersion && (typeof properties.archVersion) !== 'object') {
        errors.collect(ros.propertyValidator('archVersion', ros.validateAllowedValues)({
          data: properties.archVersion,
          allowedValues: ["2.0"],
        }));
    }
    errors.collect(ros.propertyValidator('archVersion', ros.validateString)(properties.archVersion));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('logInstanceType', ros.requiredValidator)(properties.logInstanceType));
    errors.collect(ros.propertyValidator('logInstanceType', ros.validateString)(properties.logInstanceType));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('primaryVSwitchId', ros.requiredValidator)(properties.primaryVSwitchId));
    errors.collect(ros.propertyValidator('primaryVSwitchId', ros.validateString)(properties.primaryVSwitchId));
    errors.collect(ros.propertyValidator('arbiterVSwitchId', ros.requiredValidator)(properties.arbiterVSwitchId));
    errors.collect(ros.propertyValidator('arbiterVSwitchId', ros.validateString)(properties.arbiterVSwitchId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('coreDiskType', ros.requiredValidator)(properties.coreDiskType));
    errors.collect(ros.propertyValidator('coreDiskType', ros.validateString)(properties.coreDiskType));
    errors.collect(ros.propertyValidator('logNodeCount', ros.requiredValidator)(properties.logNodeCount));
    errors.collect(ros.propertyValidator('logNodeCount', ros.validateNumber)(properties.logNodeCount));
    errors.collect(ros.propertyValidator('logDiskType', ros.requiredValidator)(properties.logDiskType));
    errors.collect(ros.propertyValidator('logDiskType', ros.validateString)(properties.logDiskType));
    errors.collect(ros.propertyValidator('coreDiskSize', ros.requiredValidator)(properties.coreDiskSize));
    errors.collect(ros.propertyValidator('coreDiskSize', ros.validateNumber)(properties.coreDiskSize));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosMultiZoneClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBase::MultiZoneCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosMultiZoneClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBase::MultiZoneCluster` resource.
 */
// @ts-ignore TS6133
function rosMultiZoneClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMultiZoneClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'ArbiterVSwitchId': ros.stringToRosTemplate(properties.arbiterVSwitchId),
      'ArbiterZoneId': ros.stringToRosTemplate(properties.arbiterZoneId),
      'ArchVersion': ros.stringToRosTemplate(properties.archVersion),
      'CoreDiskSize': ros.numberToRosTemplate(properties.coreDiskSize),
      'CoreDiskType': ros.stringToRosTemplate(properties.coreDiskType),
      'CoreInstanceType': ros.stringToRosTemplate(properties.coreInstanceType),
      'CoreNodeCount': ros.numberToRosTemplate(properties.coreNodeCount),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'LogDiskSize': ros.numberToRosTemplate(properties.logDiskSize),
      'LogDiskType': ros.stringToRosTemplate(properties.logDiskType),
      'LogInstanceType': ros.stringToRosTemplate(properties.logInstanceType),
      'LogNodeCount': ros.numberToRosTemplate(properties.logNodeCount),
      'MultiZoneCombination': ros.stringToRosTemplate(properties.multiZoneCombination),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'PrimaryVSwitchId': ros.stringToRosTemplate(properties.primaryVSwitchId),
      'PrimaryZoneId': ros.stringToRosTemplate(properties.primaryZoneId),
      'StandbyVSwitchId': ros.stringToRosTemplate(properties.standbyVSwitchId),
      'StandbyZoneId': ros.stringToRosTemplate(properties.standbyZoneId),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'ClusterName': ros.stringToRosTemplate(properties.clusterName),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'MasterInstanceType': ros.stringToRosTemplate(properties.masterInstanceType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityIPList': ros.stringToRosTemplate(properties.securityIpList),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBase::MultiZoneCluster`, which is used to create an ApsaraDB for HBase cluster that resides in multiple zones.
 * @Note This class does not contain additional functions, so it is recommended to use the `MultiZoneCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
 */
export class RosMultiZoneCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBase::MultiZoneCluster";

    /**
     * @Attribute ClusterId: The ID of the instance.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    public readonly attrServiceConnAddrs: ros.IResolvable;

    /**
     * @Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    public readonly attrSlbConnAddrs: ros.IResolvable;

    /**
     * @Attribute ThriftConn: Thrift Connection address list.
     */
    public readonly attrThriftConn: ros.IResolvable;

    /**
     * @Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    public readonly attrUiProxyConnAddrInfo: ros.IResolvable;

    /**
     * @Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    public readonly attrZkConnAddrs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
     */
    public arbiterVSwitchId: string | ros.IResolvable;

    /**
     * @Property arbiterZoneId: Arbiter zond id.
     */
    public arbiterZoneId: string | ros.IResolvable;

    /**
     * @Property archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
     */
    public archVersion: string | ros.IResolvable;

    /**
     * @Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    public coreDiskSize: number | ros.IResolvable;

    /**
     * @Property coreDiskType: Core node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    public coreDiskType: string | ros.IResolvable;

    /**
     * @Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    public coreInstanceType: string | ros.IResolvable;

    /**
     * @Property coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
     */
    public coreNodeCount: number | ros.IResolvable;

    /**
     * @Property engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the engine. Valid values:
     * hbaseue:2.0
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    public logDiskSize: number | ros.IResolvable;

    /**
     * @Property logDiskType: Log node disk type. Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    public logDiskType: string | ros.IResolvable;

    /**
     * @Property logInstanceType: Log instance type.
     */
    public logInstanceType: string | ros.IResolvable;

    /**
     * @Property logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
     */
    public logNodeCount: number | ros.IResolvable;

    /**
     * @Property multiZoneCombination: Availability zone combination.
     */
    public multiZoneCombination: string | ros.IResolvable;

    /**
     * @Property payType: The billing method.
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
     */
    public primaryVSwitchId: string | ros.IResolvable;

    /**
     * @Property primaryZoneId: Availability zone ID of the primary availability zone instance.
     */
    public primaryZoneId: string | ros.IResolvable;

    /**
     * @Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
     */
    public standbyVSwitchId: string | ros.IResolvable;

    /**
     * @Property standbyZoneId: Standby zone id.
     */
    public standbyZoneId: string | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property clusterName: The name of the instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    public clusterName: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    public masterInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period.
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription period. Valid values:
     * year
     * month
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMultiZoneClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMultiZoneCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrServiceConnAddrs = this.getAtt('ServiceConnAddrs');
        this.attrSlbConnAddrs = this.getAtt('SlbConnAddrs');
        this.attrThriftConn = this.getAtt('ThriftConn');
        this.attrUiProxyConnAddrInfo = this.getAtt('UiProxyConnAddrInfo');
        this.attrZkConnAddrs = this.getAtt('ZkConnAddrs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.arbiterVSwitchId = props.arbiterVSwitchId;
        this.arbiterZoneId = props.arbiterZoneId;
        this.archVersion = props.archVersion;
        this.coreDiskSize = props.coreDiskSize;
        this.coreDiskType = props.coreDiskType;
        this.coreInstanceType = props.coreInstanceType;
        this.coreNodeCount = props.coreNodeCount;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.logDiskSize = props.logDiskSize;
        this.logDiskType = props.logDiskType;
        this.logInstanceType = props.logInstanceType;
        this.logNodeCount = props.logNodeCount;
        this.multiZoneCombination = props.multiZoneCombination;
        this.payType = props.payType;
        this.primaryVSwitchId = props.primaryVSwitchId;
        this.primaryZoneId = props.primaryZoneId;
        this.standbyVSwitchId = props.standbyVSwitchId;
        this.standbyZoneId = props.standbyZoneId;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.clusterName = props.clusterName;
        this.deletionProtection = props.deletionProtection;
        this.masterInstanceType = props.masterInstanceType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resourceGroupId = props.resourceGroupId;
        this.securityIpList = props.securityIpList;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            arbiterVSwitchId: this.arbiterVSwitchId,
            arbiterZoneId: this.arbiterZoneId,
            archVersion: this.archVersion,
            coreDiskSize: this.coreDiskSize,
            coreDiskType: this.coreDiskType,
            coreInstanceType: this.coreInstanceType,
            coreNodeCount: this.coreNodeCount,
            engine: this.engine,
            engineVersion: this.engineVersion,
            logDiskSize: this.logDiskSize,
            logDiskType: this.logDiskType,
            logInstanceType: this.logInstanceType,
            logNodeCount: this.logNodeCount,
            multiZoneCombination: this.multiZoneCombination,
            payType: this.payType,
            primaryVSwitchId: this.primaryVSwitchId,
            primaryZoneId: this.primaryZoneId,
            standbyVSwitchId: this.standbyVSwitchId,
            standbyZoneId: this.standbyZoneId,
            autoRenewPeriod: this.autoRenewPeriod,
            clusterName: this.clusterName,
            deletionProtection: this.deletionProtection,
            masterInstanceType: this.masterInstanceType,
            period: this.period,
            periodUnit: this.periodUnit,
            resourceGroupId: this.resourceGroupId,
            securityIpList: this.securityIpList,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMultiZoneClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
