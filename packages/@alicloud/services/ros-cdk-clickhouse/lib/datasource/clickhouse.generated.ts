// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export interface RosDBClusterProps {

    /**
     * @Property dbClusterId: Instance ID.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the result of the validation.
 */
function RosDBClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbClusterId', ros.requiredValidator)(properties.dbClusterId));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::DBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::DBCluster` resource.
 */
// @ts-ignore TS6133
function rosDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::DBCluster`, which is used to query the information about an ApsaraDB for ClickHouse cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::DBCluster";

    /**
     * @Attribute AliUid: Alibaba Cloud account.
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * @Attribute Bid: The ID of the business process flow.
     */
    public readonly attrBid: ros.IResolvable;

    /**
     * @Attribute Category: Copy configuration, value description:.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute CommodityCode: Buy Product Code.
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * @Attribute ConnectionString: Connection string.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
     */
    public readonly attrDbClusterIpArrayName: ros.IResolvable;

    /**
     * @Attribute DBClusterId: Instance ID.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * @Attribute DBClusterName: The cluster description information.
     */
    public readonly attrDbClusterName: ros.IResolvable;

    /**
     * @Attribute DBClusterType: Instance type.
     */
    public readonly attrDbClusterType: ros.IResolvable;

    /**
     * @Attribute DbClusterNetworkType: Network type. Currently, only VPC is supported.
     */
    public readonly attrDbClusterNetworkType: ros.IResolvable;

    /**
     * @Attribute DbNodeClass: Set the node type.
     */
    public readonly attrDbNodeClass: ros.IResolvable;

    /**
     * @Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
     */
    public readonly attrDbNodeCount: ros.IResolvable;

    /**
     * @Attribute DbNodeStorage: Single-node storage space. Value range: 100 GB to 32000GB.
     */
    public readonly attrDbNodeStorage: ros.IResolvable;

    /**
     * @Attribute EncryptionKey: Key management service KMS key ID.
     */
    public readonly attrEncryptionKey: ros.IResolvable;

    /**
     * @Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
     */
    public readonly attrEncryptionType: ros.IResolvable;

    /**
     * @Attribute Engine: Engine.
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * @Attribute EngineVersion: The engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute ExpireTime: The expiration time.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute IsExpired: If the instance has expired.
     */
    public readonly attrIsExpired: ros.IResolvable;

    /**
     * @Attribute LockMode: The lock mode.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * @Attribute LockReason: Lock reason.
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * @Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
     */
    public readonly attrMaintainTime: ros.IResolvable;

    /**
     * @Attribute PaymentType: The paymen type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Port: Connection port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: A public IP address for the connection.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicIpAddr: Public IP address.
     */
    public readonly attrPublicIpAddr: ros.IResolvable;

    /**
     * @Attribute PublicPort: Public network port.
     */
    public readonly attrPublicPort: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ScaleOutStatus: Scale state.
     */
    public readonly attrScaleOutStatus: ros.IResolvable;

    /**
     * @Attribute SecurityIps: The whitelist supports the following two formats:.
     */
    public readonly attrSecurityIps: ros.IResolvable;

    /**
     * @Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * @Attribute SupportBackup: Support fallback scheme.
     */
    public readonly attrSupportBackup: ros.IResolvable;

    /**
     * @Attribute SupportHttpsPort: The system supports http port number.
     */
    public readonly attrSupportHttpsPort: ros.IResolvable;

    /**
     * @Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
     */
    public readonly attrSupportMysqlPort: ros.IResolvable;

    /**
     * @Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
     */
    public readonly attrSupportOss: ros.IResolvable;

    /**
     * @Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * @Attribute VpcId: VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VpcIpAddr: VPC IP address.
     */
    public readonly attrVpcIpAddr: ros.IResolvable;

    /**
     * @Attribute ZoneId: On behalf of the zone resource attribute field.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: Instance ID.
     */
    public dbClusterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliUid = this.getAtt('AliUid');
        this.attrBid = this.getAtt('Bid');
        this.attrCategory = this.getAtt('Category');
        this.attrCommodityCode = this.getAtt('CommodityCode');
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDbClusterIpArrayName = this.getAtt('DBClusterIPArrayName');
        this.attrDbClusterId = this.getAtt('DBClusterId');
        this.attrDbClusterName = this.getAtt('DBClusterName');
        this.attrDbClusterType = this.getAtt('DBClusterType');
        this.attrDbClusterNetworkType = this.getAtt('DbClusterNetworkType');
        this.attrDbNodeClass = this.getAtt('DbNodeClass');
        this.attrDbNodeCount = this.getAtt('DbNodeCount');
        this.attrDbNodeStorage = this.getAtt('DbNodeStorage');
        this.attrEncryptionKey = this.getAtt('EncryptionKey');
        this.attrEncryptionType = this.getAtt('EncryptionType');
        this.attrEngine = this.getAtt('Engine');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrIsExpired = this.getAtt('IsExpired');
        this.attrLockMode = this.getAtt('LockMode');
        this.attrLockReason = this.getAtt('LockReason');
        this.attrMaintainTime = this.getAtt('MaintainTime');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPort = this.getAtt('Port');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrPublicIpAddr = this.getAtt('PublicIpAddr');
        this.attrPublicPort = this.getAtt('PublicPort');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrScaleOutStatus = this.getAtt('ScaleOutStatus');
        this.attrSecurityIps = this.getAtt('SecurityIps');
        this.attrStorageType = this.getAtt('StorageType');
        this.attrSupportBackup = this.getAtt('SupportBackup');
        this.attrSupportHttpsPort = this.getAtt('SupportHttpsPort');
        this.attrSupportMysqlPort = this.getAtt('SupportMysqlPort');
        this.attrSupportOss = this.getAtt('SupportOss');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcCloudInstanceId = this.getAtt('VpcCloudInstanceId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVpcIpAddr = this.getAtt('VpcIpAddr');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export interface RosDBClustersProps {

    /**
     * @Property dbClusterId: Instance ID.
     */
    readonly dbClusterId?: string | ros.IResolvable;

    /**
     * @Property dbClusterName: The cluster description information.
     */
    readonly dbClusterName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the result of the validation.
 */
function RosDBClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbClusterName', ros.validateString)(properties.dbClusterName));
    errors.collect(ros.propertyValidator('dbClusterId', ros.validateString)(properties.dbClusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDBClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::DBClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosDBClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::DBClusters` resource.
 */
// @ts-ignore TS6133
function rosDBClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBClustersPropsValidator(properties).assertSuccess();
    }
    return {
      'DBClusterId': ros.stringToRosTemplate(properties.dbClusterId),
      'DBClusterName': ros.stringToRosTemplate(properties.dbClusterName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::DBClusters`, which is used to query the information about ApsaraDB for ClickHouse clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export class RosDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::DBClusters";

    /**
     * @Attribute DBClusterIds: The list of db cluster IDs.
     */
    public readonly attrDbClusterIds: ros.IResolvable;

    /**
     * @Attribute DBClusters: The list of db clusters.
     */
    public readonly attrDbClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbClusterId: Instance ID.
     */
    public dbClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property dbClusterName: The cluster description information.
     */
    public dbClusterName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbClusterIds = this.getAtt('DBClusterIds');
        this.attrDbClusters = this.getAtt('DBClusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbClusterId = props.dbClusterId;
        this.dbClusterName = props.dbClusterName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbClusterId: this.dbClusterId,
            dbClusterName: this.dbClusterName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEnterpriseDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
 */
export interface RosEnterpriseDBClusterProps {

    /**
     * @Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEnterpriseDBClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterProps`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosEnterpriseDBClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::EnterpriseDBCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::EnterpriseDBCluster` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnterpriseDBClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::EnterpriseDBCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
 */
export class RosEnterpriseDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::EnterpriseDBCluster";

    /**
     * @Attribute Category: Type, value description: enterprise: Enterprise Edition.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute ChargeType: The billing method. Enterprise Edition clusters use the pay-as-you-go billing method.
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * @Attribute ComputingGroupIds: The list of computing group IDs.
     */
    public readonly attrComputingGroupIds: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the cluster.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The cluster ID.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute Description: The cluster description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DisabledPorts: The specified database port is disabled. Multiple ports separated by commas (,) are supported.
     */
    public readonly attrDisabledPorts: ros.IResolvable;

    /**
     * @Attribute Endpoints: List of Endpoint details.
     */
    public readonly attrEndpoints: ros.IResolvable;

    /**
     * @Attribute Engine: The engine type.
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * @Attribute EngineMinorVersion: The minor version number of the cluster engine.
     */
    public readonly attrEngineMinorVersion: ros.IResolvable;

    /**
     * @Attribute EngineVersion: The engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute InstanceNetworkType: The network type of the instance.
     */
    public readonly attrInstanceNetworkType: ros.IResolvable;

    /**
     * @Attribute MaintainEndTime: The end time of the maintenance window.
     */
    public readonly attrMaintainEndTime: ros.IResolvable;

    /**
     * @Attribute MaintainStartTime: The maintainable time start time.
     */
    public readonly attrMaintainStartTime: ros.IResolvable;

    /**
     * @Attribute MultiZones: The information about the zones.
     */
    public readonly attrMultiZones: ros.IResolvable;

    /**
     * @Attribute NodeCount: The number of nodes. The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
     */
    public readonly attrNodeCount: ros.IResolvable;

    /**
     * @Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
     */
    public readonly attrNodeScaleMax: ros.IResolvable;

    /**
     * @Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
     */
    public readonly attrNodeScaleMin: ros.IResolvable;

    /**
     * @Attribute Nodes: The Node information.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * @Attribute ObjectStoreSize: The size of the object storage space.
     */
    public readonly attrObjectStoreSize: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ScaleMax: The maximum capacity for elastic scaling.
     */
    public readonly attrScaleMax: ros.IResolvable;

    /**
     * @Attribute ScaleMin: The minimum capacity for elastic scaling.
     */
    public readonly attrScaleMin: ros.IResolvable;

    /**
     * @Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
     */
    public readonly attrStorageQuota: ros.IResolvable;

    /**
     * @Attribute StorageSize: The size of the storage space. Unit: GB.
     */
    public readonly attrStorageSize: ros.IResolvable;

    /**
     * @Attribute StorageType: The storage type.
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * @Attribute Tags: The details of the tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VpcId: The VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VswitchId: The VSwitch ID.
     */
    public readonly attrVswitchId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The cluster ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnterpriseDBCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCategory = this.getAtt('Category');
        this.attrChargeType = this.getAtt('ChargeType');
        this.attrComputingGroupIds = this.getAtt('ComputingGroupIds');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDescription = this.getAtt('Description');
        this.attrDisabledPorts = this.getAtt('DisabledPorts');
        this.attrEndpoints = this.getAtt('Endpoints');
        this.attrEngine = this.getAtt('Engine');
        this.attrEngineMinorVersion = this.getAtt('EngineMinorVersion');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrInstanceNetworkType = this.getAtt('InstanceNetworkType');
        this.attrMaintainEndTime = this.getAtt('MaintainEndTime');
        this.attrMaintainStartTime = this.getAtt('MaintainStartTime');
        this.attrMultiZones = this.getAtt('MultiZones');
        this.attrNodeCount = this.getAtt('NodeCount');
        this.attrNodeScaleMax = this.getAtt('NodeScaleMax');
        this.attrNodeScaleMin = this.getAtt('NodeScaleMin');
        this.attrNodes = this.getAtt('Nodes');
        this.attrObjectStoreSize = this.getAtt('ObjectStoreSize');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrScaleMax = this.getAtt('ScaleMax');
        this.attrScaleMin = this.getAtt('ScaleMin');
        this.attrStorageQuota = this.getAtt('StorageQuota');
        this.attrStorageSize = this.getAtt('StorageSize');
        this.attrStorageType = this.getAtt('StorageType');
        this.attrTags = this.getAtt('Tags');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVswitchId = this.getAtt('VswitchId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnterpriseDBClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEnterpriseDBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
 */
export interface RosEnterpriseDBClustersProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEnterpriseDBClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClustersProps`
 *
 * @returns the result of the validation.
 */
function RosEnterpriseDBClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosEnterpriseDBClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::EnterpriseDBClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosEnterpriseDBClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ClickHouse::EnterpriseDBClusters` resource.
 */
// @ts-ignore TS6133
function rosEnterpriseDBClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnterpriseDBClustersPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::EnterpriseDBClusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
 */
export class RosEnterpriseDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::EnterpriseDBClusters";

    /**
     * @Attribute DBInstanceIds: The list of DB instance IDs.
     */
    public readonly attrDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute EnterpriseDBClusters: The list of enterprise DB clusters.
     */
    public readonly attrEnterpriseDbClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnterpriseDBClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceIds = this.getAtt('DBInstanceIds');
        this.attrEnterpriseDbClusters = this.getAtt('EnterpriseDBClusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnterpriseDBClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
