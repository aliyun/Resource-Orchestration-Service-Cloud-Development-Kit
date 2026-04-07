import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDedicatedBlockStorageCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
 */
export interface RosDedicatedBlockStorageClusterProps {
    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly dedicatedBlockStorageClusterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DedicatedBlockStorageCluster`, which is used to query the information about a dedicated block storage cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedBlockStorageCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
 */
export declare class RosDedicatedBlockStorageCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DedicatedBlockStorageCluster";
    /**
     * @Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrAvailableCapacity: ros.IResolvable;
    /**
     * @Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the dedicated block storage cluster was created. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly attrDedicatedBlockStorageClusterId: ros.IResolvable;
    /**
     * @Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
     */
    readonly attrDedicatedBlockStorageClusterName: ros.IResolvable;
    /**
     * @Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrDeliveryCapacity: ros.IResolvable;
    /**
     * @Attribute Description: The description of the dedicated block storage cluster.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute PerformanceLevel: The performance level of disks.
     */
    readonly attrPerformanceLevel: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SupportedCategory: This parameter is not supported.
     */
    readonly attrSupportedCategory: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the dedicated block storage cluster.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TotalCapacity: The total capacity of the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrTotalCapacity: ros.IResolvable;
    /**
     * @Attribute Type: The dedicated block storage cluster performance type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
     */
    readonly attrUsedCapacity: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone ID of the dedicated block storage cluster.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    dedicatedBlockStorageClusterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedBlockStorageClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDedicatedBlockStorageClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export interface RosDedicatedBlockStorageClustersProps {
    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly dedicatedBlockStorageClusterId?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DedicatedBlockStorageClusters`, which is used to query dedicated block storage clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedBlockStorageClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export declare class RosDedicatedBlockStorageClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DedicatedBlockStorageClusters";
    /**
     * @Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.
     */
    readonly attrDedicatedBlockStorageClusterIds: ros.IResolvable;
    /**
     * @Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.
     */
    readonly attrDedicatedBlockStorageClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    dedicatedBlockStorageClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedBlockStorageClustersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDiskReplicaGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
 */
export interface RosDiskReplicaGroupProps {
    /**
     * @Property replicaGroupId: The ID of the consistent replication group.
     */
    readonly replicaGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaGroup`, which is used to query the information about a replication pair-consistent group.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
 */
export declare class RosDiskReplicaGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaGroup";
    /**
     * @Attribute Description: The description of the consistent replication group.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable;
    /**
     * @Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable;
    /**
     * @Attribute DiskReplicaGroupName: The name of the consistent replication group.
     */
    readonly attrDiskReplicaGroupName: ros.IResolvable;
    /**
     * @Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed. This parameter provides the return value as a timestamp. Unit: seconds.
     */
    readonly attrLastRecoverPoint: ros.IResolvable;
    /**
     * @Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    readonly attrPairIds: ros.IResolvable;
    /**
     * @Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    readonly attrPairNumber: ros.IResolvable;
    /**
     * @Attribute PrimaryRegion: The initial source region of the replication group.
     */
    readonly attrPrimaryRegion: ros.IResolvable;
    /**
     * @Attribute PrimaryZone: The initial source available area of the replication group.
     */
    readonly attrPrimaryZone: ros.IResolvable;
    /**
     * @Attribute RPO: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    readonly attrRpo: ros.IResolvable;
    /**
     * @Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    readonly attrReplicaGroupId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Site: Site information sources for replication pairs and consistent replication groups.
     */
    readonly attrSite: ros.IResolvable;
    /**
     * @Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable;
    /**
     * @Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly attrSourceZoneId: ros.IResolvable;
    /**
     * @Attribute StandbyRegion: The initial destination region of the replication group.
     */
    readonly attrStandbyRegion: ros.IResolvable;
    /**
     * @Attribute StandbyZone: The initial destination zone of the replication group.
     */
    readonly attrStandbyZone: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the replication pair-consistent group.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property replicaGroupId: The ID of the consistent replication group.
     */
    replicaGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDiskReplicaGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
 */
export interface RosDiskReplicaGroupsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    readonly site?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaGroups`, which is used to query the information about replication pair-consistent groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
 */
export declare class RosDiskReplicaGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaGroups";
    /**
     * @Attribute DiskReplicaGroups: The list of disk replica groups.
     */
    readonly attrDiskReplicaGroups: ros.IResolvable;
    /**
     * @Attribute ReplicaGroupIds: The list of replica group IDs.
     */
    readonly attrReplicaGroupIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    site: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDiskReplicaPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
 */
export interface RosDiskReplicaPairProps {
    /**
     * @Property replicaPairId: The ID of the replication pair.
     */
    readonly replicaPairId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaPair`, which is used to query a replication pair.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
 */
export declare class RosDiskReplicaPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaPair";
    /**
     * @Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the replication pair was created. The value of this parameter is a timestamp. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the replication pair.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DestinationDiskId: The ID of the secondary disk.
     */
    readonly attrDestinationDiskId: ros.IResolvable;
    /**
     * @Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable;
    /**
     * @Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable;
    /**
     * @Attribute DiskId: The ID of the primary disk.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * @Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    readonly attrDiskReplicaPairName: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the replication pair.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute RPO: The recovery point objective (RPO) of the replication pair. Unit: seconds.
     */
    readonly attrRpo: ros.IResolvable;
    /**
     * @Attribute ReplicaPairId: The ID of the replication pair.
     */
    readonly attrReplicaPairId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SourceZoneId: The zone ID of the primary disk.
     */
    readonly attrSourceZoneId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the replication pair.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property replicaPairId: The ID of the replication pair.
     */
    replicaPairId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDiskReplicaPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export interface RosDiskReplicaPairsProps {
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EBS::DiskReplicaPairs`, which is used to query the information about replication pairs.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskReplicaPairs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export declare class RosDiskReplicaPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaPairs";
    /**
     * @Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    readonly attrDiskReplicaPairs: ros.IResolvable;
    /**
     * @Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    readonly attrReplicaPairIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
