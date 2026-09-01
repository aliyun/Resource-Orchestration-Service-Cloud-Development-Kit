import * as ros from '@alicloud/ros-cdk-core';
import { RosCloneDisks } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCloneDisks as CloneDisksProperty };

/**
 * Properties for defining a `CloneDisks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
 */
export interface CloneDisksProps {

    /**
     * Property diskCategory: The type of the new disk. Valid values:
     * - `cloud_essd`: ESSD cloud disk.
     * - `cloud_auto`: ESSD AutoPL cloud disk.
     * - `cloud_essd_entry`: ESSD Entry cloud disk.
     * - `cloud_regional_disk_auto`: regional disk.
     * > Disk type limits for cloning
     * >
     * > - A non-regional disk can be cloned only as a non-regional disk.
     * >
     * > - A regional disk can be cloned only as a regional disk.
     */
    readonly diskCategory: string | ros.IResolvable;

    /**
     * Property multiAttach: Specifies whether to enable the multi-attach feature for the new disk. Valid
     * values:
     * - `Disabled`: Disables the multi-attach feature.
     * - `Enabled`: Enables the multi-attach feature. You can set this parameter to
     * `Enabled` only for ESSD cloud disks.
     */
    readonly multiAttach: string | ros.IResolvable;

    /**
     * Property size: The size of the new disk, in GiB. The value must be greater than or equal to the
     * size of the source disk. The value range varies based on the `DiskCategory`
     * value:
     * - `cloud_essd`: The value range depends on the `PerformanceLevel` value.
     * - `PL0`: 1 to 65,536
     * - `PL1`: 20 to 65,536
     * - `PL2`: 461 to 65,536
     * - `PL3`: 1,261 to 65,536
     * - `cloud_auto`: 1 to 65,536
     * - `cloud_essd_entry`: 10 to 32,768
     * - `cloud_regional_disk_auto`: 10 to 65,536
     */
    readonly size: number | ros.IResolvable;

    /**
     * Property sourceDiskId: The ID of the source disk.
     */
    readonly sourceDiskId: string | ros.IResolvable;

    /**
     * Property burstingEnabled: Specifies whether to enable performance bursting for the new disk. Valid values:
     * - `true`: Enables performance bursting.
     * - `false`: Disables performance bursting.
     * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
     * more information, see ESSD AutoPL cloud disks.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;

    /**
     * Property diskName: The name of the new disk. The name must be 2 to 128 characters in length. It must
     * start with a letter and can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     * Default value: none.
     */
    readonly diskName?: string | ros.IResolvable;

    /**
     * Property encrypted: Specifies whether to encrypt the new disk. Valid values:
     * - `true`: The disk is encrypted.
     * - `false`: The disk is not encrypted.
     * Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * Property performanceLevel: The performance level of the new ESSD cloud disk. Valid values:
     * - `PL0`: A single disk can deliver up to 10,000 random read\/write IOPS.
     * - `PL1`: A single disk can deliver up to 50,000 random read\/write IOPS.
     * - `PL2`: A single disk can deliver up to 100,000 random read\/write IOPS.
     * - `PL3`: A single disk can deliver up to 1,000,000 random read\/write IOPS.
     * > This parameter is required when `DiskCategory` is set to `cloud_essd`.
     */
    readonly performanceLevel?: string | ros.IResolvable;

    /**
     * Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk. Valid values:
     * - You cannot set this parameter for disks that are 3 GiB or smaller in size.
     * - For disks that are 4 GiB or larger in size, the value must be in the range of
     * `[0, min(1000 * Size - baseline performance, 50000)]`.
     * baseline performance = `max(min(1800 + 50 * Size, 50000), 3000)`.
     * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For
     * more information, see ESSD AutoPL cloud disks.
     */
    readonly provisionedIops?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to disk. Max support 20 tags to add during create disk. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCloneDisks.TagsProperty[];
}

/**
 * Represents a `CloneDisks`.
 */
export interface ICloneDisks extends ros.IResource {
    readonly props: CloneDisksProps;

    /**
     * Attribute DiskIds: The IDS of the disk.
     */
    readonly attrDiskIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::CloneDisks`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCloneDisks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-clonedisks
 */
export class CloneDisks extends ros.Resource implements ICloneDisks {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CloneDisksProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DiskIds: The IDS of the disk.
     */
    public readonly attrDiskIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CloneDisksProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCloneDisks = new RosCloneDisks(this, id,  {
            burstingEnabled: props.burstingEnabled,
            resourceGroupId: props.resourceGroupId,
            kmsKeyId: props.kmsKeyId,
            performanceLevel: props.performanceLevel,
            size: props.size,
            encrypted: props.encrypted,
            diskCategory: props.diskCategory,
            diskName: props.diskName,
            provisionedIops: props.provisionedIops,
            multiAttach: props.multiAttach,
            sourceDiskId: props.sourceDiskId,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCloneDisks;
        this.attrDiskIds = rosCloneDisks.attrDiskIds;
    }
}
