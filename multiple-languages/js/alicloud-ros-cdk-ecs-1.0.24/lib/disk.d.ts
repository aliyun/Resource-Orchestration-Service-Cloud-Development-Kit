import * as ros from '@alicloud/ros-cdk-core';
import { RosDisk } from './ecs.generated';
export { RosDisk as DiskProperty };
/**
 * Properties for defining a `Disk`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
 */
export interface DiskProps {
    /**
     * Property autoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * Property burstingEnabled: Whether enable bursting.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;
    /**
     * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to false.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;
    /**
     * Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property diskCategory: The disk category, now support cloud\/cloud_ssd\/cloud_essd\/cloud_efficiency\/san_ssd\/san_efficiency\/cloud_auto, depends the region.
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
     * Property instanceId: Create a cloud disk and automatically mount it to the specified InstanceId.
     * - Once the instance ID is set, the ResourceGroupId, Tags, and KMSKeyId parameters you set are ignored.
     * - You cannot specify both ZoneId and InstanceId.
     * Default value: null, meaning that a pay-as-you-go cloud drive is created, and the region of the drive is defined by the RegionId and ZoneId.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property kmsKeyId: KMS key ID used by the cloud disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * Property multiAttach: Specifies whether to enable the multi-attach feature for the disk. Valid values:
     * Disabled: disables the multi-attach feature.
     * Enabled: enables the multi-attach feature. Set the value to Enabled only for ESSDs.
     * Default value: Disabled.
     */
    readonly multiAttach?: string | ros.IResolvable;
    /**
     * Property performanceLevel: The performance level you select for an ESSD.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
     */
    readonly performanceLevel?: string | ros.IResolvable;
    /**
     * Property provisionedIops: Provisioning IOPS.
     */
    readonly provisionedIops?: number | ros.IResolvable;
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
    /**
     * Property zoneId: Create a pay-as-you-go cloud drive within the specified availability area.
     * - If you do not set InstanceId, ZoneId is required.
     * - You cannot specify both ZoneId and InstanceId.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Disk`, which is used to create a cloud disk for an Elastic Compute Service (ECS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDisk`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-disk
 */
export declare class Disk extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DiskProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DiskId: Id of created disk.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * Attribute Status: Created disk status.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DiskProps, enableResourcePropertyConstraint?: boolean);
}
