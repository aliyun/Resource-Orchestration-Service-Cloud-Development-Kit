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
     * Property diskCategory: The category of the disk.
     */
    readonly diskCategory: string | ros.IResolvable;

    /**
     * Property multiAttach: Whether to enable multi-attach for the disk. Valid values: Enabled, Disabled.
     */
    readonly multiAttach: string | ros.IResolvable;

    /**
     * Property size: The size of the disk in GiB.
     */
    readonly size: number | ros.IResolvable;

    /**
     * Property sourceDiskId: The ID of the source disk.
     */
    readonly sourceDiskId: string | ros.IResolvable;

    /**
     * Property burstingEnabled: Whether to enable bursting for the disk.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;

    /**
     * Property diskName: The name of the disk.
     */
    readonly diskName?: string | ros.IResolvable;

    /**
     * Property encrypted: Whether to encrypt the disk.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * Property kmsKeyId: The ID of the KMS key used to encrypt the disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * Property performanceLevel: The performance level of the disk.
     */
    readonly performanceLevel?: string | ros.IResolvable;

    /**
     * Property provisionedIops: The provisioned IOPS for the disk.
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
