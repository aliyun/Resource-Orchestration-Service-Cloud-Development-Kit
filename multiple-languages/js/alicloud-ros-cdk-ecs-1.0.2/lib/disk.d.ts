import * as ros from '@alicloud/ros-cdk-core';
import { RosDisk } from './ecs.generated';
export { RosDisk as DiskProperty };
/**
 * Properties for defining a `ALIYUN::ECS::Disk`
 */
export interface DiskProps {
    /**
     * Property zoneId: The availability zone in which the volume will be created.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;
    /**
     * Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property diskCategory: The disk category, now support cloud/cloud_ssd/cloud_essd/cloud_efficiency/san_ssd/san_efficiency, depends the region.
     */
    readonly diskCategory?: string | ros.IResolvable;
    /**
     * Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly diskName?: string | ros.IResolvable;
    /**
     * Property encrypted: Whether disk is encrypted, default to false.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    readonly performanceLevel?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property size: The size of the disk unit in GB.
     */
    readonly size?: number | ros.IResolvable;
    /**
     * Property snapshotId: If specified, the backup used as the source to create disk.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * Property storageSetId: Storage set ID.
     */
    readonly storageSetId?: string | ros.IResolvable;
    /**
     * Property storageSetPartitionNumber: The number of storage set partitions.
     */
    readonly storageSetPartitionNumber?: number | ros.IResolvable;
    /**
     * Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDisk.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::ECS::Disk`
 */
export declare class Disk extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DiskId: Id of created disk.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * Attribute Status: Created disk status.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::Disk`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskProps, enableResourcePropertyConstraint?: boolean);
}
