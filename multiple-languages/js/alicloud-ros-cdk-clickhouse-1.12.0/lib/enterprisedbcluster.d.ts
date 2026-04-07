import * as ros from '@alicloud/ros-cdk-core';
import { RosEnterpriseDBCluster } from './clickhouse.generated';
export { RosEnterpriseDBCluster as EnterpriseDBClusterProperty };
/**
 * Properties for defining a `EnterpriseDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
 */
export interface EnterpriseDBClusterProps {
    /**
     * Property engine: The engine type.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * Property nodeCount: The number of nodes.
     */
    readonly nodeCount: number | ros.IResolvable;
    /**
     * Property nodeScaleMax: The maximum number of nodes for scaling.
     */
    readonly nodeScaleMax: number | ros.IResolvable;
    /**
     * Property nodeScaleMin: The minimum number of nodes for scaling.
     */
    readonly nodeScaleMin: number | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property backupSetId: The ID of the backup set.
     */
    readonly backupSetId?: string | ros.IResolvable;
    /**
     * Property dbInstanceDescription: The description of the database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property dbTimeZone: The time zone of the database.
     */
    readonly dbTimeZone?: string | ros.IResolvable;
    /**
     * Property deploySchema: The deployment schema.
     */
    readonly deploySchema?: string | ros.IResolvable;
    /**
     * Property multiZone: Multi-zone configuration.
     */
    readonly multiZone?: Array<RosEnterpriseDBCluster.MultiZoneProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property publicConnectionSetting: The public connection setting.
     */
    readonly publicConnectionSetting?: RosEnterpriseDBCluster.PublicConnectionSettingProperty | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property sourceDbInstanceId: The ID of the source database instance.
     */
    readonly sourceDbInstanceId?: string | ros.IResolvable;
    /**
     * Property storageQuota: The storage quota.
     */
    readonly storageQuota?: number | ros.IResolvable;
    /**
     * Property storageType: The type of storage.
     */
    readonly storageType?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to clickhouse_enterprise_db. Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEnterpriseDBCluster.TagsProperty[];
}
/**
 * Represents a `EnterpriseDBCluster`.
 */
export interface IEnterpriseDBCluster extends ros.IResource {
    readonly props: EnterpriseDBClusterProps;
    /**
     * Attribute DBInstanceId: The ID of the database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute PrivateConnectionString: The private connection string.
     */
    readonly attrPrivateConnectionString: ros.IResolvable | string;
    /**
     * Attribute PublicConnectionString: The public connection string.
     */
    readonly attrPublicConnectionString: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnterpriseDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
 */
export declare class EnterpriseDBCluster extends ros.Resource implements IEnterpriseDBCluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnterpriseDBClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DBInstanceId: The ID of the database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute PrivateConnectionString: The private connection string.
     */
    readonly attrPrivateConnectionString: ros.IResolvable | string;
    /**
     * Attribute PublicConnectionString: The public connection string.
     */
    readonly attrPublicConnectionString: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnterpriseDBClusterProps, enableResourcePropertyConstraint?: boolean);
}
