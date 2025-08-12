import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPair } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DiskReplicaPair`, which is used to query a replication pair.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
 */
export class DiskReplicaPair extends ros.Resource implements IDiskReplicaPair {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DiskReplicaPairProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps.
     */
    public readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the replication pair was created. The value of this parameter is a timestamp. Unit: seconds.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the replication pair.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DestinationDiskId: The ID of the secondary disk.
     */
    public readonly attrDestinationDiskId: ros.IResolvable | string;

    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public readonly attrDestinationRegionId: ros.IResolvable | string;

    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public readonly attrDestinationZoneId: ros.IResolvable | string;

    /**
     * Attribute DiskId: The ID of the primary disk.
     */
    public readonly attrDiskId: ros.IResolvable | string;

    /**
     * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    public readonly attrDiskReplicaPairName: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the replication pair.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute RPO: The recovery point objective (RPO) of the replication pair. Unit: seconds.
     */
    public readonly attrRpo: ros.IResolvable | string;

    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SourceZoneId: The zone ID of the primary disk.
     */
    public readonly attrSourceZoneId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the replication pair.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaPairProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDiskReplicaPair = new RosDiskReplicaPair(this, id,  {
            replicaPairId: props.replicaPairId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskReplicaPair;
        this.attrBandwidth = rosDiskReplicaPair.attrBandwidth;
        this.attrCreateTime = rosDiskReplicaPair.attrCreateTime;
        this.attrDescription = rosDiskReplicaPair.attrDescription;
        this.attrDestinationDiskId = rosDiskReplicaPair.attrDestinationDiskId;
        this.attrDestinationRegionId = rosDiskReplicaPair.attrDestinationRegionId;
        this.attrDestinationZoneId = rosDiskReplicaPair.attrDestinationZoneId;
        this.attrDiskId = rosDiskReplicaPair.attrDiskId;
        this.attrDiskReplicaPairName = rosDiskReplicaPair.attrDiskReplicaPairName;
        this.attrPaymentType = rosDiskReplicaPair.attrPaymentType;
        this.attrRpo = rosDiskReplicaPair.attrRpo;
        this.attrReplicaPairId = rosDiskReplicaPair.attrReplicaPairId;
        this.attrResourceGroupId = rosDiskReplicaPair.attrResourceGroupId;
        this.attrSourceZoneId = rosDiskReplicaPair.attrSourceZoneId;
        this.attrTags = rosDiskReplicaPair.attrTags;
    }
}
