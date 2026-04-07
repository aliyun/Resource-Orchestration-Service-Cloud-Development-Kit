import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaGroup } from './ebs.generated';
export { RosDiskReplicaGroup as DiskReplicaGroupProperty };
/**
 * Properties for defining a `DiskReplicaGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
 */
export interface DiskReplicaGroupProps {
    /**
     * Property replicaGroupId: The ID of the consistent replication group.
     */
    readonly replicaGroupId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `DiskReplicaGroup`.
 */
export interface IDiskReplicaGroup extends ros.IResource {
    readonly props: DiskReplicaGroupProps;
    /**
     * Attribute Description: The description of the consistent replication group.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable | string;
    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable | string;
    /**
     * Attribute DiskReplicaGroupName: The name of the consistent replication group.
     */
    readonly attrDiskReplicaGroupName: ros.IResolvable | string;
    /**
     * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed. This parameter provides the return value as a timestamp. Unit: seconds.
     */
    readonly attrLastRecoverPoint: ros.IResolvable | string;
    /**
     * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    readonly attrPairIds: ros.IResolvable | string;
    /**
     * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    readonly attrPairNumber: ros.IResolvable | string;
    /**
     * Attribute PrimaryRegion: The initial source region of the replication group.
     */
    readonly attrPrimaryRegion: ros.IResolvable | string;
    /**
     * Attribute PrimaryZone: The initial source available area of the replication group.
     */
    readonly attrPrimaryZone: ros.IResolvable | string;
    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    readonly attrRpo: ros.IResolvable | string;
    /**
     * Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    readonly attrReplicaGroupId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Site: Site information sources for replication pairs and consistent replication groups.
     */
    readonly attrSite: ros.IResolvable | string;
    /**
     * Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable | string;
    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly attrSourceZoneId: ros.IResolvable | string;
    /**
     * Attribute StandbyRegion: The initial destination region of the replication group.
     */
    readonly attrStandbyRegion: ros.IResolvable | string;
    /**
     * Attribute StandbyZone: The initial destination zone of the replication group.
     */
    readonly attrStandbyZone: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the replication pair-consistent group.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DiskReplicaGroup`, which is used to query the information about a replication pair-consistent group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
 */
export declare class DiskReplicaGroup extends ros.Resource implements IDiskReplicaGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DiskReplicaGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: The description of the consistent replication group.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable | string;
    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable | string;
    /**
     * Attribute DiskReplicaGroupName: The name of the consistent replication group.
     */
    readonly attrDiskReplicaGroupName: ros.IResolvable | string;
    /**
     * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed. This parameter provides the return value as a timestamp. Unit: seconds.
     */
    readonly attrLastRecoverPoint: ros.IResolvable | string;
    /**
     * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    readonly attrPairIds: ros.IResolvable | string;
    /**
     * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    readonly attrPairNumber: ros.IResolvable | string;
    /**
     * Attribute PrimaryRegion: The initial source region of the replication group.
     */
    readonly attrPrimaryRegion: ros.IResolvable | string;
    /**
     * Attribute PrimaryZone: The initial source available area of the replication group.
     */
    readonly attrPrimaryZone: ros.IResolvable | string;
    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
     */
    readonly attrRpo: ros.IResolvable | string;
    /**
     * Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    readonly attrReplicaGroupId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Site: Site information sources for replication pairs and consistent replication groups.
     */
    readonly attrSite: ros.IResolvable | string;
    /**
     * Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable | string;
    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly attrSourceZoneId: ros.IResolvable | string;
    /**
     * Attribute StandbyRegion: The initial destination region of the replication group.
     */
    readonly attrStandbyRegion: ros.IResolvable | string;
    /**
     * Attribute StandbyZone: The initial destination zone of the replication group.
     */
    readonly attrStandbyZone: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the replication pair-consistent group.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaGroupProps, enableResourcePropertyConstraint?: boolean);
}
