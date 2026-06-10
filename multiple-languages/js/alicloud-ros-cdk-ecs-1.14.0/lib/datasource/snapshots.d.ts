import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshots } from './ecs.generated';
export { RosSnapshots as SnapshotsProperty };
/**
 * Properties for defining a `Snapshots`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
 */
export interface SnapshotsProps {
    /**
     * Property category: The category of the snapshot. Valid values:
     * Standard: normal snapshot
     * Flash: local snapshot
     * The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
     *  If you have used local snapshots before December 14, 2020, you can use this parameter.
     *  If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
     *  Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
     */
    readonly category?: string | ros.IResolvable;
    /**
     * Property diskId: The ID of the disk.
     */
    readonly diskId?: string | ros.IResolvable;
    /**
     * Property encrypted: Specifies whether the snapshot is encrypted. Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosSnapshots.FiltersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
     */
    readonly snapshotIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property snapshotLinkId: The ID of the snapshot chain.
     */
    readonly snapshotLinkId?: string | ros.IResolvable;
    /**
     * Property snapshotName: The name of the snapshot.
     */
    readonly snapshotName?: string | ros.IResolvable;
    /**
     * Property snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values:
     * auto: automatic snapshot
     * user: manual snapshot
     * all: all snapshot types
     */
    readonly snapshotType?: string | ros.IResolvable;
    /**
     * Property sourceDiskType: The type of the source disk for which the snapshot was created. Valid values:
     * System: system disk
     * Data: data disk
     * Note These values are case-insensitive.
     */
    readonly sourceDiskType?: string | ros.IResolvable;
    /**
     * Property status: The status of the snapshot. Default value: all. Valid values:
     * progressing: The snapshot is being created.
     * accomplished: The snapshot is created.
     * failed: The snapshot fails to be created.
     * all: all snapshot statuses.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property tags: Tags of snapshot.
     */
    readonly tags?: RosSnapshots.TagsProperty[];
    /**
     * Property usage: The type of the snapshot. Default value: all. Valid values:
     * image: The snapshot has been used to create custom images.
     * disk: The snapshot has been used to create disks.
     * image_disk: The snapshot has been used to create custom images and data disks.
     * none: The snapshot has not been used to create custom images or disks.
     */
    readonly usage?: string | ros.IResolvable;
}
/**
 * Represents a `Snapshots`.
 */
export interface ISnapshots extends ros.IResource {
    readonly props: SnapshotsProps;
    /**
     * Attribute SnapshotIds: the list of snapshot ids.
     */
    readonly attrSnapshotIds: ros.IResolvable | string;
    /**
     * Attribute Snapshots: the list of snapshots.
     */
    readonly attrSnapshots: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Snapshots`, which is used to query all snapshots of an Elastic Compute Service (ECS) instance or a disk.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnapshots`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
 */
export declare class Snapshots extends ros.Resource implements ISnapshots {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SnapshotsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SnapshotIds: the list of snapshot ids.
     */
    readonly attrSnapshotIds: ros.IResolvable | string;
    /**
     * Attribute Snapshots: the list of snapshots.
     */
    readonly attrSnapshots: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SnapshotsProps, enableResourcePropertyConstraint?: boolean);
}
