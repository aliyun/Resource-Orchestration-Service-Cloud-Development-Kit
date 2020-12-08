import * as ros from '@alicloud/ros-cdk-core';
import { RosDisk } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDisk as DiskProperty };

/**
 * Properties for defining a `ALIYUN::ECS::Disk`
 */
export interface DiskProps {

    /**
     * @Property zoneId: The availability zone in which the volume will be created.
     */
    readonly zoneId: string;

    /**
     * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly autoSnapshotPolicyId?: string;

    /**
     * @Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.
     */
    readonly diskCategory?: string;

    /**
     * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly diskName?: string;

    /**
     * @Property encrypted: Whether disk is encrypted, default to false.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    readonly kmsKeyId?: string;

    /**
     * @Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly performanceLevel?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property size: The size of the disk unit in GB.
     */
    readonly size?: number;

    /**
     * @Property snapshotId: If specified, the backup used as the source to create disk.
     */
    readonly snapshotId?: string;

    /**
     * @Property storageSetId: Storage set ID.
     */
    readonly storageSetId?: string;

    /**
     * @Property storageSetPartitionNumber: The number of storage set partitions.
     */
    readonly storageSetPartitionNumber?: number;

    /**
     * @Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];
}

/**
 * A ROS resource type:  `ALIYUN::ECS::Disk`
 */
export class Disk extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute DiskId: Id of created disk.
     */
    public readonly attrDiskId: any;

    /**
     * @Attribute Status: Created disk status.
     */
    public readonly attrStatus: any;

    /**
     * Create a new `ALIYUN::ECS::Disk`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDisk = new RosDisk(this, id,  {
            description: props.description,
            kmsKeyId: props.kmsKeyId,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            encrypted: props.encrypted ? props.encrypted : false,
            performanceLevel: props.performanceLevel,
            size: props.size,
            deleteAutoSnapshot: props.deleteAutoSnapshot ? props.deleteAutoSnapshot : false,
            diskCategory: props.diskCategory,
            autoSnapshotPolicyId: props.autoSnapshotPolicyId,
            storageSetPartitionNumber: props.storageSetPartitionNumber,
            diskName: props.diskName,
            snapshotId: props.snapshotId,
            storageSetId: props.storageSetId,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDisk;
        this.attrDiskId = rosDisk.attrDiskId;
        this.attrStatus = rosDisk.attrStatus;
    }
}
