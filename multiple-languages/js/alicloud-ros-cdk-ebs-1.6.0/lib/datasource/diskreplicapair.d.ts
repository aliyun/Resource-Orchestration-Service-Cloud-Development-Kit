import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPair } from './ebs.generated';
export { RosDiskReplicaPair as DiskReplicaPairProperty };
/**
 * Properties for defining a `DiskReplicaPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
 */
export interface DiskReplicaPairProps {
    /**
     * Property replicaPairId: The ID of the replication pair.
     */
    readonly replicaPairId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `DiskReplicaPair`.
 */
export interface IDiskReplicaPair extends ros.IResource {
    readonly props: DiskReplicaPairProps;
    /**
     * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the replication pair was created. The value of this parameter is a timestamp. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the replication pair.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DestinationDiskId: The ID of the secondary disk.
     */
    readonly attrDestinationDiskId: ros.IResolvable | string;
    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable | string;
    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable | string;
    /**
     * Attribute DiskId: The ID of the primary disk.
     */
    readonly attrDiskId: ros.IResolvable | string;
    /**
     * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    readonly attrDiskReplicaPairName: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the replication pair.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RPO: The recovery point objective (RPO) of the replication pair. Unit: seconds.
     */
    readonly attrRpo: ros.IResolvable | string;
    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    readonly attrReplicaPairId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SourceZoneId: The zone ID of the primary disk.
     */
    readonly attrSourceZoneId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the replication pair.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DiskReplicaPair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
 */
export declare class DiskReplicaPair extends ros.Resource implements IDiskReplicaPair {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DiskReplicaPairProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the replication pair was created. The value of this parameter is a timestamp. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the replication pair.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DestinationDiskId: The ID of the secondary disk.
     */
    readonly attrDestinationDiskId: ros.IResolvable | string;
    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable | string;
    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly attrDestinationZoneId: ros.IResolvable | string;
    /**
     * Attribute DiskId: The ID of the primary disk.
     */
    readonly attrDiskId: ros.IResolvable | string;
    /**
     * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    readonly attrDiskReplicaPairName: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the replication pair.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RPO: The recovery point objective (RPO) of the replication pair. Unit: seconds.
     */
    readonly attrRpo: ros.IResolvable | string;
    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    readonly attrReplicaPairId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SourceZoneId: The zone ID of the primary disk.
     */
    readonly attrSourceZoneId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the replication pair.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaPairProps, enableResourcePropertyConstraint?: boolean);
}
