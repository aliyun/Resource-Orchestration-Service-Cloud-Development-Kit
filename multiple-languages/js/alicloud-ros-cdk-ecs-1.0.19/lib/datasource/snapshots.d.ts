import * as ros from '@alicloud/ros-cdk-core';
import { RosSnapshots } from './ecs.generated';
export { RosSnapshots as SnapshotsProperty };
/**
 * Properties for defining a `DATASOURCE::ECS::Snapshots`
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
 * A ROS resource type:  `DATASOURCE::ECS::Snapshots`
 */
export declare class Snapshots extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SnapshotIds: the list of snapshot ids.
     */
    readonly attrSnapshotIds: ros.IResolvable;
    /**
     * Attribute Snapshots: the list of snapshots.
     */
    readonly attrSnapshots: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ECS::Snapshots`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SnapshotsProps, enableResourcePropertyConstraint?: boolean);
}
