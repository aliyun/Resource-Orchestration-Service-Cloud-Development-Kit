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
