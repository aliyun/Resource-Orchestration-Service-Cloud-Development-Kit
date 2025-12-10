import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsInstance } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsInstance as DrdsInstanceProperty };

/**
 * Properties for defining a `DrdsInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
 */
export interface DrdsInstanceProps {

    /**
     * Property drdsInstanceId: The ID of the Drds instance.
     */
    readonly drdsInstanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `DrdsInstance`.
 */
export interface IDrdsInstance extends ros.IResource {
    readonly props: DrdsInstanceProps;

    /**
     * Attribute CommodityCode: The commodity code of the service.
     */
    readonly attrCommodityCode: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The timestamp that indicates when the instance is created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the instance.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DrdsInstanceId: The ID of the Drds instance.
     */
    readonly attrDrdsInstanceId: ros.IResolvable | string;

    /**
     * Attribute ExpireDate: The timestamp that indicates when the instance expires.
     */
    readonly attrExpireDate: ros.IResolvable | string;

    /**
     * Attribute InstRole: The role of the instance. Valid values:
* MASTER: The instance is a primary instance.
* SLAVE: The instance is a read-only instance to analyze complex queries.
* SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
     */
    readonly attrInstRole: ros.IResolvable | string;

    /**
     * Attribute InstanceSeries: The edition of the instance. Valid values:
* starter: Starter Edition
* enterprise: Enterprise Edition
* standard: Standard Edition
     */
    readonly attrInstanceSeries: ros.IResolvable | string;

    /**
     * Attribute InstanceSpec: The specification of the instance.
     */
    readonly attrInstanceSpec: ros.IResolvable | string;

    /**
     * Attribute Label: The tag of the instance. Valid values:
* NORMAL: The instance is a standard instance.
* HA: The instance is a high-availability (HA) instance.
* VPC: The instance is a VPC-based instance.
     */
    readonly attrLabel: ros.IResolvable | string;

    /**
     * Attribute MachineType: The machine type of the instance. Valid value: ecs.
     */
    readonly attrMachineType: ros.IResolvable | string;

    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
     */
    readonly attrMasterInstanceId: ros.IResolvable | string;

    /**
     * Attribute MysqlVersion: Engine version.
     */
    readonly attrMysqlVersion: ros.IResolvable | string;

    /**
     * Attribute NetworkType: The network type of the instance. Valid values:
* CLASSIC
* VPC
     */
    readonly attrNetworkType: ros.IResolvable | string;

    /**
     * Attribute OrderInstanceId: The ID of the purchased instance.
     */
    readonly attrOrderInstanceId: ros.IResolvable | string;

    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
     */
    readonly attrReadOnlyDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute StorageType: The storage type of the Drds database. Valid values:
* RDS
* PolarDB
     */
    readonly attrStorageType: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the instance. Valid values:
* PUBLIC: The returned instance is a shared instance.
* PRIVATE: The returned instance is a dedicated instance.
     */
    readonly attrType: ros.IResolvable | string;

    /**
     * Attribute Version: The version of the instance.
     */
    readonly attrVersion: ros.IResolvable | string;

    /**
     * Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
     */
    readonly attrVersionAction: ros.IResolvable | string;

    /**
     * Attribute Vips: The list of returned virtual IP addresses (VIPs).
     */
    readonly attrVips: ros.IResolvable | string;

    /**
     * Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The ID of the zone in which the resource is located.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::DrdsInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
 */
export class DrdsInstance extends ros.Resource implements IDrdsInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DrdsInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CommodityCode: The commodity code of the service.
     */
    public readonly attrCommodityCode: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The timestamp that indicates when the instance is created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the instance.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DrdsInstanceId: The ID of the Drds instance.
     */
    public readonly attrDrdsInstanceId: ros.IResolvable | string;

    /**
     * Attribute ExpireDate: The timestamp that indicates when the instance expires.
     */
    public readonly attrExpireDate: ros.IResolvable | string;

    /**
     * Attribute InstRole: The role of the instance. Valid values:
* MASTER: The instance is a primary instance.
* SLAVE: The instance is a read-only instance to analyze complex queries.
* SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
     */
    public readonly attrInstRole: ros.IResolvable | string;

    /**
     * Attribute InstanceSeries: The edition of the instance. Valid values:
* starter: Starter Edition
* enterprise: Enterprise Edition
* standard: Standard Edition
     */
    public readonly attrInstanceSeries: ros.IResolvable | string;

    /**
     * Attribute InstanceSpec: The specification of the instance.
     */
    public readonly attrInstanceSpec: ros.IResolvable | string;

    /**
     * Attribute Label: The tag of the instance. Valid values:
* NORMAL: The instance is a standard instance.
* HA: The instance is a high-availability (HA) instance.
* VPC: The instance is a VPC-based instance.
     */
    public readonly attrLabel: ros.IResolvable | string;

    /**
     * Attribute MachineType: The machine type of the instance. Valid value: ecs.
     */
    public readonly attrMachineType: ros.IResolvable | string;

    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
     */
    public readonly attrMasterInstanceId: ros.IResolvable | string;

    /**
     * Attribute MysqlVersion: Engine version.
     */
    public readonly attrMysqlVersion: ros.IResolvable | string;

    /**
     * Attribute NetworkType: The network type of the instance. Valid values:
* CLASSIC
* VPC
     */
    public readonly attrNetworkType: ros.IResolvable | string;

    /**
     * Attribute OrderInstanceId: The ID of the purchased instance.
     */
    public readonly attrOrderInstanceId: ros.IResolvable | string;

    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute StorageType: The storage type of the Drds database. Valid values:
* RDS
* PolarDB
     */
    public readonly attrStorageType: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the instance. Valid values:
* PUBLIC: The returned instance is a shared instance.
* PRIVATE: The returned instance is a dedicated instance.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Attribute Version: The version of the instance.
     */
    public readonly attrVersion: ros.IResolvable | string;

    /**
     * Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
     */
    public readonly attrVersionAction: ros.IResolvable | string;

    /**
     * Attribute Vips: The list of returned virtual IP addresses (VIPs).
     */
    public readonly attrVips: ros.IResolvable | string;

    /**
     * Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The ID of the zone in which the resource is located.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDrdsInstance = new RosDrdsInstance(this, id,  {
            drdsInstanceId: props.drdsInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsInstance;
        this.attrCommodityCode = rosDrdsInstance.attrCommodityCode;
        this.attrCreateTime = rosDrdsInstance.attrCreateTime;
        this.attrDescription = rosDrdsInstance.attrDescription;
        this.attrDrdsInstanceId = rosDrdsInstance.attrDrdsInstanceId;
        this.attrExpireDate = rosDrdsInstance.attrExpireDate;
        this.attrInstRole = rosDrdsInstance.attrInstRole;
        this.attrInstanceSeries = rosDrdsInstance.attrInstanceSeries;
        this.attrInstanceSpec = rosDrdsInstance.attrInstanceSpec;
        this.attrLabel = rosDrdsInstance.attrLabel;
        this.attrMachineType = rosDrdsInstance.attrMachineType;
        this.attrMasterInstanceId = rosDrdsInstance.attrMasterInstanceId;
        this.attrMysqlVersion = rosDrdsInstance.attrMysqlVersion;
        this.attrNetworkType = rosDrdsInstance.attrNetworkType;
        this.attrOrderInstanceId = rosDrdsInstance.attrOrderInstanceId;
        this.attrReadOnlyDbInstanceIds = rosDrdsInstance.attrReadOnlyDbInstanceIds;
        this.attrResourceGroupId = rosDrdsInstance.attrResourceGroupId;
        this.attrStorageType = rosDrdsInstance.attrStorageType;
        this.attrType = rosDrdsInstance.attrType;
        this.attrVersion = rosDrdsInstance.attrVersion;
        this.attrVersionAction = rosDrdsInstance.attrVersionAction;
        this.attrVips = rosDrdsInstance.attrVips;
        this.attrVpcCloudInstanceId = rosDrdsInstance.attrVpcCloudInstanceId;
        this.attrZoneId = rosDrdsInstance.attrZoneId;
    }
}
